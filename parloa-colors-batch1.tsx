import React from 'react';

const ParloaColorsBatch1 = () => {
  // EXTRACTED FROM BATCH 1 - NEEDS VERIFICATION IN FUTURE BATCHES
  const colorsToVerify = {
    sidebar: {
      background: {
        value: '#2D1B69',
        confidence: 'HIGH',
        source: 'Visible in all screenshots',
        notes: 'Deep purple/violet, NOT black as I incorrectly stated'
      },
      logoGradient: {
        top: '#B794F6',
        bottom: '#6B46C1',
        confidence: 'MEDIUM',
        source: 'WA logo in sidebar',
        notes: 'Gradient from light to dark purple'
      },
      icons: {
        inactive: '#9F7AEA',
        active: '#FFFFFF',
        confidence: 'HIGH',
        source: 'Multiple sidebar icons'
      }
    },
    
    primary: {
      buttonBlue: {
        value: '#0066FF',
        confidence: 'HIGH',
        source: 'Preview button, Briefing tab',
        notes: 'Primary action color'
      },
      linkBlue: {
        value: '#0066FF',
        confidence: 'HIGH',
        source: 'Open Documentation link',
        notes: 'Same as button blue - needs verification'
      }
    },
    
    backgrounds: {
      mainBg: {
        value: '#F7FAFC',
        confidence: 'HIGH',
        source: 'Main content area background'
      },
      white: {
        value: '#FFFFFF',
        confidence: 'HIGH',
        source: 'Cards, input fields'
      },
      lightGray: {
        value: '#EDF2F7',
        confidence: 'MEDIUM',
        source: 'Tab backgrounds when inactive'
      }
    },
    
    text: {
      primary: {
        value: '#2D3748',
        confidence: 'HIGH',
        source: 'Main body text, descriptions'
      },
      secondary: {
        value: '#718096',
        confidence: 'HIGH',
        source: 'Placeholder text, labels'
      },
      tertiary: {
        value: '#A0AEC0',
        confidence: 'MEDIUM',
        source: 'Version numbers, metadata'
      }
    },
    
    borders: {
      light: {
        value: '#E2E8F0',
        confidence: 'HIGH',
        source: 'Input borders, dividers'
      },
      medium: {
        value: '#CBD5E0',
        confidence: 'MEDIUM',
        source: 'Stronger dividers'
      }
    },
    
    semantic: {
      greenTag: {
        value: '#48BB78',
        confidence: 'HIGH',
        source: 'PR tag next to version'
      },
      toggleBlue: {
        value: '#0066FF',
        confidence: 'HIGH',
        source: 'Toggle switches when on'
      },
      toggleGray: {
        value: '#CBD5E0',
        confidence: 'HIGH',
        source: 'Toggle switches when off'
      }
    }
  };

  const ColorRow = ({ category, name, color, confidence, source }) => (
    <tr className="border-b">
      <td className="py-2 px-4 text-sm font-medium">{category}</td>
      <td className="py-2 px-4 text-sm">{name}</td>
      <td className="py-2 px-4">
        <div className="flex items-center gap-2">
          <div 
            className="w-16 h-8 rounded border border-gray-300"
            style={{ backgroundColor: color }}
          />
          <code className="text-xs bg-gray-100 px-2 py-1 rounded">{color}</code>
        </div>
      </td>
      <td className="py-2 px-4">
        <span className={`text-xs px-2 py-1 rounded ${
          confidence === 'HIGH' ? 'bg-green-100 text-green-700' :
          confidence === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          {confidence}
        </span>
      </td>
      <td className="py-2 px-4 text-xs text-gray-600">{source}</td>
    </tr>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Parloa Design System - Color Extraction</h1>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ BATCH 1 EXTRACTION - UNVERIFIED</strong><br />
              These colors are extracted from the first batch only. They need to be verified and cross-referenced with future batches before being marked as final.
            </p>
          </div>
        </div>

        {/* Extraction Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-700 uppercase">Category</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-700 uppercase">Name</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-700 uppercase">Color</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-700 uppercase">Confidence</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-700 uppercase">Source</th>
              </tr>
            </thead>
            <tbody>
              {/* Sidebar Colors */}
              <ColorRow category="Sidebar" name="Background" color="#2D1B69" confidence="HIGH" source="All screenshots" />
              <ColorRow category="Sidebar" name="Icon Inactive" color="#9F7AEA" confidence="HIGH" source="Sidebar icons" />
              <ColorRow category="Sidebar" name="Icon Active" color="#FFFFFF" confidence="HIGH" source="Active icons" />
              
              {/* Primary Colors */}
              <ColorRow category="Primary" name="Action Blue" color="#0066FF" confidence="HIGH" source="Buttons, links" />
              
              {/* Backgrounds */}
              <ColorRow category="Background" name="Page BG" color="#F7FAFC" confidence="HIGH" source="Main area" />
              <ColorRow category="Background" name="White" color="#FFFFFF" confidence="HIGH" source="Cards" />
              <ColorRow category="Background" name="Light Gray" color="#EDF2F7" confidence="MEDIUM" source="Inactive tabs" />
              
              {/* Text Colors */}
              <ColorRow category="Text" name="Primary" color="#2D3748" confidence="HIGH" source="Body text" />
              <ColorRow category="Text" name="Secondary" color="#718096" confidence="HIGH" source="Labels" />
              <ColorRow category="Text" name="Tertiary" color="#A0AEC0" confidence="MEDIUM" source="Metadata" />
              
              {/* Borders */}
              <ColorRow category="Border" name="Light" color="#E2E8F0" confidence="HIGH" source="Inputs" />
              <ColorRow category="Border" name="Medium" color="#CBD5E0" confidence="MEDIUM" source="Dividers" />
              
              {/* Semantic */}
              <ColorRow category="Semantic" name="Success" color="#48BB78" confidence="HIGH" source="PR tag" />
              <ColorRow category="Semantic" name="Toggle On" color="#0066FF" confidence="HIGH" source="Switches" />
              <ColorRow category="Semantic" name="Toggle Off" color="#CBD5E0" confidence="HIGH" source="Switches" />
            </tbody>
          </table>
        </div>

        {/* Extraction Notes */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold mb-3">What I Need to Verify</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Exact sidebar purple hex value (gradient vs solid)</li>
              <li>• Whether blue is consistent across all CTAs</li>
              <li>• Gray scale progression accuracy</li>
              <li>• Additional semantic colors (error, warning)</li>
              <li>• Hover and focus states</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold mb-3">Missing from Batch 1</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Error states and messages</li>
              <li>• Success confirmations</li>
              <li>• Dropdown and modal backgrounds</li>
              <li>• Charts and data visualization colors</li>
              <li>• Dark mode (if exists)</li>
            </ul>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="font-semibold mb-2">Next Steps per Extraction Plan</h2>
          <ol className="space-y-1 text-sm text-blue-800">
            <li>1. Review these colors against Batch 2-7 screenshots</li>
            <li>2. Update confidence levels based on multiple sightings</li>
            <li>3. Identify any color variations or inconsistencies</li>
            <li>4. Only mark as "final" after full verification</li>
            <li>5. Build visual palette AFTER all batches reviewed</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ParloaColorsBatch1;