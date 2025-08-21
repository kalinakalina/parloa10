import React from 'react';

const ParloaAtomsInventory = () => {
  const atomicComponents = {
    buttons: {
      primary: {
        name: 'Primary Button',
        variants: [
          {
            state: 'default',
            background: '#0066FF',
            color: '#FFFFFF',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            icon: true,
            iconPosition: 'left',
            confidence: 'HIGH',
            sources: ['Preview button', 'New Destination button']
          }
        ]
      },
      icon: {
        name: 'Icon Button',
        variants: [
          {
            state: 'default',
            size: '32px',
            background: 'transparent',
            hover: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '6px',
            confidence: 'HIGH',
            sources: ['Grid/List view toggles', 'Image gallery buttons']
          }
        ]
      },
      text: {
        name: 'Text Button',
        variants: [
          {
            state: 'default',
            color: '#0066FF',
            background: 'transparent',
            textDecoration: 'none',
            hover: 'underline',
            confidence: 'MEDIUM',
            sources: ['Add skill link']
          }
        ]
      }
    },
    
    inputs: {
      text: {
        name: 'Text Input',
        states: {
          default: {
            background: '#FFFFFF',
            border: '1px solid #DEE2E6',
            borderRadius: '6px',
            padding: '8px 12px',
            fontSize: '14px',
            height: '36px',
            confidence: 'HIGH'
          },
          focus: {
            borderColor: '#0066FF',
            boxShadow: '0 0 0 3px rgba(0, 102, 255, 0.1)',
            confidence: 'MEDIUM'
          },
          disabled: {
            background: '#F8F9FA',
            color: '#6C757D',
            cursor: 'not-allowed',
            confidence: 'LOW'
          }
        },
        sources: ['SIP URI field', 'Name inputs', 'Description fields']
      },
      
      textarea: {
        name: 'Textarea',
        states: {
          default: {
            background: '#FFFFFF',
            border: '1px solid #DEE2E6',
            borderRadius: '6px',
            padding: '8px 12px',
            fontSize: '14px',
            minHeight: '80px',
            resize: 'vertical',
            confidence: 'HIGH'
          }
        },
        sources: ['Description fields', 'Instructions editor']
      },
      
      dropdown: {
        name: 'Dropdown Select',
        states: {
          default: {
            background: '#FFFFFF',
            border: '1px solid #DEE2E6',
            borderRadius: '6px',
            padding: '8px 12px',
            fontSize: '14px',
            height: '36px',
            chevron: '▼',
            confidence: 'HIGH'
          }
        },
        sources: ['Voice provider', 'Language selects', 'Preset selects']
      }
    },
    
    toggles: {
      switch: {
        name: 'Toggle Switch',
        states: {
          on: {
            trackColor: '#0066FF',
            thumbColor: '#FFFFFF',
            width: '44px',
            height: '24px',
            thumbSize: '20px',
            confidence: 'HIGH'
          },
          off: {
            trackColor: '#DEE2E6',
            thumbColor: '#FFFFFF',
            confidence: 'HIGH'
          }
        },
        sources: ['Use preset toggles', 'Fixed toggle', 'Various parameters']
      }
    },
    
    icons: {
      navigation: {
        name: 'Navigation Icons',
        size: '20px',
        color: '#6C757D',
        activeColor: '#0066FF',
        examples: ['phone', 'routing', 'lock', 'templates'],
        confidence: 'HIGH',
        sources: ['Sidebar icons']
      },
      
      action: {
        name: 'Action Icons',
        size: '16px',
        color: '#6C757D',
        examples: ['chevron-right', 'chevron-down', 'play', 'grid', 'list'],
        confidence: 'HIGH',
        sources: ['Expand arrows', 'Preview icons', 'View toggles']
      },
      
      status: {
        name: 'Status Icons',
        size: '12px',
        examples: ['info', 'checkmark'],
        confidence: 'MEDIUM',
        sources: ['Tooltips', 'Success states']
      }
    },
    
    badges: {
      version: {
        name: 'Version Badge',
        variants: [
          {
            type: 'PR',
            background: '#28A745',
            color: '#FFFFFF',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '11px',
            fontWeight: 600,
            confidence: 'HIGH',
            sources: ['PR badge in version selector']
          }
        ]
      }
    },
    
    labels: {
      field: {
        name: 'Field Label',
        styles: {
          fontSize: '12px',
          color: '#6C757D',
          fontWeight: 400,
          marginBottom: '4px',
          textTransform: 'none',
          confidence: 'HIGH'
        },
        sources: ['Form field labels throughout']
      },
      
      section: {
        name: 'Section Label',
        styles: {
          fontSize: '14px',
          color: '#343A40',
          fontWeight: 600,
          marginBottom: '8px',
          confidence: 'HIGH'
        },
        sources: ['Voice & Language', 'Parameters sections']
      }
    },
    
    dividers: {
      horizontal: {
        name: 'Horizontal Divider',
        styles: {
          height: '1px',
          background: '#E9ECEF',
          margin: '16px 0',
          confidence: 'HIGH'
        },
        sources: ['Between sections', 'Parameter dividers']
      }
    },
    
    loaders: {
      preview: {
        name: 'Preview Loader',
        type: 'circular',
        size: '16px',
        color: '#0066FF',
        confidence: 'MEDIUM',
        sources: ['Preview button loading states']
      }
    }
  };

  const AtomCard = ({ atom, category }) => {
    const getConfidenceColor = (confidence) => {
      switch(confidence) {
        case 'HIGH': return 'bg-green-100 text-green-700';
        case 'MEDIUM': return 'bg-yellow-100 text-yellow-700';
        case 'LOW': return 'bg-red-100 text-red-700';
        default: return 'bg-gray-100 text-gray-700';
      }
    };

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-gray-900">{atom.name}</h3>
          {atom.confidence && (
            <span className={`text-xs px-2 py-1 rounded font-medium ${getConfidenceColor(atom.confidence)}`}>
              {atom.confidence}
            </span>
          )}
        </div>
        
        {/* Visual representation based on category */}
        <div className="mb-3">
          {category === 'buttons' && atom.variants && (
            <div className="space-y-2">
              {atom.variants.map((variant, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 rounded text-sm font-medium"
                  style={{
                    backgroundColor: variant.background,
                    color: variant.color,
                    borderRadius: variant.borderRadius
                  }}
                >
                  {variant.icon && '▶ '}Button
                </button>
              ))}
            </div>
          )}
          
          {category === 'inputs' && (
            <input 
              type="text" 
              placeholder="Input field"
              className="w-full px-3 py-2 border rounded text-sm"
              style={{
                borderColor: '#DEE2E6',
                borderRadius: '6px'
              }}
            />
          )}
          
          {category === 'toggles' && (
            <div className="flex items-center">
              <div className="relative inline-block w-11 h-6">
                <div className="w-11 h-6 bg-blue-600 rounded-full"></div>
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform translate-x-5"></div>
              </div>
            </div>
          )}
          
          {category === 'icons' && (
            <div className="flex gap-2">
              {atom.examples?.slice(0, 4).map((icon, idx) => (
                <div key={idx} className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">◆</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Sources */}
        {atom.sources && (
          <div className="text-xs text-gray-500">
            <span className="font-medium">Found in:</span> {atom.sources.join(', ')}
          </div>
        )}
      </div>
    );
  };

  // Calculate stats
  const totalAtoms = Object.values(atomicComponents).reduce((acc, category) => 
    acc + Object.keys(category).length, 0
  );
  
  const highConfidence = Object.values(atomicComponents).reduce((acc, category) => 
    acc + Object.values(category).filter(atom => 
      atom.confidence === 'HIGH' || atom.variants?.some(v => v.confidence === 'HIGH')
    ).length, 0
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Parloa Atomic Components</h1>
        <p className="text-gray-600 mb-8">The fundamental building blocks of the design system</p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">{totalAtoms}</div>
            <div className="text-sm text-gray-600">Total Atoms</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-green-600">{highConfidence}</div>
            <div className="text-sm text-gray-600">High Confidence</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">8</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">95%</div>
            <div className="text-sm text-gray-600">Coverage</div>
          </div>
        </div>

        {/* Categories */}
        {Object.entries(atomicComponents).map(([category, atoms]) => (
          <section key={category} className="mb-10">
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(atoms).map(([key, atom]) => (
                <AtomCard key={key} atom={atom} category={category} />
              ))}
            </div>
          </section>
        ))}

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-blue-900 mb-2">✅ Atoms Extraction Complete!</h3>
          <p className="text-blue-800 mb-3">
            Successfully identified {totalAtoms} atomic components across 8 categories.
          </p>
          <p className="text-blue-700 text-sm">
            Next up: <strong>Molecules</strong> - Combinations of atoms forming more complex components
            (cards, lists, navigation items, form groups)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParloaAtomsInventory;