# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

This is a **Next.js 16 (App Router)** site for Regino's Italian Restaurant, styled with **Tailwind CSS v4** and **shadcn/ui** (Radix UI primitives).

### Pages

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Homepage: hero, gallery, quick links, testimonial |
| `/menu` | `app/menu/page.tsx` | Food menu driven by `data/menu.json` |
| `/drinks` | `app/drinks/page.tsx` | Drinks menu driven by `data/drinks.json` |
| `/history` | `app/history/page.tsx` | Restaurant history / "Our Story" |
| `/catering` | `app/catering/page.tsx` | Catering info page |

Every page wraps its content in `<Navigation />` and `<Footer />` from `components/`.

### Data pipeline (menu & drinks)

`data/menu.json` and `data/drinks.json` are the source of truth for menu content and are imported directly by their respective pages. These files are **not edited by hand** — they are generated and pushed to GitHub automatically by a Google Apps Script (`scripts/apps-script.js`) that runs on change in the restaurant's Google Sheets spreadsheet.

**Sheet tab names and column layouts (must match exactly):**

| Tab | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| Food Menu | Section | Name | Description | Price Sm | Price Lg | Note |
| Drink Menu | Section | Name | Description | Glass | Bottle | Note |
| Catering | Item | Small Servings | Large Servings | Options / Notes | | |

- `Price Lg`, `Bottle`, and `Note` are optional — leave the cell blank if not applicable.
- The script groups Food Menu and Drink Menu rows by their Section column into sections. Catering is a flat list.
- Generated JSON fields: menu uses `priceSm` / `priceLg`; drinks uses `glass` / `bottle`; catering uses `item` / `smallServings` / `largeServings` / `notes`.

To update content, edit the Google Sheet — the script commits updated JSON to `data/` within 30 seconds.

### Styling

- **Fonts:** `Playfair Display` (serif, `font-serif`) for headings; `Lato` (sans-serif, `font-sans`) for body text. Both loaded via `next/font/google` in `app/layout.tsx`.
- **Color palette:** Warm terracotta brand color (`--primary`) defined as oklch values in `app/globals.css`. All color tokens follow the shadcn/ui convention (`--background`, `--foreground`, `--muted`, etc.).
- Tailwind v4 config is inline in `app/globals.css` via `@theme inline` — there is no `tailwind.config.*` file.

### Hosting

This site is deployed on **Cloudflare Pages**. Do not add Vercel dependencies, Vercel-specific config, or any `@vercel/*` packages. When the Apps Script pushes a JSON update to GitHub, Cloudflare Pages detects the commit and rebuilds automatically.

### Key config notes

- `next.config.mjs` sets `images.unoptimized: true` and `typescript.ignoreBuildErrors: true`.
- Images are stored in `public/images/`. The site uses `next/image` with `fill` for hero sections and explicit dimensions for logos.
