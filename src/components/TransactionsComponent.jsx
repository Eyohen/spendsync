import { useState } from 'react';
import { Search, Filter, Download, ChevronLeft, ChevronRight, Eye, FileText } from 'lucide-react';

// Sample transactions data
const transactionsData = [
  {
    id: 'TX123456',
    employee: 'Jane Doe',
    department: 'Sales',
    amount: 25000,
    date: '2025-05-03',
    category: 'Transport',
    description: 'Fuel for client visit',
    status: 'Completed',
    receipt: true
  },
  {
    id: 'TX123457',
    employee: 'John Smith',
    department: 'Operations',
    amount: 15000,
    date: '2025-05-02',
    category: 'Office Supplies',
    description: 'Printer cartridges',
    status: 'Pending',
    receipt: true
  },
  {
    id: 'TX123458',
    employee: 'Sarah Johnson',
    department: 'Marketing',
    amount: 35000,
    date: '2025-05-01',
    category: 'Client Entertainment',
    description: 'Client lunch meeting',
    status: 'Completed',
    receipt: true
  },
  {
    id: 'TX123459',
    employee: 'Michael Brown',
    department: 'IT',
    amount: 12500,
    date: '2025-04-30',
    category: 'Equipment',
    description: 'USB adapters',
    status: 'Declined',
    receipt: false
  },
  {
    id: 'TX123460',
    employee: 'Emily Davis',
    department: 'HR',
    amount: 45000,
    date: '2025-04-29',
    category: 'Training',
    description: 'Team building workshop',
    status: 'Completed',
    receipt: true
  },
  {
    id: 'TX123461',
    employee: 'David Wilson',
    department: 'Finance',
    amount: 8500,
    date: '2025-04-28',
    category: 'Utilities',
    description: 'Internet subscription',
    status: 'Completed',
    receipt: true
  },
  {
    id: 'TX123462',
    employee: 'Linda Miller',
    department: 'Sales',
    amount: 17500,
    date: '2025-04-27',
    category: 'Transport',
    description: 'Taxi to client meeting',
    status: 'Completed',
    receipt: true
  },
  {
    id: 'TX123463',
    employee: 'Robert Taylor',
    department: 'Operations',
    amount: 22000,
    date: '2025-04-26',
    category: 'Equipment',
    description: 'Safety equipment',
    status: 'Pending',
    receipt: false
  },
  {
    id: 'TX123464',
    employee: 'Jennifer Clark',
    department: 'Marketing',
    amount: 30000,
    date: '2025-04-25',
    category: 'Advertising',
    description: 'Social media promotion',
    status: 'Completed',
    receipt: true
  },
  {
    id: 'TX123465',
    employee: 'William Moore',
    department: 'IT',
    amount: 75000,
    date: '2025-04-24',
    category: 'Software',
    description: 'Software license renewal',
    status: 'Completed',
    receipt: true
  }
];

// Categories for filter
const categories = [
  'All',
  'Transport',
  'Office Supplies',
  'Client Entertainment',
  'Equipment',
  'Training',
  'Utilities',
  'Advertising',
  'Software'
];

// Departments for filter
const departments = [
  'All',
  'Sales',
  'Operations',
  'Marketing',
  'IT',
  'HR',
  'Finance'
];

// Statuses for filter
const statuses = [
  'All',
  'Completed',
  'Pending',
  'Declined'
];

const formatCurrency = (value) => {
  return `₦${value.toLocaleString()}`;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-NG', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  });
};

const TransactionsComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 5;

  // Filter transactions based on search term and selected filters
  const filteredTransactions = transactionsData.filter(transaction => {
    const matchesSearch = 
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || transaction.category === selectedCategory;
    const matchesDepartment = selectedDepartment === 'All' || transaction.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'All' || transaction.status === selectedStatus;
    
    let matchesDateRange = true;
    if (dateRange.from && dateRange.to) {
      const transactionDate = new Date(transaction.date);
      const fromDate = new Date(dateRange.from);
      const toDate = new Date(dateRange.to);
      matchesDateRange = transactionDate >= fromDate && transactionDate <= toDate;
    }
    
    return matchesSearch && matchesCategory && matchesDepartment && matchesStatus && matchesDateRange;
  });

  // Paginate transactions
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedDepartment('All');
    setSelectedStatus('All');
    setDateRange({ from: '', to: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Transactions Overview</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 flex items-center">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="flex-1 relative mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search transactions..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            className="flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {showFilters && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((department) => (
                  <option key={department} value={department}>{department}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <div className="flex space-x-2">
                <input
                  type="date"
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  value={dateRange.from}
                  onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
                />
                <input
                  type="date"
                  className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  value={dateRange.to}
                  onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
                />
              </div>
            </div>
            
            <div className="lg:col-span-4 flex justify-end mt-2">
              <button
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentTransactions.length > 0 ? (
                currentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {transaction.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                          {transaction.employee.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{transaction.employee}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {formatCurrency(transaction.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(transaction.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-sky-600 hover:text-sky-800">
                          <Eye size={18} />
                        </button>
                        {transaction.receipt && (
                          <button className="text-gray-600 hover:text-gray-800">
                            <FileText size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-4 text-center text-sm text-gray-500">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {filteredTransactions.length > 0 && (
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredTransactions.length)} of {filteredTransactions.length} transactions
            </div>
            <div className="flex space-x-1">
              <button
                className={`px-3 py-1 rounded-md ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
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
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
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

export default TransactionsComponent;