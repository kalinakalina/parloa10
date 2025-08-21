import React from 'react';

const ParloaComponentsBatch1 = () => {
  // COMPONENT PATTERNS OBSERVED IN BATCH 1
  const componentPatterns = {
    navigation: {
      sidebar: {
        structure: 'Vertical icon-based navigation',
        state: 'Collapsed (narrow)',
        elements: [
          { icon: 'Grid (Apps)', label: 'Hidden in collapsed state' },
          { icon: 'User circle', label: 'Persona', state: 'active' },
          { icon: 'Phone', label: 'Phone' },
          { icon: 'Route/Flow', label: 'Routing' },
          { icon: 'Brain/Knowledge', label: 'KnowledgeSkill' },
          { icon: 'Code/Custom', label: 'Custom_Skill' }
        ],
        behavior: 'Active state shows white icon with blue left border',
        confidence: 'HIGH'
      },
      
      tabs: {
        examples: ['Role • Tone • Instructions', 'Briefing • Testing • History'],
        structure: 'Horizontal tabs with text labels',
        activeIndicator: 'Blue text color, possible underline',
        spacing: 'Wide gaps between tabs (~24px)',
        confidence: 'HIGH'
      }
    },
    
    forms: {
      buttons: {
        primary: {
          example: 'Preview',
          style: 'Blue background (#0066FF), white text',
          padding: '~8-10px vertical, ~16-20px horizontal',
          borderRadius: '~4px',
          icon: 'Play icon when relevant',
          states: 'Default shown, hover/active not visible',
          confidence: 'HIGH'
        },
        secondary: {
          example: 'Not visible in Batch 1',
          confidence: 'LOW'
        }
      },
      
      inputs: {
        text: {
          example: 'Hi, wie kann ich dir helfen?',
          border: '1px solid #E2E8F0',
          borderRadius: '~4px',
          padding: '~8-12px vertical, ~12-16px horizontal',
          background: '#FFFFFF',
          states: 'Default shown, focus not visible',
          confidence: 'HIGH'
        },
        
        textarea: {
          example: 'Error phrase, instructions text',
          minHeight: '~120px',
          resize: 'Vertical likely',
          other: 'Same styling as text input',
          confidence: 'HIGH'
        },
        
        labels: {
          position: 'Above input',
          gap: '~8px',
          color: '#718096',
          size: '~12-13px',
          weight: '500',
          confidence: 'HIGH'
        }
      },
      
      toggles: {
        example: 'Use preset (shown in batch)',
        onColor: '#0066FF',
        offColor: '#CBD5E0',
        size: '~44px × ~24px',
        knobSize: '~20px',
        label: 'Right side of toggle',
        confidence: 'HIGH'
      },
      
      selects: {
        example: 'Preset dropdowns',
        appearance: 'Custom styled, not native',
        indicator: 'Chevron down icon',
        confidence: 'MEDIUM'
      }
    },
    
    content: {
      cards: {
        example: 'Main content area panels',
        background: '#FFFFFF',
        border: 'None or very subtle',
        borderRadius: '~8px',
        padding: '~24-32px',
        shadow: 'Subtle or none',
        confidence: 'MEDIUM'
      },
      
      sections: {
        separator: 'Whitespace, no visible lines',
        spacing: '~24-32px between sections',
        confidence: 'MEDIUM'
      },
      
      badges: {
        example: 'PR (green badge)',
        background: '#48BB78',
        textColor: '#FFFFFF',
        padding: '~2-4px × ~8px',
        borderRadius: '~4px',
        fontSize: '~11-12px',
        confidence: 'HIGH'
      }
    },
    
    feedback: {
      links: {
        example: 'Open Documentation',
        color: '#0066FF',
        decoration: 'None by default',
        icon: 'External link icon',
        behavior: 'Opens in new tab likely',
        confidence: 'HIGH'
      },
      
      emptyStates: {
        visible: 'No empty states in Batch 1',
        confidence: 'N/A'
      },
      
      loading: {
        visible: 'No loading states in Batch 1',
        confidence: 'N/A'
      },
      
      errors: {
        visible: 'No error states in Batch 1',
        confidence: 'N/A'
      }
    }
  };

  const ComponentCard = ({ title, details, confidence }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold">{title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${
          confidence === 'HIGH' ? 'bg-green-100 text-green-700' :
          confidence === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' :
          confidence === 'LOW' ? 'bg-red-100 text-red-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {confidence}
        </span>
      </div>
      <div className="space-y-3">
        {details}
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Parloa Component Patterns - Batch 1</h1>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ BATCH 1 COMPONENTS ONLY</strong><br />
              Limited component visibility. Many states (hover, focus, error, success) not observable.
              Need additional batches for complete component library.
            </p>
          </div>
        </div>

        {/* Navigation Components */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Navigation Components</h2>
          <div className="grid grid-cols-2 gap-6">
            <ComponentCard 
              title="Sidebar Navigation" 
              confidence="HIGH"
              details={
                <>
                  <div className="bg-purple-100 p-4 rounded">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 bg-white rounded">
                        <div className="w-5 h-5 bg-purple-400 rounded"></div>
                        <span className="text-sm">Active Item</span>
                        <div className="w-1 h-6 bg-blue-500 absolute left-0"></div>
                      </div>
                      <div className="flex items-center gap-3 p-2">
                        <div className="w-5 h-5 bg-purple-300 rounded"></div>
                        <span className="text-sm text-purple-300">Inactive</span>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Width: ~56-64px collapsed</li>
                    <li>• Purple background (#2D1B69)</li>
                    <li>• White icons when active</li>
                    <li>• Blue left border for active state</li>
                  </ul>
                </>
              }
            />
            
            <ComponentCard 
              title="Tab Navigation" 
              confidence="HIGH"
              details={
                <>
                  <div className="border-b border-gray-200 pb-2">
                    <div className="flex gap-6">
                      <span className="text-sm font-medium text-blue-500">Active Tab</span>
                      <span className="text-sm text-gray-600">Inactive Tab</span>
                      <span className="text-sm text-gray-600">Another Tab</span>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Horizontal layout</li>
                    <li>• Blue color for active (#0066FF)</li>
                    <li>• Wide spacing between tabs</li>
                    <li>• Clean, minimal style</li>
                  </ul>
                </>
              }
            />
          </div>
        </section>

        {/* Form Components */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Form Components</h2>
          <div className="grid grid-cols-2 gap-6">
            <ComponentCard 
              title="Input Fields" 
              confidence="HIGH"
              details={
                <>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-600 font-medium">Label Text</label>
                    <input 
                      type="text" 
                      placeholder="Placeholder text"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Clean borders (#E2E8F0)</li>
                    <li>• 4px border radius</li>
                    <li>• Labels above inputs</li>
                    <li>• Consistent padding</li>
                  </ul>
                </>
              }
            />
            
            <ComponentCard 
              title="Buttons" 
              confidence="HIGH"
              details={
                <>
                  <div className="space-y-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded text-sm font-medium flex items-center gap-2">
                      <span className="text-lg">▶</span> Preview
                    </button>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Primary: Blue (#0066FF)</li>
                    <li>• White text, medium weight</li>
                    <li>• Can include icons</li>
                    <li>• ~4px border radius</li>
                  </ul>
                </>
              }
            />
            
            <ComponentCard 
              title="Toggle Switches" 
              confidence="HIGH"
              details={
                <>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-11 h-6 bg-blue-500 rounded-full"></div>
                      <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm">Use preset</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Blue when on (#0066FF)</li>
                    <li>• Gray when off (#CBD5E0)</li>
                    <li>• Smooth transitions likely</li>
                    <li>• Label on right side</li>
                  </ul>
                </>
              }
            />
            
            <ComponentCard 
              title="Text Areas" 
              confidence="HIGH"
              details={
                <>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                    rows="3"
                    placeholder="Multi-line text input..."
                  />
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Same styling as inputs</li>
                    <li>• Min height ~120px</li>
                    <li>• Likely resizable</li>
                  </ul>
                </>
              }
            />
          </div>
        </section>

        {/* Content Components */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Content Components</h2>
          <div className="grid grid-cols-2 gap-6">
            <ComponentCard 
              title="Badges" 
              confidence="HIGH"
              details={
                <>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-green-500 text-white text-xs rounded">PR</span>
                    <span className="px-2 py-1 bg-gray-300 text-gray-700 text-xs rounded">latest</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Small, compact design</li>
                    <li>• Semantic colors</li>
                    <li>• Uppercase text</li>
                    <li>• ~4px border radius</li>
                  </ul>
                </>
              }
            />
            
            <ComponentCard 
              title="Links" 
              confidence="HIGH"
              details={
                <>
                  <a href="#" className="text-blue-500 text-sm flex items-center gap-1">
                    Open Documentation
                    <span className="text-xs">↗</span>
                  </a>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Blue color (#0066FF)</li>
                    <li>• No underline by default</li>
                    <li>• External link icon</li>
                    <li>• Standard font weight</li>
                  </ul>
                </>
              }
            />
          </div>
        </section>

        {/* Missing Components */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Components Not Observable in Batch 1</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Navigation</h3>
                <ul className="space-y-1">
                  <li>• Breadcrumbs</li>
                  <li>• Pagination</li>
                  <li>• Expanded sidebar</li>
                  <li>• Mobile menu</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Forms</h3>
                <ul className="space-y-1">
                  <li>• Radio buttons</li>
                  <li>• Checkboxes</li>
                  <li>• File upload</li>
                  <li>• Date pickers</li>
                  <li>• Secondary buttons</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Feedback</h3>
                <ul className="space-y-1">
                  <li>• Error messages</li>
                  <li>• Success messages</li>
                  <li>• Loading states</li>
                  <li>• Empty states</li>
                  <li>• Tooltips</li>
                  <li>• Modals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="font-semibold mb-2">Component Verification Process</h2>
          <ol className="space-y-1 text-sm text-blue-800">
            <li>1. Document all component states (hover, focus, active, disabled)</li>
            <li>2. Capture component behavior and interactions</li>
            <li>3. Note any animation or transition details</li>
            <li>4. Look for additional component variants in other batches</li>
            <li>5. Build complete component specifications after all batches</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ParloaComponentsBatch1;