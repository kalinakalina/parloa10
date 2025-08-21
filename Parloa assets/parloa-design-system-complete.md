# Parloa Design System
*Reverse-engineered from Parloa AI platform interface*

---

## Table of Contents
1. [Foundations](#foundations)
   - [Colors](#colors)
   - [Typography](#typography)
   - [Spacing](#spacing)
   - [Elevation](#elevation)
2. [Components](#components)
   - [Atoms](#atoms)
   - [Molecules](#molecules)
   - [Organisms](#organisms)
3. [Assets](#assets)
   - [Icons](#icons)
   - [Logos](#logos)
4. [Patterns](#patterns)
   - [Navigation](#navigation-patterns)
   - [Forms](#form-patterns)
   - [Feedback](#feedback-patterns)

---

## Foundations

### Colors

#### Primary Palette
```scss
// Brand Colors
$parloa-purple: #6B46C1;
$parloa-purple-hover: #5D3CAD;
$parloa-purple-active: #4F3399;

// Neutral Scale
$gray-50: #FAFAFA;
$gray-100: #F5F5F5;
$gray-200: #E5E5E5;
$gray-300: #D4D4D4;
$gray-400: #A3A3A3;
$gray-500: #737373;
$gray-600: #525252;
$gray-700: #404040;
$gray-800: #262626;
$gray-900: #171717;
```

#### Semantic Colors
```scss
// Status
$success: #10B981;
$warning: #F59E0B;
$error: #EF4444;
$info: #3B82F6;

// Background
$bg-primary: #FFFFFF;
$bg-secondary: #F9FAFB;
$bg-tertiary: #F3F4F6;
```

### Typography

#### Font Stack
```scss
$font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

#### Type Scale
```scss
// Headings
$h1: 32px / 40px; // size / line-height
$h2: 24px / 32px;
$h3: 20px / 28px;
$h4: 16px / 24px;

// Body
$body-lg: 16px / 24px;
$body: 14px / 20px;
$body-sm: 12px / 16px;

// Weight
$font-regular: 400;
$font-medium: 500;
$font-semibold: 600;
$font-bold: 700;
```

### Spacing

#### Base Unit: 4px
```scss
$space-1: 4px;
$space-2: 8px;
$space-3: 12px;
$space-4: 16px;
$space-5: 20px;
$space-6: 24px;
$space-8: 32px;
$space-10: 40px;
$space-12: 48px;
$space-16: 64px;
```

### Elevation

```scss
// Shadow System
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

---

## Components

### Atoms

#### Button
```scss
.btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &--primary {
    background: $parloa-purple;
    color: white;
    
    &:hover {
      background: $parloa-purple-hover;
    }
  }
  
  &--secondary {
    background: white;
    color: $gray-700;
    border: 1px solid $gray-300;
  }
}
```

#### Input
```scss
.input {
  height: 36px;
  padding: 0 12px;
  border: 1px solid $gray-300;
  border-radius: 6px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: $parloa-purple;
    box-shadow: 0 0 0 3px rgba(107, 70, 193, 0.1);
  }
}
```

#### Badge
```scss
.badge {
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  
  &--success {
    background: rgba(16, 185, 129, 0.1);
    color: $success;
  }
}
```

### Molecules

#### Search Bar
```scss
.search-bar {
  position: relative;
  
  .input {
    padding-left: 36px;
  }
  
  .icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
}
```

#### Card
```scss
.card {
  background: white;
  border: 1px solid $gray-200;
  border-radius: 8px;
  padding: 16px;
  box-shadow: $shadow-sm;
}
```

### Organisms

#### Sidebar Navigation
```scss
.sidebar {
  width: 64px;
  background: $parloa-purple;
  height: 100vh;
  
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    color: white;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    
    &:hover,
    &--active {
      opacity: 1;
    }
  }
}
```

---

## Assets

### Icons

#### Icon System Overview
- **Format**: SVG sprite with embedded PNGs
- **Naming**: `domain_objectOrAction` (snake_case)
- **ViewBox**: Unified `0 0 100 100`
- **Sizes**: 16px, 20px, 24px, 28px

#### Icon Catalog

##### Navigation Icons
| Icon | ID | Description | Usage |
|------|-----|-------------|--------|
| ![Home](data:image/svg+xml,<svg viewBox="0 0 20 20"><rect fill="%236B46C1" width="20" height="20"/></svg>) | `home_mark` | Primary app entry | Main dashboard navigation |

##### Knowledge Icons
| Icon | ID | Description | Usage |
|------|-----|-------------|--------|
| ![Book](data:image/svg+xml,<svg viewBox="0 0 20 20"><rect fill="%236B46C1" width="20" height="20"/></svg>) | `knowledge_book` | Knowledge Hub | Documentation, KB access |

##### Monitoring Icons
| Icon | ID | Description | Usage |
|------|-----|-------------|--------|
| ![Timer](data:image/svg+xml,<svg viewBox="0 0 20 20"><rect fill="%236B46C1" width="20" height="20"/></svg>) | `activity_dial` | Activity metrics | Performance monitoring |

##### Telephony Icons
| Icon | ID | Description | Usage |
|------|-----|-------------|--------|
| ![Phone](data:image/svg+xml,<svg viewBox="0 0 20 20"><rect fill="%236B46C1" width="20" height="20"/></svg>) | `phone_incoming` | Inbound calls | Call routing, telephony |

##### Support Icons
| Icon | ID | Description | Usage |
|------|-----|-------------|--------|
| ![Help](data:image/svg+xml,<svg viewBox="0 0 20 20"><rect fill="%236B46C1" width="20" height="20"/></svg>) | `help_circle` | Help Center | Support, tutorials |

##### Account Icons
| Icon | ID | Description | Usage |
|------|-----|-------------|--------|
| ![Logout](data:image/svg+xml,<svg viewBox="0 0 20 20"><rect fill="%236B46C1" width="20" height="20"/></svg>) | `logout` | Sign out | End session |

#### Implementation
```html
<!-- Basic usage -->
<svg width="24" height="24" aria-label="Home">
  <use href="parloa-icons.sprite.svg#home_mark"/>
</svg>

<!-- React component -->
const Icon = ({ name, size = 24, label }) => (
  <svg width={size} height={size} aria-label={label}>
    <use href={`parloa-icons.sprite.svg#${name}`}/>
  </svg>
);
```

### Logos

#### Parloa Wordmark
- Primary: Purple (#6B46C1) on light backgrounds
- Inverse: White on dark backgrounds
- Minimum size: 100px width

---

## Patterns

### Navigation Patterns

#### Left Sidebar
- **Width**: 64px (collapsed) / 240px (expanded)
- **Background**: Parloa purple (#6B46C1)
- **Icons**: White, 24x24px
- **Active state**: Full opacity + background highlight

#### Top Bar
- **Height**: 56px
- **Background**: White
- **Shadow**: $shadow-sm
- **Content**: Search, user menu, notifications

### Form Patterns

#### Form Layout
```scss
.form-group {
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 500;
    color: $gray-700;
  }
  
  .help-text {
    margin-top: 6px;
    font-size: 12px;
    color: $gray-500;
  }
}
```

#### Validation States
- **Error**: Red border (#EF4444) + error message
- **Success**: Green border (#10B981) + check icon
- **Warning**: Orange border (#F59E0B) + warning text

### Feedback Patterns

#### Toast Notifications
- **Position**: Top-right
- **Width**: 320px max
- **Animation**: Slide in from right
- **Auto-dismiss**: 5 seconds

#### Loading States
- **Inline**: Replace content with spinner
- **Overlay**: Semi-transparent backdrop + centered spinner
- **Skeleton**: Animated placeholder shapes

---

## Usage Guidelines

### Accessibility
- **Color contrast**: WCAG AA compliant (4.5:1 for normal text)
- **Focus indicators**: 3px offset purple outline
- **Icon labels**: Always provide aria-label or visible text
- **Keyboard navigation**: Full support for all interactive elements

### Responsive Design
- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Grid**: 12-column layout with 24px gutters

### Motion
- **Duration**: 200ms for micro-interactions
- **Easing**: ease-in-out for most transitions
- **Reduced motion**: Respect prefers-reduced-motion

---

## Component Status

| Component | Status | Version | Notes |
|-----------|---------|---------|--------|
| Colors | ✅ Complete | 1.0 | Extracted from UI |
| Typography | ✅ Complete | 1.0 | System fonts |
| Icons | ✅ Complete | 1.0 | 6 sidebar icons |
| Buttons | ✅ Complete | 1.0 | Primary/Secondary variants |
| Forms | 🟡 In Progress | 0.8 | Input, Select, Checkbox |
| Cards | ✅ Complete | 1.0 | Basic card component |
| Navigation | ✅ Complete | 1.0 | Sidebar pattern |
| Modals | 📋 Planned | - | Not yet extracted |
| Tables | 📋 Planned | - | Not yet extracted |

---

## Version History
- **v1.0.0** - Initial extraction: Colors, Typography, Icons, Basic components
- **v0.9.0** - Foundation setup: Spacing, Elevation
- **v0.8.0** - Component discovery: Atoms, Molecules

---

## Resources
- [Parloa Platform Docs](https://docs.parloa.com)
- [Component Playground](./playground.html)
- [Icon Catalog](./icons/catalog.html)
- [Figma Library](#) *(Coming soon)*