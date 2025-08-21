import React from 'react';

const ParloaColorPalette = () => {
  const colorSystem = {
    primary: {
      'blue-500': { hex: '#006CFF', name: 'Primary Blue', usage: 'Primary actions, links' },
      'blue-400': { hex: '#3385FF', name: 'Blue Hover', usage: 'Hover states' },
      'blue-100': { hex: '#E6F0FF', name: 'Blue Light', usage: 'Light backgrounds' }
    },
    neutral: {
      'white': { hex: '#FFFFFF', name: 'White', usage: 'Cards, inputs' },
      'gray-50': { hex: '#F8F9FA', name: 'Gray 50', usage: 'Page background' },
      'gray-100': { hex: '#F5F5F5', name: 'Gray 100', usage: 'Alt background' },
      'gray-200': { hex: '#E9ECEF', name: 'Gray 200', usage: 'Borders' },
      'gray-300': { hex: '#DEE2E6', name: 'Gray 300', usage: 'Dividers' },
      'gray-500': { hex: '#ADB5BD', name: 'Gray 500', usage: 'Placeholder' },
      'gray-600': { hex: '#6C757D', name: 'Gray 600', usage: 'Secondary text' },
      'gray-700': { hex: '#495057', name: 'Gray 700', usage: 'Body text' },
      'gray-800': { hex: '#343A40', name: 'Gray 800', usage: 'Headers' }
    },
    semantic: {
      'success': { hex: '#28A745', name: 'Success', usage: 'Success states' },
      'warning': { hex: '#FFC107', name: 'Warning', usage: 'Warning states' },
      'error': { hex: '#DC3545', name: 'Error', usage: 'Error states' }
    },
    dark: {
      'sidebar-bg': { hex: '#1A1A2E', name: 'Sidebar BG', usage: 'Dark sidebar' },
      'sidebar-hover': { hex: '#252542', name: 'Sidebar Hover', usage: 'Hover state' },
      'sidebar-active': { hex: '#3A3A5E', name: 'Sidebar Active', usage: 'Active state' }
    }
  };

  const ColorSwatch = ({ color, name, usage, hex }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div 
        className="w-24 h-24 rounded-lg mb-3 border border-gray-200"
        style={{ backgroundColor: hex }}
      />
      <div className="text-center">
        <p className="font-semibold text-sm mb-1">{name}</p>
        <p className="text-xs text-gray-600 mb-2">{hex}</p>
        <p className="text-xs text-gray-500">{usage}</p>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Parloa Design System</h1>
        <p className="text-gray-600 mb-8">Visual Color Palette Verification</p>
        
        {/* Primary Colors */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Primary Colors</h2>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(colorSystem.primary).map(([key, value]) => (
              <ColorSwatch key={key} {...value} />
            ))}
          </div>
        </section>

        {/* Neutral Colors */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Neutral Palette</h2>
          <div className="grid grid-cols-5 gap-4">
            {Object.entries(colorSystem.neutral).map(([key, value]) => (
              <ColorSwatch key={key} {...value} />
            ))}
          </div>
        </section>

        {/* Semantic Colors */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Semantic Colors</h2>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(colorSystem.semantic).map(([key, value]) => (
              <ColorSwatch key={key} {...value} />
            ))}
          </div>
        </section>

        {/* Dark Theme Colors */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Dark Theme (Sidebar)</h2>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(colorSystem.dark).map(([key, value]) => (
              <ColorSwatch key={key} {...value} />
            ))}
          </div>
        </section>

        {/* Color Usage Matrix */}
        <section className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Quick Reference</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium mb-2">Text Hierarchy</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#343A40'}}></span>Headers: #343A40</li>
                <li><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#495057'}}></span>Body: #495057</li>
                <li><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#6C757D'}}></span>Secondary: #6C757D</li>
                <li><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#ADB5BD'}}></span>Placeholder: #ADB5BD</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Interactive Elements</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#006CFF'}}></span>Primary Action: #006CFF</li>
                <li><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#3385FF'}}></span>Hover State: #3385FF</li>
                <li><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#E6F0FF'}}></span>Selected BG: #E6F0FF</li>
                <li><span className="inline-block w-4 h-4 rounded mr-2" style={{backgroundColor: '#E9ECEF'}}></span>Borders: #E9ECEF</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ParloaColorPalette;