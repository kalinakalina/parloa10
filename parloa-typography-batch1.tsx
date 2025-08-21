import React from 'react';

const ParloaTypographyBatch1 = () => {
  // TYPOGRAPHY EXTRACTED FROM BATCH 1 - NEEDS VERIFICATION
  const typographyFindings = {
    fontFamily: {
      primary: {
        value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        confidence: 'HIGH',
        source: 'System font stack detected',
        notes: 'Default system fonts for optimal rendering'
      },
      mono: {
        value: 'Monaco, Consolas, "Courier New", monospace',
        confidence: 'MEDIUM',
        source: 'Code/technical content areas',
        notes: 'Not visible in Batch 1, assumed from patterns'
      }
    },
    
    observed: {
      pageTitle: {
        example: 'Empty AT Agent',
        size: '~20-24px',
        weight: '600-700',
        color: '#2D3748',
        location: 'Top of page next to flags',
        confidence: 'HIGH'
      },
      sectionHeaders: {
        example: 'Role, Tone, Instructions',
        size: '~14-16px',
        weight: '500-600',
        color: '#2D3748',
        location: 'Tab headers',
        confidence: 'HIGH'
      },
      bodyText: {
        example: 'Use the tone description to guide...',
        size: '~14px',
        weight: '400',
        color: '#2D3748',
        location: 'Description text',
        confidence: 'HIGH'
      },
      smallText: {
        example: '89503 (latest)',
        size: '~12px',
        weight: '400',
        color: '#718096',
        location: 'Version info',
        confidence: 'HIGH'
      },
      inputText: {
        example: 'Hi, wie kann ich dir helfen?',
        size: '~14px',
        weight: '400',
        color: '#2D3748',
        location: 'Input fields',
        confidence: 'HIGH'
      },
      labelText: {
        example: 'Welcome Phrase',
        size: '~12-13px',
        weight: '500',
        color: '#718096',
        location: 'Above inputs',
        confidence: 'HIGH'
      },
      buttonText: {
        example: 'Preview',
        size: '~14px',
        weight: '500',
        color: '#FFFFFF',
        location: 'Primary buttons',
        confidence: 'HIGH'
      },
      sidebarText: {
        example: 'Persona, Phone, Routing',
        size: '~13-14px',
        weight: '400-500',
        color: '#9F7AEA / #FFFFFF',
        location: 'Sidebar navigation',
        confidence: 'HIGH'
      },
      linkText: {
        example: 'Open Documentation',
        size: '~14px',
        weight: '400',
        color: '#0066FF',
        textDecoration: 'none',
        confidence: 'HIGH'
      }
    },
    
    hierarchy: {
      h1: { size: '20-24px', weight: '600-700', usage: 'Page titles' },
      h2: { size: '16-18px', weight: '600', usage: 'Section headers' },
      h3: { size: '14-16px', weight: '500-600', usage: 'Subsection headers' },
      body: { size: '14px', weight: '400', usage: 'Standard text' },
      small: { size: '12px', weight: '400', usage: 'Metadata, labels' },
      tiny: { size: '11px', weight: '400', usage: 'Not observed in Batch 1' }
    }
  };

  const TextSample = ({ label, example, specs, confidence }) => (
    <div className="border-b border-gray-200 py-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-1">{label}</p>
          <p 
            className="mb-2"
            style={{
              fontSize: specs.size.replace('~', ''),
              fontWeight: specs.weight,
              color: specs.color
            }}
          >
            {example}
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <span>Size: {specs.size}</span>
            <span>Weight: {specs.weight}</span>
            <span>Color: {specs.color}</span>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded ${
          confidence === 'HIGH' ? 'bg-green-100 text-green-700' :
          confidence === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          {confidence}
        </span>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Parloa Typography System - Batch 1</h1>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ BATCH 1 EXTRACTION - UNVERIFIED</strong><br />
              Typography observations from first batch only. Exact pixel values need measurement tools. 
              These are visual estimates that need verification.
            </p>
          </div>
        </div>

        {/* Font Stack */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Font Family</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <code className="block bg-gray-100 p-3 rounded text-sm mb-2">
              {typographyFindings.fontFamily.primary.value}
            </code>
            <p className="text-sm text-gray-600">
              System font stack - adapts to user's OS for optimal readability
            </p>
          </div>
        </section>

        {/* Observed Text Styles */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Observed Text Styles</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <TextSample 
              label="Page Title"
              example="Empty AT Agent"
              specs={typographyFindings.observed.pageTitle}
              confidence="HIGH"
            />
            <TextSample 
              label="Section Headers"
              example="Role • Tone • Instructions"
              specs={typographyFindings.observed.sectionHeaders}
              confidence="HIGH"
            />
            <TextSample 
              label="Body Text"
              example="Use the tone description to guide your AI Agent in creating dialogues..."
              specs={typographyFindings.observed.bodyText}
              confidence="HIGH"
            />
            <TextSample 
              label="Input Text"
              example="Hi, wie kann ich dir helfen?"
              specs={typographyFindings.observed.inputText}
              confidence="HIGH"
            />
            <TextSample 
              label="Label Text"
              example="Welcome Phrase"
              specs={typographyFindings.observed.labelText}
              confidence="HIGH"
            />
            <TextSample 
              label="Small Text / Metadata"
              example="89503 (latest)"
              specs={typographyFindings.observed.smallText}
              confidence="HIGH"
            />
            <TextSample 
              label="Button Text"
              example="Preview"
              specs={typographyFindings.observed.buttonText}
              confidence="HIGH"
            />
            <TextSample 
              label="Link Text"
              example="Open Documentation"
              specs={typographyFindings.observed.linkText}
              confidence="HIGH"
            />
          </div>
        </section>

        {/* Typography Patterns */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Typography Patterns Observed</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Size Patterns</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Primary size: 14px (body, inputs, buttons)</li>
                <li>• Small size: 12px (labels, metadata)</li>
                <li>• Large size: 20-24px (page titles)</li>
                <li>• No sizes smaller than 12px observed</li>
                <li>• Consistent 2px increments likely</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">Weight Patterns</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Regular (400): Body text, descriptions</li>
                <li>• Medium (500): Buttons, labels, nav items</li>
                <li>• Semibold (600): Section headers</li>
                <li>• Bold (700): Page titles (maybe)</li>
                <li>• No light or black weights observed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What's Missing */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Not Observable in Batch 1</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Missing Styles</h3>
                <ul className="space-y-1">
                  <li>• Error message typography</li>
                  <li>• Success message typography</li>
                  <li>• Tooltip text styles</li>
                  <li>• Modal header styles</li>
                  <li>• Table header/cell styles</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Need to Verify</h3>
                <ul className="space-y-1">
                  <li>• Exact pixel values (using tools)</li>
                  <li>• Line height ratios</li>
                  <li>• Letter spacing (if any)</li>
                  <li>• Text transform usage</li>
                  <li>• Responsive scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="font-semibold mb-2">Typography Verification Needed</h2>
          <ol className="space-y-1 text-sm text-blue-800">
            <li>1. Use browser dev tools to get exact pixel values</li>
            <li>2. Check if sizes are consistent across all instances</li>
            <li>3. Verify font weights with computed styles</li>
            <li>4. Look for any custom fonts in other batches</li>
            <li>5. Document any responsive typography changes</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ParloaTypographyBatch1;