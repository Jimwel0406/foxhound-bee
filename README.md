# FoxHound Bee Company

A single-page website for a fictional apiary in the Cascade foothills, built as a personal front-end design study.

**Live: [foxhound-bee.vercel.app](https://foxhound-bee.vercel.app/)**

---

## About

The brief I set myself was to build a product-led homepage that earns its scroll. That meant committing to one direction — a warm paper palette of cream and ember, a rationed orange reserved for accents and primary buttons, a hexagonal comb grid drawn into the backgrounds, and three typefaces doing distinct jobs — then building it to production standards rather than stopping at "looks good on my laptop."

The page is also a working demonstration of the fundamentals: semantic markup, a real image budget, keyboard-reachable controls, and a horizontal rail with drag, wheel and arrow-button support that doesn't trap the page scroll.

## Highlights

**Art direction**

- A full single-page flow — hero, three product panels, a six-tile bento grid, a field-photography band, two horizontal rails, and a two-column copy band — each with its own layout logic rather than one repeated card grid.
- Three typefaces with clear roles: **Space Grotesk** for display, **Manrope** for body, **Archivo Black** as the distressed-stencil voice used inside the video tiles — all self-hosted and preloaded through `next/font`.
- A **hexagonal comb grid** drawn as an inline SVG background pattern, reused in the hero and the dark harvest panel so the two sections read as one family.
- A single **18-symbol sprite sheet** — four jar variants, hives, a smoker, a monitor, an optics camera, a keeper, a bee, and the brand mark — defined once in `Sprite.jsx` and referenced by `#id` throughout, so every icon inherits `currentColor` and stays crisp.

**Engineering**

| Area | What was done |
|---|---|
| **The rail** | The episodes and guides rails support four input methods: arrow buttons with an inertial glide (`requestAnimationFrame`, 0.18 easing), mouse-wheel horizontal scroll with edge hand-off so the page still scrolls at the ends, pointer drag with throw velocity, and native touch scroll. Arrow buttons auto-disable at each end. |
| **Scroll spy** | A nav highlighter driven by absolute section offsets rather than `IntersectionObserver`, with an explicit bottom-of-page case so the last link lights up when you reach the footer. |
| **Port** | Converted from a single hand-written `index.html` into the App Router without visual change — the layout was verified **pixel-for-pixel** against the original at 1440, 1024, 768 and 390 px, with a final production difference of **0.001%** (font anti-aliasing only). |
| **Behaviour layer** | All of the original imperatively-written JS — spy, mobile flyout, search overlay, bag popover, Escape handling, and the rails — ported into one `Behaviours` client component with full listener cleanup on unmount. |
| **Accessibility** | Semantic landmarks, one `<h1>`, labelled dialog and region roles on the popover and rails, `aria-expanded` on the menu and bag toggles, `aria-hidden` on decorative art, and descriptive alt text on every content image. |
| **Responsive** | Verified from 390 px through 1440 px+. Panels reflow to single-column, the rail stays horizontally scrollable, and the flyout replaces the inline nav on small screens. |

## Tech stack

- **[Next.js 15](https://nextjs.org)** (App Router) — statically prerendered
- **React 19**
- Plain **CSS** with custom properties — no framework, no preprocessor
- **`next/font`** self-hosting Space Grotesk, Manrope and Archivo Black

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build (all routes prerender statically)
npm start       # serve the production build
```

## Environment

There are no secrets, APIs, databases or server routes — the site is entirely static.

`next.config.mjs` allows remote images from `images.unsplash.com`, used for the placeholder photography. The four product photographs in `public/img/` are served locally.

## Project structure

```
app/
├── layout.jsx          # three fonts, metadata, viewport
├── page.jsx            # composition: sprite, header, main, footer, behaviours
├── globals.css         # design tokens, base styles, every component
└── icon.svg            # favicon
components/
├── Sprite.jsx          # the 18-symbol SVG sheet (jars, hives, tools, mark)
├── Header.jsx          # nav, mobile flyout, bag popover, search overlay
├── Main.jsx            # hero, panels, bento, field band, both rails, copy band
├── Footer.jsx          # legal notes, five link columns, bottom bar
└── Behaviours.jsx      # scroll spy, flyout, search, bag, rail logic (client)
public/
├── img/                # four hive and harvest photographs
└── favicon.svg
```

## Assets

The photography is stock placeholder imagery from Unsplash, used to demonstrate layout and art direction. The four hive, honey and instrument photographs in `public/img/` are local files. The comb background, the sprite sheet and the jar illustrations are hand-authored SVG.

## Status

This is a single homepage and is intentionally scoped that way. The links point at on-page anchors, and the bag, search and checkout are demonstrations rather than working features. Still to build: real shop and product routes, a working cart, and a search backend.

---

Built by [Jimwel](https://github.com/Jimwel0406).
