# Parloa Design System - Icon Catalog

## Overview
This catalog documents all extracted icons from the Parloa UI sidebar navigation. Icons are organized by category and include implementation details, usage guidelines, and accessibility requirements.

---

## Icon Inventory

### Navigation
#### `home_mark`
- **Description**: Primary app entrypoint. Left-bar top logo/home button
- **Category**: Navigation
- **ViewBox**: `0 0 100 100`
- **Usage**: Main dashboard/home navigation
- **Keywords**: home, logo, dashboard, parloa
- **Implementation**: 
  ```html
  <svg width="24" height="24" aria-label="Home">
    <use href="parloa-icons.sprite.svg#home_mark"/>
  </svg>
  ```

### Knowledge
#### `knowledge_book`
- **Description**: Knowledge Hub / Documentation / Library
- **Category**: Knowledge
- **ViewBox**: `0 0 100 100`
- **Usage**: Access to documentation, knowledge base, or learning resources
- **Keywords**: docs, knowledge, kb, book, library
- **Implementation**: 
  ```html
  <svg width="24" height="24" aria-label="Knowledge">
    <use href="parloa-icons.sprite.svg#knowledge_book"/>
  </svg>
  ```

### Monitoring
#### `activity_dial`
- **Description**: Activity, performance, or live metrics overview
- **Category**: Monitoring
- **ViewBox**: `0 0 100 100`
- **Usage**: Performance monitoring, analytics dashboards
- **Keywords**: metrics, monitor, analytics, speed, performance
- **Implementation**: 
  ```html
  <svg width="24" height="24" aria-label="Activity">
    <use href="parloa-icons.sprite.svg#activity_dial"/>
  </svg>
  ```

### Telephony
#### `phone_incoming`
- **Description**: Inbound call logs, call routing, or telephony entry
- **Category**: Telephony
- **ViewBox**: `0 0 100 100`
- **Usage**: Call control interfaces, telephony features
- **Keywords**: phone, inbound, calls, telephony, sip
- **Implementation**: 
  ```html
  <svg width="24" height="24" aria-label="Incoming calls">
    <use href="parloa-icons.sprite.svg#phone_incoming"/>
  </svg>
  ```

### Support
#### `help_circle`
- **Description**: Help Center, support, or tutorials
- **Category**: Support
- **ViewBox**: `0 0 100 100`
- **Usage**: Access to help documentation, support resources
- **Keywords**: help, support, faq, question
- **Implementation**: 
  ```html
  <svg width="24" height="24" aria-label="Help">
    <use href="parloa-icons.sprite.svg#help_circle"/>
  </svg>
  ```

### Account
#### `logout`
- **Description**: Sign out / End session
- **Category**: Account
- **ViewBox**: `0 0 100 100`
- **Usage**: User session management, sign out action
- **Keywords**: logout, sign out, exit
- **Implementation**: 
  ```html
  <svg width="24" height="24" aria-label="Sign out">
    <use href="parloa-icons.sprite.svg#logout"/>
  </svg>
  ```

---

## Design Specifications

### Icon Guidelines
- **Format**: SVG sprite with embedded PNGs (future: pure vector paths)
- **ViewBox**: Unified `0 0 100 100` for consistent scaling
- **Display Sizes**: 
  - Small: 16×16px
  - Default: 20×20px
  - Medium: 24×24px
  - Large: 28×28px

### Color System
- **Current**: Monochrome PNGs embedded in SVG
- **Future**: Vector paths with themeable `fill` properties
- **Sidebar Context**: Icons remain neutral/monochrome
- **Active State**: Handled by product theme (typically Parloa purple #6B46C1)

### Naming Convention
- **Pattern**: `domain_objectOrAction`
- **Case**: snake_case
- **Examples**: 
  - `home_mark` (not `house_icon`)
  - `phone_incoming` (not `call_in`)
  - `knowledge_book` (not `docs_icon`)

---

## Implementation

### Using the Sprite
```html
<!-- Include sprite in your project -->
<link rel="preload" href="parloa-icons.sprite.svg" as="image">

<!-- Reference icons by ID -->
<svg width="24" height="24" aria-label="[Accessible name]">
  <use href="parloa-icons.sprite.svg#[icon_name]"/>
</svg>
```

### React Component Example
```jsx
const ParloaIcon = ({ name, size = 24, label }) => (
  <svg 
    width={size} 
    height={size} 
    aria-label={label}
    className="parloa-icon"
  >
    <use href={`parloa-icons.sprite.svg#${name}`}/>
  </svg>
);

// Usage
<ParloaIcon name="home_mark" label="Home" />
<ParloaIcon name="help_circle" size={20} label="Get help" />
```

### CSS Integration
```css
.parloa-icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}

/* Sidebar context */
.sidebar .parloa-icon {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.sidebar .nav-item:hover .parloa-icon,
.sidebar .nav-item.active .parloa-icon {
  opacity: 1;
}
```

---

## Accessibility

### Requirements
1. **Always provide accessible labels**:
   - Via `aria-label` on the `<svg>`
   - Or `<title>` element inside the `<svg>`
   - Or visually hidden text for screen readers

2. **Decorative vs. Informative**:
   - Decorative: `aria-hidden="true"` when text label is present
   - Informative: Proper `aria-label` when icon conveys meaning

### Examples
```html
<!-- Icon with visible text -->
<button>
  <svg width="20" height="20" aria-hidden="true">
    <use href="parloa-icons.sprite.svg#logout"/>
  </svg>
  Sign out
</button>

<!-- Icon-only button -->
<button aria-label="Open help">
  <svg width="24" height="24">
    <use href="parloa-icons.sprite.svg#help_circle"/>
  </svg>
</button>
```

---

## Integration with Parloa Architecture

### Mapping to Product Areas
- **Dialog Editor**: `home_mark` for main entry
- **Phone/Call Control**: `phone_incoming` for telephony features
- **Knowledge Base**: `knowledge_book` for documentation
- **Analytics**: `activity_dial` for metrics/monitoring
- **Support**: `help_circle` for help resources
- **Session**: `logout` for account management

### File Structure
```
design-system/
├── icons/
│   ├── parloa-icons.sprite.svg
│   ├── catalog.html
│   ├── manifest.json
│   └── README.md
├── components/
│   └── Icon.jsx
└── docs/
    └── icon-guidelines.md
```

---

## Migration Path

### Current State
- PNG images wrapped in SVG symbols
- Monochrome appearance
- Fixed colors

### Future Enhancements
1. **Vector Conversion**: Convert PNGs to pure SVG paths
2. **Theming Support**: Enable `fill` property for dynamic coloring
3. **Icon Variants**: Add outlined/filled versions
4. **Animation**: Define interaction states (hover, active, loading)

### Backwards Compatibility
- Maintain same IDs when converting to vectors
- Keep existing viewBox dimensions
- Preserve accessibility patterns

---

## Version History
- **v1.0.0** (Current): Initial extraction with PNG-based sprites
- **v1.1.0** (Planned): Vector path conversion
- **v1.2.0** (Future): Theme support & variants

---

## Resources
- [Parloa Dialog Design Documentation](https://docs.parloa.com/parloa-platform/dialog-design)
- [Parloa Platform Overview](https://docs.parloa.com/parloa-platform/overview)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/ARIA/apg/patterns/)