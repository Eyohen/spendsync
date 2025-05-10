// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Home, Settings, User, CreditCard, FileText, LogOut, Menu, X,FileBarChart,Users } from 'lucide-react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const menuItems = [
    { title: 'Dashboard', icon: <Home size={20} />, path: '/dashboard' },
    { title: 'Transactions', icon: <FileText size={20} />, path: '/transactions' },
    { title: 'Cards', icon: <CreditCard size={20} />, path: '/cards' },
    { title: 'Members', icon: <Users size={20} />, path: '/members' },
    { title: 'Audit Logs & Reports', icon: <FileBarChart size={20} />, path: '/audit-logs' },
    { title: 'Profile', icon: <User size={20} />, path: '/profile' },
    { title: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  // Set active item based on current path
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const currentPath = location.pathname;
    const currentMenuItem = menuItems.find(item => currentPath === item.path);
    if (currentMenuItem) {
      setActiveItem(currentMenuItem.title);
    }
  }, [location.pathname]);

  return (
    <div 
      className={`fixed h-full bg-white border-r border-gray-200 shadow-sm transition-all duration-300 z-10 ${
        isOpen ? 'w-64' : 'w-0 md:w-20'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {isOpen ? (
          <Link to="/dashboard" className="text-xl font-bold text-sky-600">SpendSync</Link>
        ) : (
          <Link to="/dashboard" className="hidden md:block text-xl font-bold text-sky-600">SS</Link>
        )}
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-sky-600">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className={`flex items-center p-4 cursor-pointer transition-colors ${
              activeItem === item.title
                ? 'text-sky-600 bg-sky-50 border-r-4 border-sky-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <div className="mr-4">{item.icon}</div>
            {isOpen && <span>{item.title}</span>}
          </Link>
        ))}
      </div>

      <div className="absolute bottom-0 w-full border-t border-gray-200">
        <div className="flex items-center p-4 cursor-pointer text-gray-600 hover:bg-gray-100">
          <div className="mr-4"><LogOut size={20} /></div>
          {isOpen && <span>Logout</span>}
        </div>
      </div>
    </div>
  );
};

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center md:hidden">
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-sky-600 mr-4">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-sky-600">SpendSync</h1>
      </div>
      
      <div className="md:flex-1">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="relative mr-4">
          <button className="text-gray-500 hover:text-sky-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        
        <div className="flex items-center">
          <Link to="/profile">
            <img
              src="/api/placeholder/40/40"
              alt="User"
              className="w-8 h-8 rounded-full mr-2"
            />
          </Link>
          <Link to="/profile" className="hidden md:block text-sm font-medium text-gray-700 hover:text-sky-600">
            Daniel Okoh
          </Link>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <TopBar toggleSidebar={toggleSidebar} />
        
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;