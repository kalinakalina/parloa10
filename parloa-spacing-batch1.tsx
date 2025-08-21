import React from 'react';

const ParloaSpacingBatch1 = () => {
  // SPACING OBSERVATIONS FROM BATCH 1 - NEEDS MEASUREMENT VERIFICATION
  const spacingObservations = {
    patterns: {
      baseUnit: {
        value: '4px',
        confidence: 'MEDIUM',
        evidence: 'Common spacing patterns suggest 4px base',
        notes: 'Need dev tools to confirm'
      },
      scale: {
        observed: ['8px', '12px', '16px', '20px', '24px', '32px'],
        confidence: 'MEDIUM',
        notes: 'Appears to follow 4px increments mostly'
      }
    },
    
    components: {
      sidebar: {
        width: '~56-64px',
        itemPadding: '~12px',
        iconSize: '~20-24px',
        confidence: 'HIGH',
        notes: 'Narrow sidebar, collapsed state'
      },
      
      mainContent: {
        pagePadding: '~24-32px',
        sectionGap: '~24-32px',
        confidence: 'MEDIUM',
        notes: 'Generous whitespace'
      },
      
      buttons: {
        paddingX: '~16-20px',
        paddingY: '~8-10px',
        gap: '~8px between buttons',
        confidence: 'HIGH',
        notes: 'Preview button measurements'
      },
      
      inputs: {
        paddingX: '~12-16px',
        paddingY: '~8-12px',
        labelGap: '~8px',
        fieldGap: '~16-20px',
        confidence: 'HIGH',
        notes: 'Form field spacing'
      },
      
      tabs: {
        paddingX: '~16px',
        paddingY: '~8-12px',
        gap: '~24px between tabs',
        confidence: 'HIGH',
        notes: 'Role, Tone, Instructions tabs'
      },
      
      textAreas: {
        padding: '~12-16px',
        minHeight: '~120px',
        confidence: 'MEDIUM',
        notes: 'Multi-line input fields'
      }
    },
    
    layout: {
      navigationList: {
        itemHeight: '~40-44px',
        itemPadding: '~12px 16px',
        gap: '0px',
        confidence: 'HIGH',
        notes: 'Sidebar navigation items'
      },
      
      contentSections: {
        headerMarginBottom: '~16-20px',
        sectionMarginBottom: '~32-40px',
        confidence: 'MEDIUM',
        notes: 'Vertical rhythm between sections'
      },
      
      formGroups: {
        labelMarginBottom: '~8px',
        fieldMarginBottom: '~16-20px',
        sectionMarginBottom: '~32px',
        confidence: 'HIGH',
        notes: 'Form field grouping'
      }
    }
  };

  const SpacingVisual = ({ name, value, usage, confidence }) => (
    <div className="flex items-center gap-4 p-4 bg-white rounded border border-gray-200">
      <div className="flex items-center gap-2">
        <div 
          className="bg-purple-500 opacity-20"
          style={{ width: value, height: value }}
        />
        <div className="text-sm text-gray-500">
          {value}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-600">{usage}</p>
      </div>
      <span className={`text-xs px-2 py-1 rounded ${
        confidence === 'HIGH' ? 'bg-green-100 text-green-700' :
        confidence === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' :
        'bg-red-100 text-red-700'
      }`}>
        {confidence}
      </span>
    </div>
  );

  const LayoutDiagram = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="border-2 border-dashed border-gray-300 rounded p-4">
        {children}
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Parloa Spacing System - Batch 1</h1>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ BATCH 1 VISUAL ESTIMATES</strong><br />
              These are visual approximations. Exact measurements require dev tools inspection.
              All values are prefixed with ~ to indicate estimation.
            </p>
          </div>
        </div>

        {/* Observed Scale */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Observed Spacing Scale</h2>
          <div className="grid grid-cols-2 gap-4">
            <SpacingVisual name="Tight" value="8px" usage="Icon padding, small gaps" confidence="HIGH" />
            <SpacingVisual name="Small" value="12px" usage="Input padding, nav items" confidence="HIGH" />
            <SpacingVisual name="Base" value="16px" usage="Button padding, field gaps" confidence="HIGH" />
            <SpacingVisual name="Medium" value="20px" usage="Section padding" confidence="MEDIUM" />
            <SpacingVisual name="Large" value="24px" usage="Tab gaps, section gaps" confidence="MEDIUM" />
            <SpacingVisual name="XLarge" value="32px" usage="Page padding, major gaps" confidence="MEDIUM" />
          </div>
        </section>

        {/* Component Spacing */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Component Spacing Patterns</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Button Spacing */}
            <LayoutDiagram title="Button Spacing">
              <div className="space-y-4">
                <div className="bg-blue-500 text-white px-4 py-2 rounded inline-block text-sm">
                  Preview
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>• Horizontal padding: ~16-20px</p>
                  <p>• Vertical padding: ~8-10px</p>
                  <p>• Border radius: ~4px</p>
                  <p>• Gap between buttons: ~8px</p>
                </div>
              </div>
            </LayoutDiagram>

            {/* Input Spacing */}
            <LayoutDiagram title="Input Field Spacing">
              <div className="space-y-2">
                <label className="text-xs text-gray-600">Label (~8px gap)</label>
                <div className="border border-gray-300 rounded px-3 py-2 text-sm">
                  Input field
                </div>
                <div className="text-xs text-gray-600 space-y-1 mt-3">
                  <p>• Padding: ~12-16px × ~8-12px</p>
                  <p>• Label gap: ~8px</p>
                  <p>• Field gap: ~16-20px</p>
                </div>
              </div>
            </LayoutDiagram>

            {/* Sidebar Spacing */}
            <LayoutDiagram title="Sidebar Item">
              <div className="bg-purple-100 p-3 rounded">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-purple-400 rounded"></div>
                  <span className="text-sm">Nav Item</span>
                </div>
                <div className="text-xs text-gray-600 mt-3">
                  <p>• Item padding: ~12px</p>
                  <p>• Icon size: ~20-24px</p>
                  <p>• Total height: ~40-44px</p>
                </div>
              </div>
            </LayoutDiagram>

            {/* Tab Spacing */}
            <LayoutDiagram title="Tab Navigation">
              <div className="flex gap-6 border-b pb-2">
                <span className="text-sm font-medium">Role</span>
                <span className="text-sm text-gray-500">Tone</span>
                <span className="text-sm text-gray-500">Instructions</span>
              </div>
              <div className="text-xs text-gray-600 mt-3">
                <p>• Tab padding: ~16px × ~8-12px</p>
                <p>• Tab gap: ~24px</p>
                <p>• Bottom border: 2px</p>
              </div>
            </LayoutDiagram>
          </div>
        </section>

        {/* Layout Observations */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Layout Structure</h2>
          <LayoutDiagram title="Page Layout Grid">
            <div className="flex gap-4" style={{ height: '200px' }}>
              {/* Sidebar */}
              <div className="bg-purple-100 p-2" style={{ width: '60px' }}>
                <p className="text-xs text-center">Sidebar<br />~60px</p>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 bg-gray-100 p-4">
                <p className="text-xs mb-2">Main Content Area</p>
                <p className="text-xs text-gray-600">Padding: ~24-32px</p>
                
                <div className="mt-4 space-y-3">
                  <div className="bg-white p-2 rounded text-xs">Section 1</div>
                  <div className="bg-white p-2 rounded text-xs">Section 2 (~24-32px gap)</div>
                </div>
              </div>
            </div>
          </LayoutDiagram>
        </section>

        {/* Findings Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Spacing Patterns Summary</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Consistent Patterns</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 4px base unit likely (4, 8, 12, 16, 20, 24, 32)</li>
                <li>• Generous whitespace throughout</li>
                <li>• Consistent button/input padding</li>
                <li>• Clear visual hierarchy through spacing</li>
                <li>• No cramped or tight layouts</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Need to Verify</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Exact sidebar width (56px vs 60px vs 64px)</li>
                <li>• Precise padding values</li>
                <li>• Border radius scale</li>
                <li>• Responsive spacing changes</li>
                <li>• Grid system (if any)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="font-semibold mb-2">Spacing Verification Process</h2>
          <ol className="space-y-1 text-sm text-blue-800">
            <li>1. Use browser inspector to measure exact values</li>
            <li>2. Check if 4px grid is consistently applied</li>
            <li>3. Document any spacing exceptions</li>
            <li>4. Compare spacing across different screen sizes</li>
            <li>5. Create spacing token system after verification</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ParloaSpacingBatch1;