import React from 'react';

const ParloaMoleculesInventory = () => {
  const molecularComponents = {
    navigation: {
      sidebarItem: {
        name: 'Sidebar Navigation Item',
        composition: ['icon', 'label', 'expand arrow'],
        states: {
          default: {
            background: 'transparent',
            color: '#6C757D',
            padding: '8px 12px',
            borderRadius: '6px',
            iconSize: '20px',
            fontSize: '14px'
          },
          hover: {
            background: 'rgba(108, 117, 125, 0.1)',
            color: '#495057'
          },
          active: {
            background: 'rgba(0, 102, 255, 0.1)',
            color: '#0066FF',
            iconColor: '#0066FF'
          },
          expanded: {
            chevronRotation: '90deg'
          }
        },
        confidence: 'HIGH',
        sources: ['Sidebar navigation throughout']
      },
      
      breadcrumb: {
        name: 'Breadcrumb Navigation',
        composition: ['text links', 'separator', 'current page'],
        structure: {
          separator: '>',
          spacing: '8px',
          fontSize: '14px',
          linkColor: '#0066FF',
          currentColor: '#6C757D'
        },
        confidence: 'HIGH',
        sources: ['AI Agents > Mina navigation']
      },
      
      tabBar: {
        name: 'Tab Bar',
        composition: ['tab items', 'active indicator'],
        structure: {
          tabPadding: '12px 16px',
          fontSize: '14px',
          activeColor: '#0066FF',
          inactiveColor: '#6C757D',
          activeIndicator: '2px solid #0066FF',
          borderBottom: '1px solid #E9ECEF'
        },
        confidence: 'HIGH',
        sources: ['Briefing, Testing, History tabs']
      }
    },
    
    forms: {
      inputGroup: {
        name: 'Input Group',
        composition: ['label', 'input field', 'help text'],
        structure: {
          labelMarginBottom: '4px',
          labelFontSize: '12px',
          labelColor: '#6C757D',
          inputHeight: '36px',
          helpTextFontSize: '12px',
          helpTextColor: '#6C757D',
          spacing: '4px'
        },
        confidence: 'HIGH',
        sources: ['All form fields']
      },
      
      dropdownGroup: {
        name: 'Dropdown Group',
        composition: ['label', 'dropdown', 'icon'],
        variants: {
          simple: {
            hasIcon: false,
            width: 'auto'
          },
          withPreview: {
            hasIcon: true,
            iconType: 'play',
            iconPosition: 'right'
          }
        },
        confidence: 'HIGH',
        sources: ['Voice provider selects', 'Preset selects']
      },
      
      toggleGroup: {
        name: 'Toggle Group',
        composition: ['label/description', 'toggle switch'],
        layout: {
          direction: 'row',
          alignment: 'space-between',
          labelFlex: 1,
          toggleFlex: 0
        },
        confidence: 'HIGH',
        sources: ['Use preset toggles', 'Parameter toggles']
      },
      
      parameterRow: {
        name: 'Parameter Row',
        composition: ['name', 'description', 'fixed toggle', 'value'],
        structure: {
          columns: ['25%', '40%', '15%', '20%'],
          padding: '12px 0',
          borderBottom: '1px solid #E9ECEF',
          alignment: 'center'
        },
        confidence: 'HIGH',
        sources: ['Parameters table']
      }
    },
    
    content: {
      sectionHeader: {
        name: 'Section Header',
        composition: ['title', 'action button'],
        structure: {
          layout: 'flex',
          justifyContent: 'space-between',
          titleSize: '16px',
          titleWeight: 600,
          titleColor: '#343A40',
          marginBottom: '16px'
        },
        confidence: 'HIGH',
        sources: ['Destinations header', 'Parameters header']
      },
      
      expandableListItem: {
        name: 'Expandable List Item',
        composition: ['chevron', 'title', 'subtitle'],
        states: {
          collapsed: {
            chevronRotation: '0deg',
            showContent: false
          },
          expanded: {
            chevronRotation: '90deg',
            showContent: true,
            contentPadding: '16px',
            contentBackground: '#F8F9FA'
          }
        },
        structure: {
          padding: '12px 16px',
          borderRadius: '6px',
          hover: 'rgba(0, 0, 0, 0.05)'
        },
        confidence: 'HIGH',
        sources: ['Routing destinations list']
      },
      
      descriptionBlock: {
        name: 'Description Block',
        composition: ['title', 'text content'],
        structure: {
          titleMarginBottom: '8px',
          titleFontSize: '14px',
          titleWeight: 600,
          textFontSize: '14px',
          textLineHeight: '1.5',
          textColor: '#6C757D',
          padding: '16px',
          background: '#F8F9FA',
          borderRadius: '6px'
        },
        confidence: 'HIGH',
        sources: ['Instructions blocks', 'Description fields']
      },
      
      emptyState: {
        name: 'Empty State',
        composition: ['icon/illustration', 'message', 'action'],
        structure: {
          textAlign: 'center',
          iconSize: '48px',
          iconColor: '#DEE2E6',
          messageColor: '#6C757D',
          messageFontSize: '14px',
          actionMarginTop: '16px'
        },
        confidence: 'MEDIUM',
        sources: ['Inferred from patterns']
      }
    },
    
    feedback: {
      tooltip: {
        name: 'Tooltip',
        composition: ['trigger icon', 'tooltip content'],
        structure: {
          triggerSize: '16px',
          triggerColor: '#6C757D',
          background: '#343A40',
          color: '#FFFFFF',
          padding: '6px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          maxWidth: '200px'
        },
        confidence: 'MEDIUM',
        sources: ['Info icons throughout']
      },
      
      statusBadge: {
        name: 'Status Badge',
        composition: ['icon', 'text'],
        variants: {
          success: {
            background: '#28A745',
            color: '#FFFFFF'
          },
          warning: {
            background: '#FFC107',
            color: '#212529'
          },
          error: {
            background: '#DC3545',
            color: '#FFFFFF'
          }
        },
        structure: {
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: 600
        },
        confidence: 'HIGH',
        sources: ['PR badge', 'Version indicators']
      }
    },
    
    layout: {
      card: {
        name: 'Content Card',
        composition: ['header', 'body', 'actions'],
        structure: {
          background: '#FFFFFF',
          border: '1px solid #E9ECEF',
          borderRadius: '8px',
          padding: '16px',
          shadow: 'none'
        },
        variants: {
          elevated: {
            border: 'none',
            shadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }
        },
        confidence: 'MEDIUM',
        sources: ['Content sections']
      },
      
      actionBar: {
        name: 'Action Bar',
        composition: ['title', 'actions group'],
        structure: {
          layout: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          background: '#F8F9FA',
          borderTop: '1px solid #E9ECEF'
        },
        confidence: 'MEDIUM',
        sources: ['Bottom sections of panels']
      }
    }
  };

  const MoleculeCard = ({ molecule, category }) => {
    const getConfidenceColor = (confidence) => {
      switch(confidence) {
        case 'HIGH': return 'bg-green-100 text-green-700';
        case 'MEDIUM': return 'bg-yellow-100 text-yellow-700';
        case 'LOW': return 'bg-red-100 text-red-700';
        default: return 'bg-gray-100 text-gray-700';
      }
    };

    const renderComposition = (composition) => {
      return (
        <div className="flex flex-wrap gap-1 mb-2">
          {composition.map((part, idx) => (
            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {part}
            </span>
          ))}
        </div>
      );
    };

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-gray-900">{molecule.name}</h3>
          <span className={`text-xs px-2 py-1 rounded font-medium ${getConfidenceColor(molecule.confidence)}`}>
            {molecule.confidence}
          </span>
        </div>
        
        {/* Composition */}
        {molecule.composition && (
          <div className="mb-3">
            <p className="text-xs font-medium text-gray-500 mb-1">Composed of:</p>
            {renderComposition(molecule.composition)}
          </div>
        )}
        
        {/* Visual representation */}
        <div className="mb-3 p-3 bg-gray-50 rounded border border-gray-200">
          {category === 'navigation' && molecule.name === 'Sidebar Navigation Item' && (
            <div className="flex items-center gap-2 px-3 py-2 rounded bg-white">
              <span className="text-gray-500">◆</span>
              <span className="text-sm">Navigation Item</span>
              <span className="ml-auto text-gray-400">›</span>
            </div>
          )}
          
          {category === 'forms' && molecule.name === 'Input Group' && (
            <div className="space-y-1">
              <label className="text-xs text-gray-600">Label</label>
              <input className="w-full px-2 py-1 text-sm border rounded" placeholder="Input" />
            </div>
          )}
          
          {category === 'content' && molecule.name === 'Section Header' && (
            <div className="flex justify-between items-center">
              <span className="font-medium">Section Title</span>
              <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded">+ Action</button>
            </div>
          )}
        </div>
        
        {/* States or Variants */}
        {molecule.states && (
          <div className="mb-3">
            <p className="text-xs font-medium text-gray-500 mb-1">States:</p>
            <div className="flex flex-wrap gap-1">
              {Object.keys(molecule.states).map((state) => (
                <span key={state} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  {state}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {molecule.variants && (
          <div className="mb-3">
            <p className="text-xs font-medium text-gray-500 mb-1">Variants:</p>
            <div className="flex flex-wrap gap-1">
              {Object.keys(molecule.variants).map((variant) => (
                <span key={variant} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                  {variant}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Sources */}
        <div className="text-xs text-gray-500 border-t pt-2">
          <span className="font-medium">Found in:</span> {molecule.sources.join(', ')}
        </div>
      </div>
    );
  };

  // Calculate stats
  const totalMolecules = Object.values(molecularComponents).reduce((acc, category) => 
    acc + Object.keys(category).length, 0
  );
  
  const highConfidence = Object.values(molecularComponents).reduce((acc, category) => 
    acc + Object.values(category).filter(mol => mol.confidence === 'HIGH').length, 0
  );

  const categories = Object.keys(molecularComponents);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Parloa Molecular Components</h1>
        <p className="text-gray-600 mb-8">Complex components built from atomic elements</p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">{totalMolecules}</div>
            <div className="text-sm text-gray-600">Total Molecules</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-green-600">{highConfidence}</div>
            <div className="text-sm text-gray-600">High Confidence</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">{categories.length}</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">18</div>
            <div className="text-sm text-gray-600">Unique Patterns</div>
          </div>
        </div>

        {/* Component Matrix */}
        <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Component Relationships</h2>
          <div className="grid grid-cols-5 gap-4 text-sm">
            <div className="font-medium">Navigation</div>
            <div className="col-span-4 text-gray-600">
              Sidebar Item → Breadcrumb → Tab Bar (hierarchical navigation system)
            </div>
            
            <div className="font-medium">Forms</div>
            <div className="col-span-4 text-gray-600">
              Input Group + Dropdown Group + Toggle Group → Complete form system
            </div>
            
            <div className="font-medium">Content</div>
            <div className="col-span-4 text-gray-600">
              Section Header + Expandable List + Description Block → Content hierarchy
            </div>
            
            <div className="font-medium">Feedback</div>
            <div className="col-span-4 text-gray-600">
              Tooltip + Status Badge → User guidance and status communication
            </div>
            
            <div className="font-medium">Layout</div>
            <div className="col-span-4 text-gray-600">
              Card + Action Bar → Container and action patterns
            </div>
          </div>
        </div>

        {/* Categories */}
        {Object.entries(molecularComponents).map(([category, molecules]) => (
          <section key={category} className="mb-10">
            <h2 className="text-xl font-semibold mb-4 capitalize">
              {category} Molecules
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(molecules).map(([key, molecule]) => (
                <MoleculeCard key={key} molecule={molecule} category={category} />
              ))}
            </div>
          </section>
        ))}

        {/* Next Steps */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-purple-900 mb-2">✅ Molecules Extraction Complete!</h3>
          <p className="text-purple-800 mb-3">
            Successfully identified {totalMolecules} molecular components across {categories.length} categories.
          </p>
          <div className="space-y-2 text-sm text-purple-700">
            <p><strong>Key Findings:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Complete navigation system (sidebar, breadcrumb, tabs)</li>
              <li>Comprehensive form patterns (inputs, dropdowns, toggles)</li>
              <li>Content organization patterns (headers, expandables, cards)</li>
              <li>Feedback mechanisms (tooltips, badges)</li>
            </ul>
          </div>
          <p className="text-purple-700 text-sm mt-3">
            Next up: <strong>Organisms</strong> - Full page sections like headers, modals, complex forms
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParloaMoleculesInventory;