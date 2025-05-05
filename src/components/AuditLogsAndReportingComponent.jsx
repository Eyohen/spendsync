import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Calendar, 
  User, 
  CreditCard, 
  FileText, 
  Clock, 
  BarChart2, 
  ArrowDown, 
  ArrowUp, 
  RefreshCw,
  FileBarChart,
  AlertTriangle,
  PieChart,
  Wallet,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle
} from 'lucide-react';

// Sample audit log data
const auditLogsData = [
  {
    id: 1,
    action: 'Card Created',
    description: 'Virtual card created for Jane Doe',
    user: 'John Adebayo',
    userRole: 'Finance Manager',
    timestamp: '2025-05-05T11:45:32',
    ip: '192.168.1.105',
    status: 'Success'
  },
  {
    id: 2,
    action: 'Transaction Approved',
    description: 'Approved transaction #TX123458 for ₦35,000',
    user: 'John Adebayo',
    userRole: 'Finance Manager',
    timestamp: '2025-05-05T10:30:15',
    ip: '192.168.1.105',
    status: 'Success'
  },
  {
    id: 3,
    action: 'Wallet Top-up',
    description: 'Corporate wallet topped up with ₦500,000',
    user: 'John Adebayo',
    userRole: 'Finance Manager',
    timestamp: '2025-05-04T16:15:42',
    ip: '192.168.1.105',
    status: 'Success'
  },
  {
    id: 4,
    action: 'Transaction Declined',
    description: 'Declined transaction #TX123465 for ₦75,000',
    user: 'John Adebayo',
    userRole: 'Finance Manager',
    timestamp: '2025-05-04T14:22:30',
    ip: '192.168.1.105',
    status: 'Warning'
  },
  {
    id: 5,
    action: 'Card Blocked',
    description: 'Card CARD004 for Michael Brown blocked',
    user: 'John Adebayo',
    userRole: 'Finance Manager',
    timestamp: '2025-05-03T09:10:05',
    ip: '192.168.1.105',
    status: 'Warning'
  },
  {
    id: 6,
    action: 'Report Downloaded',
    description: 'Monthly transaction report downloaded',
    user: 'John Adebayo',
    userRole: 'Finance Manager',
    timestamp: '2025-05-02T17:05:45',
    ip: '192.168.1.105',
    status: 'Success'
  },
  {
    id: 7,
    action: 'Login Attempt',
    description: 'Failed login attempt',
    user: 'Unknown',
    userRole: 'N/A',
    timestamp: '2025-05-02T10:45:22',
    ip: '203.87.124.65',
    status: 'Error'
  },
  {
    id: 8,
    action: 'User Added',
    description: 'New user Sarah Johnson added as Sales Manager',
    user: 'John Adebayo',
    userRole: 'Finance Manager',
    timestamp: '2025-05-01T14:30:10',
    ip: '192.168.1.105',
    status: 'Success'
  },
  {
    id: 9,
    action: 'Spending Limit Changed',
    description: 'Card CARD003 spending limit increased to ₦250,000',
    user: 'John Adebayo',
    userRole: 'Finance Manager',
    timestamp: '2025-05-01T11:20:45',
    ip: '192.168.1.105',
    status: 'Success'
  },
  {
    id: 10,
    action: 'System Backup',
    description: 'Automatic system backup completed',
    user: 'System',
    userRole: 'System',
    timestamp: '2025-05-01T00:00:05',
    ip: 'localhost',
    status: 'Success'
  }
];

// Sample expense data for reports
const expenseData = {
  transactions: {
    daily: [
      { date: 'May 1', amount: 165000 },
      { date: 'May 2', amount: 120000 },
      { date: 'May 3', amount: 95000 },
      { date: 'May 4', amount: 110000 },
      { date: 'May 5', amount: 180000 }
    ],
    weekly: [
      { date: 'Week 1', amount: 750000 },
      { date: 'Week 2', amount: 920000 },
      { date: 'Week 3', amount: 850000 },
      { date: 'Week 4', amount: 785000 }
    ],
    monthly: [
      { date: 'Jan', amount: 3200000 },
      { date: 'Feb', amount: 2800000 },
      { date: 'Mar', amount: 3500000 },
      { date: 'Apr', amount: 3100000 },
      { date: 'May', amount: 2750000 }
    ]
  },
  categories: [
    { name: 'Travel', amount: 1250000, percentage: 30 },
    { name: 'Office Supplies', amount: 850000, percentage: 20 },
    { name: 'Client Entertainment', amount: 625000, percentage: 15 },
    { name: 'Software Subscriptions', amount: 540000, percentage: 13 },
    { name: 'Training', amount: 420000, percentage: 10 },
    { name: 'Utilities', amount: 210000, percentage: 5 },
    { name: 'Others', amount: 290000, percentage: 7 }
  ],
  departments: [
    { name: 'Sales', amount: 1450000, percentage: 35 },
    { name: 'Marketing', amount: 1050000, percentage: 25 },
    { name: 'Operations', amount: 750000, percentage: 18 },
    { name: 'IT', amount: 500000, percentage: 12 },
    { name: 'HR', amount: 250000, percentage: 6 },
    { name: 'Finance', amount: 175000, percentage: 4 }
  ]
};

// Format currency
const formatCurrency = (value) => {
  return `₦${value.toLocaleString()}`;
};

// Format date
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-NG', { 
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Format time
const formatTime = (dateString) => {
  return new Date(dateString).toLocaleTimeString('en-NG', { 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

// Format date and time
const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleString('en-NG', { 
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

// Get appropriate icon for audit log action
const getActionIcon = (action) => {
  switch (action) {
    case 'Card Created':
    case 'Card Blocked':
      return <CreditCard size={18} />;
    case 'Transaction Approved':
    case 'Transaction Declined':
      return <FileText size={18} />;
    case 'Wallet Top-up':
      return <Wallet size={18} />;
    case 'Report Downloaded':
      return <Download size={18} />;
    case 'Login Attempt':
      return <User size={18} />;
    case 'User Added':
      return <User size={18} />;
    case 'Spending Limit Changed':
      return <ArrowUp size={18} />;
    case 'System Backup':
      return <RefreshCw size={18} />;
    default:
      return <Clock size={18} />;
  }
};

// Generate export filename based on report type and date range
const generateExportFilename = (reportType, period) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  return `spendsync_${reportType}_report_${period}_${currentDate}.csv`;
};

// Tab for Audit Logs
const AuditLogsTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [actionFilter, setActionFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Get unique action types for filter dropdown
  const actionTypes = ['All', ...new Set(auditLogsData.map(log => log.action))];
  
  // Get unique status types for filter dropdown
  const statusTypes = ['All', ...new Set(auditLogsData.map(log => log.status))];
  
  // Filter logs based on search and filters
  const filteredLogs = auditLogsData.filter(log => {
    const matchesSearch = 
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.user.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesAction = actionFilter === 'All' || log.action === actionFilter;
    const matchesStatus = statusFilter === 'All' || log.status === statusFilter;
    
    let matchesDateRange = true;
    if (dateRange.from && dateRange.to) {
      const logDate = new Date(log.timestamp);
      const fromDate = new Date(dateRange.from);
      const toDate = new Date(dateRange.to);
      toDate.setHours(23, 59, 59); // Include the entire "to" day
      matchesDateRange = logDate >= fromDate && logDate <= toDate;
    }
    
    return matchesSearch && matchesAction && matchesStatus && matchesDateRange;
  });
  
  // Paginate logs
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstItem, indexOfLastItem);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  
  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setDateRange({ from: '', to: '' });
    setActionFilter('All');
    setStatusFilter('All');
  };
  
  // Export logs as CSV
  const exportLogs = () => {
    // In a real app, this would generate and download a CSV file
    alert('Exporting logs to CSV...');
  };
  
  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
          <div className="flex-1 relative mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search logs..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-2">
            <button
              className="flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
              onClick={exportLogs}
            >
              <Download size={16} className="mr-2" />
              Export
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <div className="flex space-x-2">
              <input
                type="date"
                className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                value={dateRange.from}
                onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
              />
              <span className="flex items-center text-gray-500">to</span>
              <input
                type="date"
                className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                value={dateRange.to}
                onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Action Type</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
            >
              {actionTypes.map((action) => (
                <option key={action} value={action}>{action}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statusTypes.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      
      {/* Logs Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentLogs.length > 0 ? (
                currentLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                          log.status === 'Success' ? 'bg-green-100 text-green-600' :
                          log.status === 'Warning' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {getActionIcon(log.action)}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{log.action}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{log.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{log.user}</div>
                      <div className="text-xs text-gray-500">{log.userRole}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatDate(log.timestamp)}</div>
                      <div className="text-xs text-gray-500">{formatTime(log.timestamp)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.ip}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        log.status === 'Success' ? 'bg-green-100 text-green-800' :
                        log.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No logs found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {filteredLogs.length > 0 && (
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredLogs.length)} of {filteredLogs.length} logs
            </div>
            <div className="flex space-x-1">
              <button
                className={`px-3 py-1 rounded-md ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} />
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-sky-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                className={`px-3 py-1 rounded-md ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Tab for Reports
const ReportsTab = () => {
  const [reportType, setReportType] = useState('transactions');
  const [timePeriod, setTimePeriod] = useState('monthly');
  const [reportFormat, setReportFormat] = useState('csv');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [selectedDepartments, setSelectedDepartments] = useState(['All']);
  const [selectedCategories, setSelectedCategories] = useState(['All']);
  
  // Report types
  const reportTypes = [
    { id: 'transactions', name: 'Transactions' },
    { id: 'expenses-by-category', name: 'Expenses by Category' },
    { id: 'expenses-by-department', name: 'Expenses by Department' },
    { id: 'card-usage', name: 'Card Usage' },
    { id: 'user-activity', name: 'User Activity' }
  ];
  
  // Time periods
  const timePeriods = [
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'quarterly', name: 'Quarterly' },
    { id: 'yearly', name: 'Yearly' },
    { id: 'custom', name: 'Custom Range' }
  ];
  
  // Export formats
  const exportFormats = [
    { id: 'csv', name: 'CSV' },
    { id: 'excel', name: 'Excel' },
    { id: 'pdf', name: 'PDF' }
  ];
  
  // Departments for filter
  const departments = [
    'All',
    'Sales',
    'Marketing',
    'Operations',
    'IT',
    'HR',
    'Finance'
  ];
  
  // Categories for filter
  const categories = [
    'All',
    'Travel',
    'Office Supplies',
    'Client Entertainment',
    'Software Subscriptions',
    'Training',
    'Utilities',
    'Others'
  ];
  
  // Handle department selection
  const handleDepartmentChange = (department) => {
    if (department === 'All') {
      setSelectedDepartments(['All']);
    } else {
      const newSelection = selectedDepartments.includes(department)
        ? selectedDepartments.filter(dep => dep !== department)
        : [...selectedDepartments.filter(dep => dep !== 'All'), department];
      
      setSelectedDepartments(newSelection.length ? newSelection : ['All']);
    }
  };
  
  // Handle category selection
  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setSelectedCategories(['All']);
    } else {
      const newSelection = selectedCategories.includes(category)
        ? selectedCategories.filter(cat => cat !== category)
        : [...selectedCategories.filter(cat => cat !== 'All'), category];
      
      setSelectedCategories(newSelection.length ? newSelection : ['All']);
    }
  };
  
  // Generate preview report data based on selections
  const getReportData = () => {
    switch (reportType) {
      case 'transactions':
        return expenseData.transactions[timePeriod === 'custom' ? 'daily' : timePeriod];
      case 'expenses-by-category':
        return expenseData.categories;
      case 'expenses-by-department':
        return expenseData.departments;
      default:
        return [];
    }
  };
  
  // Export report
  const exportReport = () => {
    const filename = generateExportFilename(reportType, timePeriod);
    // In a real app, this would generate and download the report file
    alert(`Exporting ${reportType} report as ${reportFormat.toUpperCase()} file: ${filename}`);
  };
  
  // Show report preview based on type
  const ReportPreview = () => {
    const reportData = getReportData();
    
    if (reportType === 'transactions') {
      return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-80 overflow-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Transaction Trends</h3>
          <div className="space-y-4">
            {reportData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-sm text-gray-600">{item.date}</div>
                <div className="flex-1">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-sky-600">
                          {formatCurrency(item.amount)}
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-100">
                      <div style={{ width: `${(item.amount / 1000000) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    if (reportType === 'expenses-by-category') {
      return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-80 overflow-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Expenses by Category</h3>
          <div className="space-y-4">
            {reportData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-40 text-sm text-gray-600">{item.name}</div>
                <div className="flex-1">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-sky-600">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-sky-600">
                          {formatCurrency(item.amount)}
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-100">
                      <div style={{ width: `${item.percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    if (reportType === 'expenses-by-department') {
      return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-80 overflow-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Expenses by Department</h3>
          <div className="space-y-4">
            {reportData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-sm text-gray-600">{item.name}</div>
                <div className="flex-1">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-sky-600">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-sky-600">
                          {formatCurrency(item.amount)}
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-100">
                      <div style={{ width: `${item.percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 h-80 overflow-auto flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
            <BarChart2 size={24} />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Report Preview</h3>
          <p className="text-gray-500">Select a report type to see a preview</p>
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Report Configuration</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              {reportTypes.map((type) => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            >
              {timePeriods.map((period) => (
                <option key={period.id} value={period.id}>{period.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={reportFormat}
              onChange={(e) => setReportFormat(e.target.value)}
            >
              {exportFormats.map((format) => (
                <option key={format.id} value={format.id}>{format.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        {timePeriod === 'custom' && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Custom Date Range</label>
            <div className="flex space-x-2">
              <input
                type="date"
                className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                value={dateRange.from}
                onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
              />
              <span className="flex items-center text-gray-500">to</span>
              <input
                type="date"
                className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                value={dateRange.to}
                onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
              />
            </div>
          </div>
        )}
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Department Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Departments</label>
            <div className="space-y-2 max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-3">
              {departments.map((department) => (
                <div key={department} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`department-${department}`}
                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                    checked={selectedDepartments.includes(department)}
                    onChange={() => handleDepartmentChange(department)}
                  />
                  <label htmlFor={`department-${department}`} className="ml-2 block text-sm text-gray-700">
                    {department}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Category Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
            <div className="space-y-2 max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <label htmlFor={`category-${category}`} className="ml-2 block text-sm text-gray-700">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button
            className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center"
            onClick={exportReport}
          >
            <Download size={16} className="mr-2" />
            Generate Report
          </button>
        </div>
      </div>
      
      {/* Report Preview */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">Report Preview</h3>
        <ReportPreview />
      </div>
      
      {/* Report Templates */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">Saved Report Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:border-sky-500 cursor-pointer transition">
            <div className="flex items-start justify-between">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
                <FileBarChart size={20} />
              </div>
              <div className="ml-3 flex-1">
                <h4 className="text-md font-medium text-gray-900">Monthly Transactions</h4>
                <p className="text-sm text-gray-500 mt-1">Last exported on May 1, 2025</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:border-sky-500 cursor-pointer transition">
            <div className="flex items-start justify-between">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                <PieChart size={20} />
              </div>
              <div className="ml-3 flex-1">
                <h4 className="text-md font-medium text-gray-900">Quarterly Department Report</h4>
                <p className="text-sm text-gray-500 mt-1">Last exported on Apr 15, 2025</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:border-sky-500 cursor-pointer transition">
            <div className="flex items-start justify-between">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                <CreditCard size={20} />
              </div>
              <div className="ml-3 flex-1">
                <h4 className="text-md font-medium text-gray-900">Card Usage Summary</h4>
                <p className="text-sm text-gray-500 mt-1">Last exported on Apr 5, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Reports */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">Recently Generated Reports</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Generated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated By</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Transaction Report - April 2025</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Transactions</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">May 2, 2025</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    CSV
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  John Adebayo
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-sky-600 hover:text-sky-900 mr-3">Download</button>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Department Expenses Q1 2025</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Expenses by Department</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Apr 15, 2025</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Excel
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  John Adebayo
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-sky-600 hover:text-sky-900 mr-3">Download</button>
                </td>
              </tr>
              
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Card Usage Analysis - Mar 2025</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Card Usage</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Apr 5, 2025</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    PDF
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Sarah Johnson
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-sky-600 hover:text-sky-900 mr-3">Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main component with tabs
const AuditLogsAndReportingComponent = () => {
  const [activeTab, setActiveTab] = useState('audit-logs');
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Audit Logs & Reporting</h1>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            className={`py-4 px-6 border-b-2 font-medium text-sm ${
              activeTab === 'audit-logs'
                ? 'border-sky-500 text-sky-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('audit-logs')}
          >
            Audit Logs
          </button>
          
          <button
            className={`py-4 px-6 border-b-2 font-medium text-sm ${
              activeTab === 'reports'
                ? 'border-sky-500 text-sky-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('reports')}
          >
            Reports
          </button>
        </nav>
      </div>
      
      {/* Tab Content */}
      <div>
        {activeTab === 'audit-logs' ? <AuditLogsTab /> : <ReportsTab />}
      </div>
    </div>
  );
};

export default AuditLogsAndReportingComponent;