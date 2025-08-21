import React, { useState } from 'react';
import { 
  Home, MessageSquare, Users, Settings, FileText, 
  BarChart, Zap, Box, Menu, X, ChevronRight,
  CircleUser, LogOut, HelpCircle
} from 'lucide-react';

const ParloaSidebarAnatomy = () => {
  const [selectedItem, setSelectedItem] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);

  // Exact measurements from screenshots
  const sidebarSpecs = {
    width: {
      collapsed: '64px',
      expanded: '240px'
    },
    colors: {
      background: '#1A1A2E',
      hover: '#252542',
      active: '#3A3A5E',
      icon: {
        default: '#ADB5BD',
        active: '#FFFFFF'
      }
    },
    spacing: {
      itemPadding: '12px',
      iconSize: 24,
      gap: '4px'
    }
  };

  const navigationItems = [
    { id: 'home', icon: Home, label: 'Dashboard' },
    { id: 'conversations', icon: MessageSquare, label: 'Conversations' },
    { id: 'contacts', icon: Users, label: 'Contacts' },
    { id: 'analytics', icon: BarChart, label: 'Analytics' },
    { id: 'automation', icon: Zap, label: 'Automation' },
    { id: 'integrations', icon: Box, label: 'Integrations' },
    { id: 'documentation', icon: FileText, label: 'Documentation' }
  ];

  const bottomItems = [
    { id: 'help', icon: HelpCircle, label: 'Help & Support' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  const SidebarItem = ({ item, isActive }) => {
    const Icon = item.icon;
    return (
      <div
        onClick={() => setSelectedItem(item.id)}
        className="relative cursor-pointer transition-all duration-200"
        style={{
          backgroundColor: isActive ? sidebarSpecs.colors.active : 'transparent',
          padding: sidebarSpecs.spacing.itemPadding
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = sidebarSpecs.colors.hover;
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        <div className="flex items-center gap-3">
          <Icon 
            size={sidebarSpecs.spacing.iconSize} 
            style={{ 
              color: isActive ? sidebarSpecs.colors.icon.active : sidebarSpecs.colors.icon.default,
              minWidth: sidebarSpecs.spacing.iconSize
            }}
          />
          {isExpanded && (
            <span 
              className="text-sm whitespace-nowrap"
              style={{ color: isActive ? '#FFFFFF' : '#ADB5BD' }}
            >
              {item.label}
            </span>
          )}
        </div>
        {isActive && (
          <div 
            className="absolute left-0 top-0 bottom-0 w-1"
            style={{ backgroundColor: '#006CFF' }}
          />
        )}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Live Sidebar */}
      <div 
        className="relative transition-all duration-300 flex flex-col"
        style={{ 
          width: isExpanded ? sidebarSpecs.width.expanded : sidebarSpecs.width.collapsed,
          backgroundColor: sidebarSpecs.colors.background 
        }}
      >
        {/* Logo Area */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            {isExpanded && <span className="text-white font-semibold">Parloa</span>}
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isExpanded ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4">
          {navigationItems.map(item => (
            <SidebarItem 
              key={item.id} 
              item={item} 
              isActive={selectedItem === item.id}
            />
          ))}
        </div>

        {/* Bottom Items */}
        <div className="border-t border-gray-700 py-4">
          {bottomItems.map(item => (
            <SidebarItem 
              key={item.id} 
              item={item} 
              isActive={selectedItem === item.id}
            />
          ))}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#3A3A5E' }}
            >
              <CircleUser size={20} color="#ADB5BD" />
            </div>
            {isExpanded && (
              <div className="flex-1">
                <p className="text-sm text-white">John Doe</p>
                <p className="text-xs text-gray-400">john@parloa.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Anatomy Documentation */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-2xl font-bold mb-6">Dark Sidebar Component Anatomy</h1>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Specifications */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Specifications</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Dimensions</h3>
                <ul className="space-y-1 text-sm">
                  <li>Collapsed width: <code className="bg-gray-100 px-2 py-1 rounded">64px</code></li>
                  <li>Expanded width: <code className="bg-gray-100 px-2 py-1 rounded">240px</code></li>
                  <li>Item height: <code className="bg-gray-100 px-2 py-1 rounded">48px</code></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Colors</h3>
                <ul className="space-y-1 text-sm">
                  <li>Background: <code className="bg-gray-100 px-2 py-1 rounded">#1A1A2E</code></li>
                  <li>Hover: <code className="bg-gray-100 px-2 py-1 rounded">#252542</code></li>
                  <li>Active: <code className="bg-gray-100 px-2 py-1 rounded">#3A3A5E</code></li>
                  <li>Active indicator: <code className="bg-gray-100 px-2 py-1 rounded">#006CFF</code></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-2">Typography</h3>
                <ul className="space-y-1 text-sm">
                  <li>Font size: <code className="bg-gray-100 px-2 py-1 rounded">14px</code></li>
                  <li>Font weight: <code className="bg-gray-100 px-2 py-1 rounded">400</code></li>
                  <li>Line height: <code className="bg-gray-100 px-2 py-1 rounded">20px</code></li>
                </ul>
              </div>
            </div>
          </div>

          {/* States */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Interactive States</h2>
            <div className="space-y-4">
              <div className="p-4 rounded" style={{ backgroundColor: '#1A1A2E' }}>
                <div className="space-y-2">
                  <div className="p-3 rounded flex items-center gap-3" style={{ backgroundColor: '#1A1A2E' }}>
                    <Home size={24} color="#ADB5BD" />
                    <span className="text-sm" style={{ color: '#ADB5BD' }}>Default</span>
                  </div>
                  <div className="p-3 rounded flex items-center gap-3" style={{ backgroundColor: '#252542' }}>
                    <Home size={24} color="#ADB5BD" />
                    <span className="text-sm" style={{ color: '#ADB5BD' }}>Hover</span>
                  </div>
                  <div className="p-3 rounded flex items-center gap-3 relative" style={{ backgroundColor: '#3A3A5E' }}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                    <Home size={24} color="#FFFFFF" />
                    <span className="text-sm text-white">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Component Structure */}
          <div className="bg-white p-6 rounded-lg shadow-sm col-span-2">
            <h2 className="text-lg font-semibold mb-4">Component Structure</h2>
            <pre className="bg-gray-50 p-4 rounded overflow-x-auto text-sm">
{`<Sidebar>
  <LogoArea>
    <Logo />
    <ToggleButton />
  </LogoArea>
  
  <NavigationSection>
    <NavItem active>
      <ActiveIndicator />
      <Icon />
      <Label />
    </NavItem>
  </NavigationSection>
  
  <BottomSection>
    <NavItem />
    <NavItem />
  </BottomSection>
  
  <UserProfile>
    <Avatar />
    <UserInfo />
  </UserProfile>
</Sidebar>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParloaSidebarAnatomy;