// ============================================================
// Regino's Menu Sync — Google Apps Script
// ============================================================
// Paste this entire file into your Google Sheet's Apps Script
// editor (Extensions > Apps Script), then follow the setup
// steps below.
//
// SETUP:
// 1. Replace GITHUB_TOKEN with a Personal Access Token from:
//    https://github.com/settings/tokens
//    (Scopes needed: Contents — read & write)
// 2. Save the script (Ctrl+S)
// 3. Run syncToGitHub() once manually to authorize permissions
// 4. Set up the trigger: Triggers (clock icon) > Add Trigger
//       Function: syncToGitHub
//       Event source: From spreadsheet
//       Event type: On change
// ============================================================

const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN_HERE'
const GITHUB_OWNER = 'RonaldRucker'
const GITHUB_REPO  = 'reginos-site'

// ------------------------------------------------------------
// Main sync function — called automatically on sheet changes
// ------------------------------------------------------------
function syncToGitHub() {
  // Throttle: skip if synced within the last 30 seconds
  const props = PropertiesService.getScriptProperties()
  const lastSync = Number(props.getProperty('lastSync') || 0)
  if (Date.now() - lastSync < 30000) return
  props.setProperty('lastSync', String(Date.now()))

  const ss = SpreadsheetApp.getActiveSpreadsheet()

  const menuJSON  = JSON.stringify(buildMenuData(ss.getSheetByName('Menu')), null, 2)
  const drinksJSON = JSON.stringify(buildDrinksData(ss.getSheetByName('Drinks')), null, 2)

  pushToGitHub('data/menu.json',   menuJSON,   'Update menu data from Google Sheets')
  pushToGitHub('data/drinks.json', drinksJSON, 'Update drinks data from Google Sheets')
}

// ------------------------------------------------------------
// Build menu.json structure from the Menu tab
// Columns: A=Section  B=Subtitle  C=Name  D=Description  E=Price  F=Note
// ------------------------------------------------------------
function buildMenuData(sheet) {
  const rows = sheet.getDataRange().getValues().slice(1) // skip header
  const sections = {}

  rows.forEach(function(row) {
    const section = String(row[0] || '').trim()
    if (!section) return

    if (!sections[section]) {
      sections[section] = { title: section, subtitle: String(row[1] || ''), items: [] }
    }

    const item = {
      name:        String(row[2] || ''),
      description: String(row[3] || ''),
      price:       String(row[4] || ''),
    }
    const note = String(row[5] || '').trim()
    if (note) item.note = note

    sections[section].items.push(item)
  })

  return Object.values(sections)
}

// ------------------------------------------------------------
// Build drinks.json structure from the Drinks tab
// Columns: A=Section  B=Subtitle  C=Section Description  D=Name  E=Region  F=Description  G=Price
// ------------------------------------------------------------
function buildDrinksData(sheet) {
  const rows = sheet.getDataRange().getValues().slice(1) // skip header
  const sections = {}

  rows.forEach(function(row) {
    const section = String(row[0] || '').trim()
    if (!section) return

    if (!sections[section]) {
      sections[section] = { title: section, subtitle: String(row[1] || ''), items: [] }
      const sectionDesc = String(row[2] || '').trim()
      if (sectionDesc) sections[section].description = sectionDesc
    }

    const item = {
      name:        String(row[3] || ''),
      description: String(row[5] || ''),
      price:       String(row[6] || ''),
    }
    const region = String(row[4] || '').trim()
    if (region) item.region = region

    sections[section].items.push(item)
  })

  return Object.values(sections)
}

// ------------------------------------------------------------
// Push a file update to GitHub via the Contents API
// ------------------------------------------------------------
function pushToGitHub(path, content, message) {
  const apiUrl = 'https://api.github.com/repos/' + GITHUB_OWNER + '/' + GITHUB_REPO + '/contents/' + path
  const headers = {
    'Authorization': 'token ' + GITHUB_TOKEN,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  }

  // Get current file SHA (required by GitHub API to update a file)
  const getRes = UrlFetchApp.fetch(apiUrl, { headers: headers, muteHttpExceptions: true })
  const sha = JSON.parse(getRes.getContentText()).sha

  UrlFetchApp.fetch(apiUrl, {
    method: 'PUT',
    headers: headers,
    payload: JSON.stringify({ message: message, content: Utilities.base64Encode(content, Utilities.Charset.UTF_8), sha: sha }),
    muteHttpExceptions: true,
  })
}
