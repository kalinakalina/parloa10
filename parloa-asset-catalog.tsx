import React, { useState } from 'react';

const ParloaAssetCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const assetCatalog = {
    icons: {
      navigation: [
        {
          name: 'persona',
          size: '20x20',
          color: 'currentColor',
          usage: 'Sidebar - General section',
          frequency: 'HIGH',
          priority: 'P1',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'User/person icon'
        },
        {
          name: 'phone',
          size: '20x20',
          color: 'currentColor',
          usage: 'Sidebar - Phone settings',
          frequency: 'HIGH',
          priority: 'P1',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Phone/call icon'
        },
        {
          name: 'llm-params',
          size: '20x20',
          color: 'currentColor',
          usage: 'Sidebar - LLM Parameters',
          frequency: 'HIGH',
          priority: 'P1',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Settings/sliders icon'
        },
        {
          name: 'routing',
          size: '20x20',
          color: 'currentColor',
          usage: 'Sidebar - Routing section',
          frequency: 'HIGH',
          priority: 'P1',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Network/routing icon'
        },
        {
          name: 'bank-data',
          size: '20x20',
          color: 'currentColor',
          usage: 'Sidebar - Bankdatenänderung',
          frequency: 'MEDIUM',
          priority: 'P2',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Bank/financial icon'
        },
        {
          name: 'password',
          size: '20x20',
          color: 'currentColor',
          usage: 'Sidebar - Passwort vergessen',
          frequency: 'MEDIUM',
          priority: 'P2',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Lock/security icon'
        },
        {
          name: 'templates',
          size: '20x20',
          color: 'currentColor',
          usage: 'Sidebar - Templates',
          frequency: 'MEDIUM',
          priority: 'P2',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Document/template icon'
        },
        {
          name: 'experimental',
          size: '20x20',
          color: 'currentColor',
          usage: 'Sidebar - Experimental',
          frequency: 'LOW',
          priority: 'P3',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Flask/lab icon'
        }
      ],
      
      ui: [
        {
          name: 'chevron-right',
          size: '16x16',
          color: 'currentColor',
          usage: 'Expandable items, navigation',
          frequency: 'VERY_HIGH',
          priority: 'P1',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Right-pointing chevron'
        },
        {
          name: 'chevron-down',
          size: '16x16',
          color: 'currentColor',
          usage: 'Dropdowns, expandable sections',
          frequency: 'VERY_HIGH',
          priority: 'P1',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Down-pointing chevron'
        },
        {
          name: 'play',
          size: '16x16',
          color: '#FFFFFF',
          usage: 'Preview buttons',
          frequency: 'HIGH',
          priority: 'P1',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Play/preview icon'
        },
        {
          name: 'plus',
          size: '16x16',
          color: 'currentColor',
          usage: 'Add buttons (New Destination, etc)',
          frequency: 'HIGH',
          priority: 'P1',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Plus/add icon'
        },
        {
          name: 'grid-view',
          size: '16x16',
          color: 'currentColor',
          usage: 'View toggle - grid mode',
          frequency: 'MEDIUM',
          priority: 'P2',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Grid layout icon'
        },
        {
          name: 'list-view',
          size: '16x16',
          color: 'currentColor',
          usage: 'View toggle - list mode',
          frequency: 'MEDIUM',
          priority: 'P2',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'List layout icon'
        },
        {
          name: 'info',
          size: '12x12',
          color: '#6C757D',
          usage: 'Tooltips, help indicators',
          frequency: 'HIGH',
          priority: 'P1',
          extractionMethod: 'SVG',
          confidence: 'HIGH',
          description: 'Information circle'
        },
        {
          name: 'close',
          size: '16x16',
          color: 'currentColor',
          usage: 'Close buttons, remove actions',
          frequency: 'MEDIUM',
          priority: 'P2',
          extractionMethod: 'SVG',
          confidence: 'MEDIUM',
          description: 'X/close icon'
        },
        {
          name: 'check',
          size: '12x12',
          color: '#28A745',
          usage: 'Success states, checkmarks',
          frequency: 'MEDIUM',
          priority: 'P2',
          extractionMethod: 'SVG',
          confidence: 'MEDIUM',
          description: 'Checkmark icon'
        },
        {
          name: 'warning',
          size: '16x16',
          color: '#FFC107',
          usage: 'Warning states',
          frequency: 'LOW',
          priority: 'P3',
          extractionMethod: 'SVG',
          confidence: 'LOW',
          description: 'Warning triangle'
        },
        {
          name: 'error',
          size: '16x16',
          color: '#DC3545',
          usage: 'Error states',
          frequency: 'LOW',
          priority: 'P3',
          extractionMethod: 'SVG',
          confidence: 'LOW',
          description: 'Error circle/X'
        }
      ],
      
      functional: [
        {
          name: 'speaker',
          size: '20x20',
          color: 'currentColor',
          usage: 'Audio/sound settings',
          frequency: 'MEDIUM',
          priority: 'P2',
          extractionMethod: 'SVG',
          confidence: 'MEDIUM',
          description: 'Speaker/audio icon'
        },
        {
          name: 'microphone',
          size: '20x20',
          color: 'currentColor',
          usage: 'Voice input indicators',
          frequency: 'MEDIUM',
          priority: 'P2',
          extractionMethod: 'SVG',
          confidence: 'MEDIUM',
          description: 'Microphone icon'
        },
        {
          name: 'settings',
          size: '20x20',
          color: 'currentColor',
          usage: 'Advanced settings',
          frequency: 'MEDIUM',
          priority: 'P2',
          extractionMethod: 'SVG',
          confidence: 'MEDIUM',
          description: 'Gear/settings icon'
        }
      ]
    },
    
    logos: [
      {
        name: 'parloa-logo',
        size: 'Variable (est. 120x32)',
        usage: 'Main application header/sidebar',
        frequency: 'VERY_HIGH',
        priority: 'P1',
        extractionMethod: 'SVG',
        confidence: 'MEDIUM',
        description: 'Parloa brand logo',
        variants: ['light', 'dark', 'compact']
      },
      {
        name: 'parloa-icon',
        size: '32x32',
        usage: 'Collapsed sidebar, favicon',
        frequency: 'HIGH',
        priority: 'P1',
        extractionMethod: 'SVG',
        confidence: 'MEDIUM',
        description: 'Parloa brand mark/icon only'
      }
    ],
    
    illustrations: [
      {
        name: 'empty-state-generic',
        size: 'Variable (est. 200x150)',
        usage: 'Empty states, no data',
        frequency: 'MEDIUM',
        priority: 'P2',
        extractionMethod: 'SVG/PNG',
        confidence: 'LOW',
        description: 'Generic empty state illustration'
      },
      {
        name: 'error-state',
        size: 'Variable (est. 200x150)',
        usage: 'Error pages, failed states',
        frequency: 'LOW',
        priority: 'P3',
        extractionMethod: 'SVG/PNG',
        confidence: 'LOW',
        description: 'Error state illustration'
      },
      {
        name: 'onboarding-welcome',
        size: 'Variable (est. 300x200)',
        usage: 'Onboarding, welcome screens',
        frequency: 'LOW',
        priority: 'P3',
        extractionMethod: 'SVG/PNG',
        confidence: 'LOW',
        description: 'Welcome/onboarding illustration'
      }
    ],
    
    patterns: [
      {
        name: 'loading-spinner',
        size: '16x16',
        usage: 'Loading states throughout',
        frequency: 'HIGH',
        priority: 'P1',
        extractionMethod: 'CSS/SVG',
        confidence: 'HIGH',
        description: 'Animated loading spinner',
        animation: 'rotate 1s linear infinite'
      },
      {
        name: 'skeleton-loader',
        size: 'Variable',
        usage: 'Content loading states',
        frequency: 'MEDIUM',
        priority: 'P2',
        extractionMethod: 'CSS',
        confidence: 'MEDIUM',
        description: 'Shimmer skeleton screens',
        animation: 'shimmer 1.5s infinite'
      },
      {
        name: 'focus-ring',
        size: '3px offset',
        usage: 'Focus states on all inputs',
        frequency: 'VERY_HIGH',
        priority: 'P1',
        extractionMethod: 'CSS',
        confidence: 'HIGH',
        description: 'Consistent focus indicator',
        color: 'rgba(0, 102, 255, 0.25)'
      }
    ],
    
    cursors: [
      {
        name: 'pointer',
        usage: 'Clickable elements',
        frequency: 'VERY_HIGH',
        priority: 'P1',
        confidence: 'HIGH'
      },
      {
        name: 'not-allowed',
        usage: 'Disabled states',
        frequency: 'HIGH',
        priority: 'P1',
        confidence: 'HIGH'
      },
      {
        name: 'move',
        usage: 'Draggable elements',
        frequency: 'LOW',
        priority: 'P3',
        confidence: 'LOW'
      },
      {
        name: 'text',
        usage: 'Text selection areas',
        frequency: 'HIGH',
        priority: 'P2',
        confidence: 'HIGH'
      }
    ]
  };

  // Calculate statistics
  const stats = {
    totalAssets: Object.values(assetCatalog).reduce((acc, category) => 
      acc + (Array.isArray(category) ? category.length : Object.values(category).flat().length), 0
    ),
    p1Assets: Object.values(assetCatalog).reduce((acc, category) => {
      const items = Array.isArray(category) ? category : Object.values(category).flat();
      return acc + items.filter(item => item.priority === 'P1').length;
    }, 0),
    highFrequency: Object.values(assetCatalog).reduce((acc, category) => {
      const items = Array.isArray(category) ? category : Object.values(category).flat();
      return acc + items.filter(item => item.frequency === 'HIGH' || item.frequency === 'VERY_HIGH').length;
    }, 0),
    svgAssets: Object.values(assetCatalog).reduce((acc, category) => {
      const items = Array.isArray(category) ? category : Object.values(category).flat();
      return acc + items.filter(item => item.extractionMethod?.includes('SVG')).length;
    }, 0)
  };

  const AssetCard = ({ asset, type }) => {
    const getPriorityColor = (priority) => {
      switch(priority) {
        case 'P1': return 'bg-red-100 text-red-700 border-red-200';
        case 'P2': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
        case 'P3': return 'bg-green-100 text-green-700 border-green-200';
        default: return 'bg-gray-100 text-gray-700 border-gray-200';
      }
    };

    const getFrequencyBadge = (frequency) => {
      switch(frequency) {
        case 'VERY_HIGH': return '🔥 Very High';
        case 'HIGH': return '⭐ High';
        case 'MEDIUM': return '◐ Medium';
        case 'LOW': return '○ Low';
        default: return frequency;
      }
    };

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* Icon placeholder */}
            <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
              {type === 'icons' && <span className="text-gray-500">◆</span>}
              {type === 'logos' && <span className="text-gray-500">◉</span>}
              {type === 'illustrations' && <span className="text-gray-500">▣</span>}
              {type === 'patterns' && <span className="text-gray-500">◈</span>}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{asset.name}</h4>
              {asset.size && <p className="text-xs text-gray-500">{asset.size}</p>}
            </div>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full font-medium border ${getPriorityColor(asset.priority)}`}>
            {asset.priority}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-3">{asset.description}</p>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Usage:</span>
            <span className="text-gray-700">{asset.usage}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Frequency:</span>
            <span className="font-medium">{getFrequencyBadge(asset.frequency)}</span>
          </div>
          {asset.extractionMethod && (
            <div className="flex justify-between">
              <span className="text-gray-500">Format:</span>
              <span className="text-gray-700">{asset.extractionMethod}</span>
            </div>
          )}
          {asset.confidence && (
            <div className="flex justify-between">
              <span className="text-gray-500">Confidence:</span>
              <span className={`font-medium ${
                asset.confidence === 'HIGH' ? 'text-green-600' :
                asset.confidence === 'MEDIUM' ? 'text-yellow-600' :
                'text-red-600'
              }`}>{asset.confidence}</span>
            </div>
          )}
        </div>

        {asset.variants && (
          <div className="mt-3 pt-3 border-t">
            <p className="text-xs text-gray-500 mb-1">Variants:</p>
            <div className="flex gap-1">
              {asset.variants.map(variant => (
                <span key={variant} className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {variant}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const ExtractionRoadmap = () => {
    const phases = [
      {
        phase: 1,
        name: 'Critical UI Icons',
        items: ['Navigation icons', 'UI control icons', 'Brand logos'],
        effort: '2-3 hours',
        impact: 'HIGH',
        status: 'READY'
      },
      {
        phase: 2,
        name: 'Interactive Elements',
        items: ['Loading states', 'Focus rings', 'Hover effects'],
        effort: '1-2 hours',
        impact: 'HIGH',
        status: 'READY'
      },
      {
        phase: 3,
        name: 'Functional Icons',
        items: ['Settings icons', 'Status indicators', 'Action icons'],
        effort: '2-3 hours',
        impact: 'MEDIUM',
        status: 'READY'
      },
      {
        phase: 4,
        name: 'Illustrations & Empty States',
        items: ['Empty states', 'Error illustrations', 'Onboarding graphics'],
        effort: '3-4 hours',
        impact: 'MEDIUM',
        status: 'NEEDS_DISCOVERY'
      }
    ];

    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-lg font-semibold mb-4">🚀 Extraction Roadmap</h3>
        <div className="space-y-4">
          {phases.map(phase => (
            <div key={phase.phase} className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {phase.phase}
                  </div>
                  <h4 className="font-semibold">{phase.name}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded font-medium ${
                    phase.status === 'READY' ? 'bg-green-100 text-green-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {phase.status}
                  </span>
                  <span className="text-xs text-gray-500">{phase.effort}</span>
                </div>
              </div>
              <div className="ml-11">
                <p className="text-sm text-gray-600 mb-1">{phase.items.join(' • ')}</p>
                <div className="flex items-center gap-4 mt-2 text-xs">
                  <span className="text-gray-500">Impact:</span>
                  <div className="flex gap-1">
                    {[1,2,3].map(i => (
                      <div key={i} className={`w-2 h-2 rounded-full ${
                        i <= (phase.impact === 'HIGH' ? 3 : phase.impact === 'MEDIUM' ? 2 : 1)
                          ? 'bg-blue-600' : 'bg-gray-300'
                      }`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Parloa Visual Asset Catalog</h1>
        <p className="text-gray-600 mb-8">Complete inventory of icons, logos, and visual elements</p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">{stats.totalAssets}</div>
            <div className="text-sm text-gray-600">Total Assets</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-red-600">{stats.p1Assets}</div>
            <div className="text-sm text-gray-600">Priority 1 Assets</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">{stats.highFrequency}</div>
            <div className="text-sm text-gray-600">High Usage</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">{stats.svgAssets}</div>
            <div className="text-sm text-gray-600">SVG Format</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm font-medium text-gray-700">Filter by category:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Assets
            </button>
            {Object.keys(assetCatalog).map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Asset Grid */}
        {(selectedCategory === 'all' ? Object.entries(assetCatalog) : [[selectedCategory, assetCatalog[selectedCategory]]]).map(([category, assets]) => (
          <section key={category} className="mb-10">
            <h2 className="text-xl font-semibold mb-4 capitalize">{category}</h2>
            <div className="grid grid-cols-3 gap-4">
              {(Array.isArray(assets) ? assets : Object.values(assets).flat()).map((asset, idx) => (
                <AssetCard key={`${category}-${idx}`} asset={asset} type={category} />
              ))}
            </div>
          </section>
        ))}

        {/* Extraction Roadmap */}
        <section className="mt-12">
          <ExtractionRoadmap />
        </section>

        {/* Asset Guidelines */}
        <section className="mt-8 bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">📋 Asset Extraction Guidelines</h3>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">SVG Extraction Best Practices</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Export at native size (no scaling)</li>
                <li>• Use currentColor for dynamic coloring</li>
                <li>• Optimize with SVGO for production</li>
                <li>• Maintain 1px stroke minimum</li>
                <li>• Include viewBox for scalability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Icon System Standards</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Navigation icons: 20x20px</li>
                <li>• UI icons: 16x16px</li>
                <li>• Small indicators: 12x12px</li>
                <li>• Consistent 2px stroke width</li>
                <li>• Rounded line caps and joins</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Summary */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <h3 className="font-semibold text-purple-900 mb-2">🎨 Asset Cataloging Complete!</h3>
          <p className="text-purple-800 mb-4">
            Successfully cataloged {stats.totalAssets} visual assets across {Object.keys(assetCatalog).length} categories!
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-900 font-medium mb-2">Ready for extraction:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ {stats.p1Assets} Priority 1 assets identified</li>
              <li>✓ {stats.svgAssets} assets suitable for SVG format</li>
              <li>✓ Complete extraction roadmap created</li>
              <li>✓ All usage contexts documented</li>
            </ul>
            <p className="text-blue-700 font-medium mt-4">
              Next: Use ChatGPT or other AI tools to generate pixel-perfect SVGs from screenshots! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParloaAssetCatalog;