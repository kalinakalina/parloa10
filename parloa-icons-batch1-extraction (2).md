# Parloa Design System - Icons Batch 1 & 2 Extraction

## 🔍 STEP 1: EXTRACT NEW ELEMENTS

### Screenshot Context
- **Batch 1**: AI Agents > Empty AI Agent > Routing Configuration
- **Batch 2**: AI Agents > Christie (Customer Support) > Expanded Sidebar + Briefing
- **Additional Views**: Collapsed sidebar, expanded navigation, text editor toolbar

### Icons Identified in Batch 1 & 2

#### 1. Sidebar Navigation Icons (Left Panel)

##### 1.1 User/Persona Icon
- **Status**: FINAL (100% confidence) ✅
- **Location**: Sidebar, "Persona" item
- **Visual**: Circle with user silhouette
- **Context**: Found in both collapsed and expanded states
- **Confirmed Properties**:
  - Size: 20x20px
  - Color: #6C757D (inactive), #FFFFFF (active)
  - Matches our extracted `user.svg`
- **Usage Guidelines**: User profile, persona settings, agent configuration
- **AI Implementation**: Primary navigation for user/agent settings

##### 1.2 Phone Icon
- **Status**: FINAL (100% confidence) ✅
- **Location**: Sidebar "Phone" item
- **Visual**: Traditional phone handset
- **Context**: Consistent across multiple views
- **Confirmed Properties**:
  - Size: 20x20px
  - Color: #6C757D when inactive
  - Matches our extracted `phone.svg`
- **Usage Guidelines**: Telephony settings, call configuration, voice features
- **AI Implementation**: Required for voice/call related features

##### 1.3 LLM Params Icon (Sliders)
- **Status**: FINAL (100% confidence) ✅
- **Location**: Sidebar "LLM Params"
- **Visual**: Horizontal sliders/controls
- **Context**: Parameters configuration
- **Confirmed Properties**:
  - Size: 20x20px
  - Matches our extracted `sliders.svg`
- **Usage Guidelines**: Settings, parameters, configuration controls
- **AI Implementation**: Use for any adjustable parameters or settings

##### 1.4 Book Icon (KnowledgeSkill)
- **Status**: FINAL (100% confidence) ✅
- **Location**: Under "Skills" section
- **Visual**: Open book
- **Context**: "Book_Flight" navigation item
- **Confirmed Properties**:
  - Size: 20x20px
  - Matches our extracted `book.svg`
- **Usage Guidelines**: Knowledge base, documentation, learning resources
- **AI Implementation**: Use for knowledge management features

##### 1.5 Route/Network Icon
- **Status**: FINAL (100% confidence) ✅
- **Location**: Sidebar "Routing"
- **Visual**: Network nodes with connections
- **Confirmed Properties**:
  - Size: 20x20px
  - Matches our extracted `route_network.svg`
- **Usage Guidelines**: Routing logic, flow configuration, connections

##### 1.6 Message/Chat Icon
- **Status**: FINAL (100% confidence) ✅
- **Location**: "Send Text Message" in sidebar
- **Visual**: Chat bubble with lines
- **Context**: Messaging features
- **Confirmed Properties**:
  - Size: 20x20px
  - Matches our extracted `chat_bubble.svg`
- **Usage Guidelines**: Messaging, chat, text communication features

##### 1.7 Shield/FAQ Icon
- **Status**: DRAFT (80% confidence)
- **Location**: "Answer_FAQ" in sidebar
- **Visual**: Shield or protected document icon
- **Context**: FAQ/Help features
- **Observed Properties**:
  - Size: 20x20px
  - May need dedicated FAQ icon
- **Usage Guidelines**: FAQ, help documentation, protected content

##### 1.8 Code/Custom Skill Icon
- **Status**: DRAFT (75% confidence)
- **Location**: "Custom_Skill" in sidebar
- **Visual**: Code brackets or custom icon
- **Context**: Custom development features
- **Observed Properties**:
  - Size: 20x20px
  - Possibly matches `code_braces.svg`
- **Usage Guidelines**: Custom code, API integrations, developer features

#### 2. UI Control Icons

##### 2.1 Chevron Right/Down
- **Status**: FINAL (100% confidence) ✅
- **Location**: Multiple expandable items
- **Visual**: Simple chevron arrow
- **Confirmed Properties**:
  - Size: 16x16px
  - Color: #6C757D
  - Rotation: 0° collapsed, 90° expanded
  - Used in "Skills", "Rule Based Automation", "Advanced"
- **Usage Guidelines**: Expandable content, accordions, drill-down navigation
- **AI Implementation**: Standard for all collapsible sections

##### 2.2 Plus Icon
- **Status**: FINAL (100% confidence) ✅
- **Location**: "Add skill" button
- **Visual**: Plus symbol
- **Confirmed Properties**:
  - Size: 16x16px  
  - Color: #6C757D
  - Consistent usage across add actions
- **Usage Guidelines**: Add new items, create actions
- **AI Implementation**: Standard for all "add new" actions

##### 2.3 Play/Preview Icon
- **Status**: FINAL (100% confidence) ✅
- **Location**: Preview button
- **Visual**: Right-pointing triangle (play symbol)
- **Context**: Blue primary button
- **Confirmed Properties**:
  - Size: 16x16px
  - Color: #FFFFFF (on blue background)
  - Used with text "Preview"
- **Usage Guidelines**: Preview, play, test, execute actions
- **AI Implementation**: Use for preview/test functionality

#### 3. Text Editor Toolbar Icons

##### 3.1 Bold (B)
- **Status**: FINAL (100% confidence) ✅
- **Location**: Text editor toolbar
- **Visual**: Bold "B"
- **Size**: 16x16px
- **Usage**: Text formatting - bold

##### 3.2 Italic (I)
- **Status**: FINAL (100% confidence) ✅
- **Location**: Text editor toolbar
- **Visual**: Italic "I"
- **Size**: 16x16px
- **Usage**: Text formatting - italic

##### 3.3 Bullet List
- **Status**: FINAL (100% confidence) ✅
- **Location**: Text editor toolbar
- **Visual**: Three horizontal lines with dots
- **Size**: 16x16px
- **Usage**: Unordered list formatting

##### 3.4 Numbered List
- **Status**: FINAL (100% confidence) ✅
- **Location**: Text editor toolbar
- **Visual**: Three horizontal lines with numbers
- **Size**: 16x16px
- **Usage**: Ordered list formatting

##### 3.5 Code/Insert Icons
- **Status**: DRAFT (80% confidence)
- **Location**: Text editor toolbar (right side)
- **Visual**: Additional formatting options
- **Size**: 16x16px
- **Usage**: Code blocks, special insertions

#### 4. Utility Icons

##### 4.1 External Link Icon
- **Status**: FINAL (100% confidence) ✅
- **Location**: "Open Documentation" link
- **Visual**: Arrow pointing up-right out of box
- **Context**: Links that open in new tab
- **Properties**:
  - Size: 12x12px
  - Color: #0066FF (matches link color)
- **Usage Guidelines**: External links, new tab/window actions
- **AI Implementation**: Always use with external links

## ✓ STEP 2: CONFIRM EXISTING ELEMENTS

### Cross-Reference with Extracted SVGs
- ✅ `user.svg` - Confirmed: Persona icon
- ✅ `phone.svg` - Confirmed: Phone settings icon
- ✅ `sliders.svg` - Confirmed: LLM Params icon
- ✅ `book.svg` - Confirmed: Book_Flight/Knowledge icon
- ✅ `route_network.svg` - Confirmed: Routing icon  
- ✅ `chat_bubble.svg` - Confirmed: Send Text Message icon
- ✅ `chevron_right.svg` - Confirmed: Expandable indicators
- ✅ `plus.svg` - Confirmed: Add actions
- ✅ `paper_plane.svg` - Likely: External link arrow
- ⚠️ `code_braces.svg` - Possible: Custom_Skill icon
- ❓ Need dedicated icons for: FAQ/Answer, Rule Based Automation

### Pattern Validation
- **Icon Sizes**: Consistent 20x20px for sidebar, 16x16px for UI controls
- **Color System**: 
  - Inactive: #6C757D (updated from purple)
  - Active: #FFFFFF on purple background
  - UI Controls: #6C757D
- **Interaction**: Active state includes left indicator (not always blue)
- **Expanded Sidebar**: Shows icon + label, maintains same icon size

## ✅ STEP 3: FINALIZE DRAFT ELEMENTS

### Confidence Scoring Update
- **FINAL (100%)**: 15 icons confirmed
  - All sidebar navigation icons (user, phone, sliders, book, route, chat)
  - Core UI controls (chevron, plus, play)
  - Text editor toolbar icons
  - External link indicator
- **DRAFT (75-80%)**: 2 icons need verification
  - FAQ/Shield icon
  - Custom Skill icon

## 📊 STEP 4: UPDATE MASTER DESIGN SYSTEM

### Complete Icon Implementation Guidelines for AI Tools

#### Sidebar Navigation Icons (20x20px)
```
WHEN creating_parloa_navigation:
  IF section == "agent_configuration":
    - Persona settings → user.svg
    - Phone/voice config → phone.svg
    - LLM parameters → sliders.svg
  
  IF section == "skills":
    - Booking/Knowledge → book.svg
    - Routing/workflow → route_network.svg
    - Messaging → chat_bubble.svg
    - FAQ/Help → shield icon (pending)
    - Custom code → code_braces.svg
    
  IF section == "automation":
    - Use chevron_right.svg for expandable sections
    
  ALWAYS:
    - Inactive color: #6C757D
    - Active color: #FFFFFF
    - Active indicator: left border
    - Maintain 20x20px size
```

#### UI Control Icons (16x16px)
```
WHEN adding_interactive_elements:
  IF action == "add_new":
    - Icon: plus.svg
    - Position: inline with text
    - Color: inherit from text (#6C757D)
    
  IF element == "expandable":
    - Icon: chevron_right.svg
    - Rotation: 0° (collapsed), 90° (expanded)
    - Position: left of label
    - Transition: 200ms ease
    
  IF action == "preview/test":
    - Icon: play triangle
    - Color: white on primary button
    - Position: left of text
```

#### Text Editor Toolbar
```
WHEN implementing_rich_text_editor:
  REQUIRED icons (16x16px):
    - Bold (B)
    - Italic (I)
    - Bullet list
    - Numbered list
    - Code block (optional)
    - Insert options (optional)
    
  STYLING:
    - Default: #6C757D
    - Hover: #495057
    - Active: #0066FF
    - Background on active: rgba(0, 102, 255, 0.1)
```

### Implementation Examples

#### 1. Sidebar Navigation Item
```html
<!-- Collapsed sidebar (60px) -->
<div class="sidebar-item">
  <svg width="20" height="20" class="sidebar-icon">
    <use href="#user" />
  </svg>
</div>

<!-- Expanded sidebar (240px) -->
<div class="sidebar-item active">
  <div class="active-indicator"></div>
  <svg width="20" height="20" class="sidebar-icon">
    <use href="#user" />
  </svg>
  <span class="sidebar-label">Persona</span>
</div>
```

#### 2. Expandable Section
```html
<div class="expandable-section">
  <div class="section-header" onclick="toggleExpand()">
    <svg width="16" height="16" class="chevron">
      <use href="#chevron_right" />
    </svg>
    <span>Skills</span>
  </div>
  <div class="section-content">
    <!-- Nested items -->
  </div>
</div>
```

#### 3. Add New Button
```html
<button class="btn-text">
  <svg width="16" height="16">
    <use href="#plus" />
  </svg>
  Add skill
</button>
```

### CSS Implementation
```scss
// Sidebar icons
.sidebar-item {
  display: flex;
  align-items: center;
  padding: 12px;
  position: relative;
  
  .sidebar-icon {
    color: #6C757D;
    transition: color 200ms ease;
  }
  
  &.active {
    .sidebar-icon {
      color: #FFFFFF;
    }
    
    .active-indicator {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: #0066FF; // or contextual color
    }
  }
  
  .sidebar-label {
    margin-left: 12px;
    font-size: 14px;
    white-space: nowrap;
  }
}

// Expandable sections
.chevron {
  transition: transform 200ms ease;
  color: #6C757D;
  
  &.expanded {
    transform: rotate(90deg);
  }
}

// Text editor toolbar
.editor-toolbar {
  button {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: #6C757D;
    border-radius: 4px;
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
      color: #495057;
    }
    
    &.active {
      background: rgba(0, 102, 255, 0.1);
      color: #0066FF;
    }
  }
}
```

### Icon Usage Decision Tree
```
START
  ↓
Is it navigation?
  YES → Is it in sidebar?
    YES → Use 20x20px, check category:
      - User/Agent → user.svg
      - Communication → phone.svg, chat_bubble.svg
      - Configuration → sliders.svg, route_network.svg
      - Knowledge → book.svg
    NO → Is it a tab/breadcrumb?
      YES → Use text only, no icons
  NO ↓
  
Is it an action?
  YES → What type?
    - Add new → plus.svg (16x16px)
    - Preview/test → play icon (16x16px)
    - External link → arrow-up-right (12x12px)
  NO ↓
  
Is it content control?
  YES → What type?
    - Expandable → chevron_right.svg (16x16px)
    - Text formatting → toolbar icons (16x16px)
  NO → Check design system for patterns
```

---

**Batch 2 Extraction Summary**
- Total icons identified: 17
- Final status: 15 (88%)
- Draft status: 2 (12%)
- Sidebar icons fully mapped
- Text editor toolbar documented
- UI patterns confirmed

**Ready for Implementation:**
All core navigation and UI control icons are production-ready with clear usage guidelines for AI tools to create native Parloa interfaces.