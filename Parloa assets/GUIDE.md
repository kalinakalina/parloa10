# Parloa Icon Guide (Claude-Ready)

This package provides a sprite-based SVG catalog of left-bar icons aligned to a Parloa-style interface. Each icon is named by purpose and action, grouped into categories, and ships with a JSON manifest.

## Files
- `parloa-icons.sprite.svg` — all icons as `<symbol>`s
- `catalog.html` — visual index & copy-paste snippets
- `manifest.json` — metadata: title, category, description, keywords

## Naming convention
`<domain>_<object|action>` — lower_snake_case, e.g., `phone_incoming`, `help_circle`.

## Categories
- **navigation**: app entry points (`home_mark`)
- **knowledge**: docs / KB (`knowledge_book`)
- **monitoring**: activity/metrics (`activity_dial`)
- **telephony**: calls/routing (`phone_incoming`)
- **support**: help/support (`help_circle`)
- **account**: session actions (`logout`)

## Accessibility
Use `aria-label` or a `<title>` tag:
```html
<svg width="20" height="20" aria-label="Help"><use href="parloa-icons.sprite.svg#help_circle"/></svg>
```

## Sizing
- Unified viewBox `0 0 100 100`; scale with width/height (20–28px typical).

## Color
These are PNGs embedded in SVG for now. To theme, swap with path-based vectors later.

## Usage snippet
```html
<svg width="24" height="24" aria-label="Incoming call">
  <use href="parloa-icons.sprite.svg#phone_incoming"/>
</svg>
```

