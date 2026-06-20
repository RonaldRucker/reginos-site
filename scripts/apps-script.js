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

const GITHUB_TOKEN = 'YOUR_GITHUB_Tit OKEN_HERE'
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

  const menuJSON     = JSON.stringify(buildMenuData(ss.getSheetByName('Food Menu')), null, 2)
  const drinksJSON   = JSON.stringify(buildDrinksData(ss.getSheetByName('Drink Menu')), null, 2)
  const cateringJSON = JSON.stringify(buildCateringData(ss.getSheetByName('Catering')), null, 2)

  pushToGitHub('data/menu.json',     menuJSON,     'Update menu data from Google Sheets')
  pushToGitHub('data/drinks.json',   drinksJSON,   'Update drinks data from Google Sheets')
  pushToGitHub('data/catering.json', cateringJSON, 'Update catering data from Google Sheets')
}

// ------------------------------------------------------------
// Build menu.json from the Food Menu tab
// Columns: A=Section  B=Name  C=Description  D=Price Sm  E=Price Lg  F=Note
// ------------------------------------------------------------
function buildMenuData(sheet) {
  const rows = sheet.getDataRange().getValues().slice(1)
  const sections = {}

  rows.forEach(function(row) {
    const section = String(row[0] || '').trim()
    if (!section) return

    if (!sections[section]) {
      sections[section] = { title: section, items: [] }
    }

    const item = {
      name:        String(row[1] || ''),
      description: String(row[2] || ''),
      priceSm:     String(row[3] || ''),
    }
    const priceLg = String(row[4] || '').trim()
    if (priceLg) item.priceLg = priceLg
    const note = String(row[5] || '').trim()
    if (note) item.note = note

    sections[section].items.push(item)
  })

  return Object.values(sections)
}

// ------------------------------------------------------------
// Build drinks.json from the Drink Menu tab
// Columns: A=Section  B=Name  C=Description  D=Glass  E=Bottle  F=Note
// ------------------------------------------------------------
function buildDrinksData(sheet) {
  const rows = sheet.getDataRange().getValues().slice(1)
  const sections = {}

  rows.forEach(function(row) {
    const section = String(row[0] || '').trim()
    if (!section) return

    if (!sections[section]) {
      sections[section] = { title: section, items: [] }
    }

    const item = {
      name:        String(row[1] || ''),
      description: String(row[2] || ''),
      glass:       String(row[3] || ''),
    }
    const bottle = String(row[4] || '').trim()
    if (bottle) item.bottle = bottle
    const note = String(row[5] || '').trim()
    if (note) item.note = note

    sections[section].items.push(item)
  })

  return Object.values(sections)
}

// ------------------------------------------------------------
// Build catering.json from the Catering tab
// Columns: A=Item  B=Small Servings  C=Large Servings  D=Options / Notes
// ------------------------------------------------------------
function buildCateringData(sheet) {
  const rows = sheet.getDataRange().getValues().slice(1)
  const items = []

  rows.forEach(function(row) {
    const item = String(row[0] || '').trim()
    if (!item) return

    const entry = { item: item }
    const small = String(row[1] || '').trim()
    const large = String(row[2] || '').trim()
    const notes = String(row[3] || '').trim()
    if (small) entry.smallServings = small
    if (large) entry.largeServings = large
    if (notes) entry.notes = notes

    items.push(entry)
  })

  return items
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

  const getRes = UrlFetchApp.fetch(apiUrl, { headers: headers, muteHttpExceptions: true })
  const sha = JSON.parse(getRes.getContentText()).sha

  UrlFetchApp.fetch(apiUrl, {
    method: 'PUT',
    headers: headers,
    payload: JSON.stringify({ message: message, content: Utilities.base64Encode(content, Utilities.Charset.UTF_8), sha: sha }),
    muteHttpExceptions: true,
  })
}
