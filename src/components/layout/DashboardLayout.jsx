// src/components/layout/DashboardLayout.jsx
import React, { useState } from 'react';
import { 
  Home, 
  Mail, 
  BarChart, 
  Users, 
  PieChart, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  Bell,
  User,
  Menu,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../url';
import { useAuth } from '../../context/AuthContext';

// MenuItem Component
const MenuItem = ({ icon, title, path, collapsed, active }) => {
  return (
    <Link 
      to={path}
      className={`flex items-center w-full px-4 py-3 text-left ${
        active 
          ? 'bg-gray-100 text-black' 
          : 'text-gray-500 hover:bg-gray-50 hover:text-black'
      } transition-colors`}
    >
      <span className="flex-shrink-0">{icon}</span>
      {!collapsed && <span className="ml-3">{title}</span>}
    </Link>
  );
};

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;


  console.log("layout user", user)

  // Menu items configuration
  const menuItems = [
    { path: "/dashboard", title: "Dashboard", icon: <Home size={20} /> },
    { path: "/campaigns", title: "Campaigns", icon: <Mail size={20} /> },
    { path: "/analytics", title: "Analytics", icon: <BarChart size={20} /> },
    { path: "/subscribers", title: "Subscribers", icon: <Users size={20} /> },
    { path: "/templates", title: "Templates", icon: <PieChart size={20} /> },
    { path: "/billing", title: "Billing", icon: <CreditCard size={20} /> },
    { path: "/settings", title: "Settings", icon: <Settings size={20} /> },
    { path: "/help", title: "Help", icon: <HelpCircle size={20} /> },
  ];

  // Get page title based on current path
  const getPageTitle = () => {
    const page = menuItems.find(item => item.path === currentPath);
    return page ? page.title : "Dashboard";
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${collapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
        {/* Logo and collapse button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!collapsed && <div className="text-xl font-bold">EmailAPI</div>}
          <button 
            onClick={() => setCollapsed(!collapsed)} 
            className="text-gray-500 hover:text-black p-1 rounded-md"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-4">
          {menuItems.map((item) => (
            <MenuItem 
              key={item.path}
              icon={item.icon} 
              title={item.title} 
              path={item.path}
              collapsed={collapsed} 
              active={currentPath === item.path}
            />
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">{getPageTitle()}</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-black rounded-full">
              <Bell size={20} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="text-sm font-medium">{user?.fname} {user?.lname}</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;