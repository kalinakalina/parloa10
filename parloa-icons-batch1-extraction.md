# Parloa Design System - Icons Batch 1 Extraction

## 🔍 STEP 1: EXTRACT NEW ELEMENTS

### Screenshot Context
- **Screen**: AI Agents > Empty AI Agent > Routing Configuration
- **Version**: 89508 (latest)
- **Tabs Visible**: Briefing, Testing, History (with Routing subtab active)

### Icons Identified in Batch 1

#### 1. Sidebar Navigation Icons (Left Panel)

##### 1.1 User/Persona Icon
- **Status**: DRAFT (75% confidence)
- **Location**: Sidebar, first item
- **Visual**: Circle with user silhouette
- **Context**: "Persona" navigation item (active state)
- **Observed Properties**:
  - Size: ~20x20px
  - Color: White (#FFFFFF) when active
  - Background: Purple sidebar (#2D1B69)
  - Active indicator: Blue left border
- **Usage Guidelines**: Use for user profile, persona settings, or agent configuration entry points
- **AI Implementation**: When creating user/profile related screens, place in primary navigation

##### 1.2 Phone Icon
- **Status**: DRAFT (75% confidence)  
- **Location**: Sidebar, second item
- **Visual**: Traditional phone handset
- **Context**: "Phone" navigation item
- **Observed Properties**:
  - Size: ~20x20px
  - Color: Light purple (#9F7AEA) when inactive
  - Matches our extracted `phone.svg` or `call_tab.svg`
- **Usage Guidelines**: Use for telephony settings, call configuration, voice features
- **AI Implementation**: Required for any voice/call related features in Parloa

##### 1.3 Route/Network Icon
- **Status**: DRAFT (75% confidence)
- **Location**: Sidebar, visible in current screen
- **Visual**: Network nodes with connections
- **Context**: "Routing" navigation (current screen)
- **Observed Properties**:
  - Size: ~20x20px
  - Matches our extracted `route_network.svg`
- **Usage Guidelines**: Use for routing logic, flow configuration, connections
- **AI Implementation**: Essential for workflow and routing configuration screens

#### 2. UI Control Icons

##### 2.1 Chevron Right/Down
- **Status**: DRAFT (85% confidence)
- **Location**: Expandable list items (route_to_ice_man)
- **Visual**: Simple chevron arrow
- **Observed Properties**:
  - Size: ~16x16px
  - Color: #6C757D
  - Rotation: 0° collapsed, 90° expanded
  - Matches our extracted `chevron_right.svg` and `chevron_down.svg`
- **Usage Guidelines**: Expandable content, accordions, drill-down navigation
- **AI Implementation**: Use for any collapsible sections or expandable list items

##### 2.2 Plus Icon
- **Status**: FINAL (100% confidence)
- **Location**: "New Destination" button
- **Visual**: Plus symbol
- **Observed Properties**:
  - Size: ~16x16px  
  - Color: #6C757D
  - Used with text "New Destination"
  - Matches our extracted `plus.svg`
- **Usage Guidelines**: Add new items, create actions
- **AI Implementation**: Standard for all "add new" actions in lists or collections

## ✓ STEP 2: CONFIRM EXISTING ELEMENTS

### Cross-Reference with Extracted SVGs
- ✅ `phone.svg` - Matches sidebar phone icon
- ✅ `route_network.svg` - Matches routing icon  
- ✅ `chevron_right.svg` - Matches expandable indicators
- ✅ `plus.svg` - Matches add button
- ✅ `user.svg` - Likely match for persona icon

### Pattern Validation
- **Consistency**: All sidebar icons follow same size (20x20px)
- **Color System**: Inactive (#9F7AEA), Active (#FFFFFF)
- **Interaction**: Active state includes blue left border

## ✅ STEP 3: FINALIZE DRAFT ELEMENTS

### Confidence Scoring
- **Plus Icon**: 100% (FINAL) - Multiple sightings, consistent usage
- **Chevron Icons**: 85% (DRAFT) - Clear pattern, needs more validation
- **Sidebar Icons**: 75% (DRAFT) - Single source, need expanded sidebar view

## 📊 STEP 4: UPDATE MASTER DESIGN SYSTEM

### Icon Implementation Guidelines for AI Tools

#### When to Use Each Icon:

1. **Navigation Context**
   ```
   IF creating_sidebar_navigation:
     - User settings/profile → user.svg
     - Phone/voice features → phone.svg or call_tab.svg
     - Routing/workflow → route_network.svg
   ```

2. **Action Context**
   ```
   IF adding_items_to_list:
     - Use plus.svg with descriptive text
     - Position: typically right-aligned or after title
     - Size: 16x16px for inline, 20x20px for prominent
   ```

3. **Content Organization**
   ```
   IF showing_expandable_content:
     - Use chevron_right.svg (collapsed)
     - Rotate 90° when expanded
     - Position: left of expandable title
   ```

### SVG Implementation Example
```html
<!-- Sidebar Navigation Item -->
<div class="sidebar-item active">
  <div class="active-indicator"></div>
  <svg width="20" height="20" class="sidebar-icon">
    <use href="#user" />
  </svg>
  <span>Persona</span>
</div>

<!-- Add New Button -->
<button class="btn-add">
  <svg width="16" height="16">
    <use href="#plus" />
  </svg>
  New Destination
</button>

<!-- Expandable List Item -->
<div class="expandable-item">
  <svg width="16" height="16" class="chevron" style="transform: rotate(0deg)">
    <use href="#chevron_right" />
  </svg>
  <span>route_to_ice_man</span>
</div>
```

### Color Application Rules
```scss
// Sidebar icons
.sidebar-icon {
  // Inactive state
  color: #9F7AEA;
  
  // Active state
  &.active {
    color: #FFFFFF;
  }
}

// UI Control icons
.ui-icon {
  color: #6C757D; // Default gray
  
  // In buttons
  &.in-button {
    color: inherit; // Inherit from button text
  }
}
```

### Next Actions for Batch 2
1. Look for additional sidebar icons when expanded
2. Identify icons in dropdown menus
3. Find icons in the chat/testing interface
4. Locate status indicator icons
5. Search for action icons in tables/lists

---

**Extraction Summary**
- Total icons identified: 5
- Final status: 1
- Draft status: 4  
- Ready for implementation: plus.svg
- Needs validation: user, phone, routing, chevron icons