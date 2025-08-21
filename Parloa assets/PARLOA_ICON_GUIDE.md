# Parloa UI/UX Icon Guide (Claude-Ready, Single File)

**Purpose:** Provide Claude with end-to-end context to catalog and use the Parloa-style icon set. This one file defines naming, categories, accessibility, theming, and usage patterns aligned with Parloa product surfaces (Dialog editor, Phone/Call Control, Knowledge).

## How to use this icon pack
- Prefer the **sprite approach** (inline `<svg>` with `<symbol>`s) for quick iteration and consistent rendering.
- Reference an icon by id via `<use href="#icon_id">` when the sprite is inline; or `<use href="/path/to/sprite.svg#icon_id">` for an external sprite.
- Suggested sizes: 20–28px in leftbars; 16–20px in lists and menus.

### Minimal usage
```html
<svg width="24" height="24" aria-label="Help">
  <use href="#help_circle"></use>
</svg>
```

## Naming conventions
- Pattern: `domain_objectOrAction` in **snake_case** (e.g., `phone_incoming`, `help_circle`, `settings_gear`, `sliders`).
- Filenames map 1:1 to ids; ids are normalized to `[a-z0-9_]+` and never start with a digit.

## Categories (map to Parloa IA)
- **navigation**: home, workspace entry, logos
- **knowledge**: docs, KB, book
- **telephony**: phone, call control, SIP
- **monitoring**: activity, performance, analytics
- **support**: help, question
- **settings**: sliders, gears
- **account**: logout
- **general**: everything else

## Accessibility
- Always provide `aria-label` OR a child `<title>` for non-decorative icons.
- Decorative-only icons should include `aria-hidden="true"` and be excluded from the accessibility tree.

## Theming
- For stroke icons: `stroke: currentColor; stroke-width: <n>` in CSS.
- For filled icons: `fill: currentColor;`.
- Keep strong contrast against dark sidebars (typical in Parloa screenshots).

## Sizing & alignment
- Keep the source `viewBox`; scale visually with `width` and `height` on `<svg>`.
- If an icon appears off-center, wrap inner nodes in a `<g transform="translate(x,y)">` without changing ids.

## Claude playbook
- Treat ids as stable, canonical tokens for retrieval and reference.
- Build descriptive synonyms from ids (e.g., `phone_incoming` → inbound calls / call routing / SIP).
- Use the embedded `<script id="manifest" type="application/json">` block in the HTML when present, to infer titles/keywords.

## Parloa-context anchors (for IA & UI consistency)
- Dialog Interface (blocks, graph editor): https://docs.parloa.com/rule-based-automation/dialog-interface
- Phone / Call Control: https://docs.parloa.com/rule-based-automation/dialog-interface/graph/phone/call-control
- Knowledge Skill: https://docs.parloa.com/knowledge-skill/introduction
- Dialog Design Update (brand look/feel refresh): https://docs.parloa.com/general/release-greater-than-3.0.0/rule-based-automation/dialog-design-update

---
Generated: 2025-08-21T00:00:39.647366Z
