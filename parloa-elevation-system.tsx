import React from 'react';

const ParloaElevationSystem = () => {
  // Elevation/Shadow patterns extracted from screenshots
  const elevationSystem = {
    shadows: {
      // From the collapsed sidebar
      sidebarShadow: {
        value: '2px 0 4px rgba(0, 0, 0, 0.08)',
        usage: 'Collapsed sidebar edge',
        confidence: 'HIGH',
        source: 'Multiple screenshots'
      },
      
      // From dropdown menus
      dropdownShadow: {
        value: '0 4px 12px rgba(0, 0, 0, 0.1)',
        usage: 'Dropdown menus, expanded panels',
        confidence: 'HIGH',
        source: 'Voice & Sounds dropdown, routing destinations'
      },
      
      // From buttons (subtle)
      buttonShadow: {
        value: '0 1px 2px rgba(0, 0, 0, 0.05)',
        usage: 'Primary button subtle depth',
        confidence: 'MEDIUM',
        source: 'Preview button'
      },
      
      // From toggle switches
      toggleTrackInset: {
        value: 'inset 0 1px 3px rgba(0, 0, 0, 0.12)',
        usage: 'Toggle switch track depth',
        confidence: 'HIGH',
        source: 'Use preset toggles'
      },
      
      // From input fields (focus state)
      inputFocusShadow: {
        value: '0 0 0 3px rgba(0, 102, 255, 0.1)',
        usage: 'Input field focus ring',
        confidence: 'MEDIUM',
        source: 'Inferred from focus states'
      }
    },
    
    elevationLevels: {
      level0: {
        name: 'Flat',
        zIndex: 0,
        shadow: 'none',
        usage: 'Base level content'
      },
      level1: {
        name: 'Raised',
        zIndex: 10,
        shadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        usage: 'Cards, buttons'
      },
      level2: {
        name: 'Floating',
        zIndex: 20,
        shadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        usage: 'Dropdowns, popovers'
      },
      level3: {
        name: 'Overlay',
        zIndex: 30,
        shadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        usage: 'Modals, sheets (not yet seen)'
      },
      level4: {
        name: 'Sidebar',
        zIndex: 40,
        shadow: '2px 0 4px rgba(0, 0, 0, 0.08)',
        usage: 'Fixed navigation'
      }
    },
    
    // Material/Surface patterns
    surfaces: {
      flat: {
        background: '#FFFFFF',
        border: 'none',
        shadow: 'none'
      },
      raised: {
        background: '#FFFFFF',
        border: 'none',
        shadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
      },
      outlined: {
        background: '#FFFFFF',
        border: '1px solid #E9ECEF',
        shadow: 'none'
      },
      inset: {
        background: '#F8F9FA',
        border: '1px solid #E9ECEF',
        shadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)'
      }
    }
  };

  const ShadowExample = ({ name, shadow, usage, confidence }) => (
    <div className="mb-8">
      <div className="flex items-start gap-6">
        <div 
          className="w-32 h-32 bg-white rounded-lg flex items-center justify-center"
          style={{ boxShadow: shadow.value }}
        >
          <span className="text-sm text-gray-500">Shadow</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-600 mb-2">{usage}</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500">Value:</span>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">{shadow.value}</code>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500">Confidence:</span>
              <span className={`text-xs px-2 py-1 rounded font-medium ${
                confidence === 'HIGH' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {confidence}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ElevationLevel = ({ level, details }) => (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <div 
        className="w-full h-20 bg-gray-50 rounded mb-3 flex items-center justify-center"
        style={{ 
          boxShadow: details.shadow,
          position: 'relative',
          zIndex: details.zIndex 
        }}
      >
        <span className="text-sm font-medium text-gray-600">{level}</span>
      </div>
      <h4 className="font-medium text-gray-900 mb-1">{details.name}</h4>
      <p className="text-xs text-gray-600 mb-2">{details.usage}</p>
      <div className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
        z-{details.zIndex}
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Parloa Elevation System</h1>
        <p className="text-gray-600 mb-8">Shadows and depth hierarchy extracted from UI</p>

        {/* Status Badge */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-yellow-600">⚠️</span>
            <span className="font-medium text-yellow-800">Extraction Status: DRAFT</span>
          </div>
          <p className="text-sm text-yellow-700 mt-1">
            Shadows extracted from visible elements. Modal and sheet shadows pending discovery.
          </p>
        </div>

        {/* Shadow Patterns */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Shadow Patterns</h2>
          <div className="bg-white rounded-lg p-6">
            {Object.entries(elevationSystem.shadows).map(([key, shadow]) => (
              <ShadowExample 
                key={key}
                name={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                shadow={shadow}
                usage={shadow.usage}
                confidence={shadow.confidence}
              />
            ))}
          </div>
        </section>

        {/* Elevation Levels */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Elevation Hierarchy</h2>
          <div className="grid grid-cols-5 gap-4">
            {Object.entries(elevationSystem.elevationLevels).map(([key, details]) => (
              <ElevationLevel key={key} level={key} details={details} />
            ))}
          </div>
        </section>

        {/* Surface Patterns */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Surface Treatments</h2>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(elevationSystem.surfaces).map(([key, surface]) => (
              <div key={key} className="text-center">
                <div 
                  className="w-full h-24 rounded-lg mb-2 flex items-center justify-center"
                  style={{
                    background: surface.background,
                    border: surface.border,
                    boxShadow: surface.shadow
                  }}
                >
                  <span className="text-sm text-gray-600">{key}</span>
                </div>
                <p className="text-xs text-gray-500 capitalize">{key}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Missing Elements */}
        <section className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3">🔍 To Investigate</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Modal/dialog shadows (not visible in current screenshots)</li>
            <li>• Toast/notification shadows</li>
            <li>• Hover state elevation changes</li>
            <li>• Card component shadows (if any)</li>
            <li>• Tooltip shadows</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ParloaElevationSystem;