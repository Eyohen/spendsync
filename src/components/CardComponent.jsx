import { useState } from 'react';
import { Plus, MoreHorizontal, Search, Filter, Eye, Lock, CreditCard, Edit, Trash, AlertCircle } from 'lucide-react';

// Sample cards data
const cardsData = [
  {
    id: 'CARD001',
    employee: 'Jane Doe',
    department: 'Sales',
    cardNumber: '•••• •••• •••• 4567',
    balance: 150000,
    limit: 200000,
    status: 'Active',
    expiryDate: '05/28',
    cardType: 'Virtual',
    createdDate: '2025-02-15'
  },
  {
    id: 'CARD002',
    employee: 'John Smith',
    department: 'Operations',
    cardNumber: '•••• •••• •••• 8901',
    balance: 85000,
    limit: 100000,
    status: 'Active',
    expiryDate: '07/27',
    cardType: 'Virtual',
    createdDate: '2025-01-20'
  },
  {
    id: 'CARD003',
    employee: 'Sarah Johnson',
    department: 'Marketing',
    cardNumber: '•••• •••• •••• 2345',
    balance: 175000,
    limit: 250000,
    status: 'Active',
    expiryDate: '09/26',
    cardType: 'Virtual',
    createdDate: '2024-12-10'
  },
  {
    id: 'CARD004',
    employee: 'Michael Brown',
    department: 'IT',
    cardNumber: '•••• •••• •••• 6789',
    balance: 0,
    limit: 150000,
    status: 'Blocked',
    expiryDate: '03/27',
    cardType: 'Virtual',
    createdDate: '2025-03-05'
  },
  {
    id: 'CARD005',
    employee: 'Emily Davis',
    department: 'HR',
    cardNumber: '•••• •••• •••• 1234',
    balance: 45000,
    limit: 50000,
    status: 'Active',
    expiryDate: '11/26',
    cardType: 'Virtual',
    createdDate: '2025-02-28'
  },
  {
    id: 'CARD006',
    employee: 'David Wilson',
    department: 'Finance',
    cardNumber: '•••• •••• •••• 5678',
    balance: 120000,
    limit: 200000,
    status: 'Active',
    expiryDate: '06/27',
    cardType: 'Virtual',
    createdDate: '2025-01-15'
  }
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
  'Active',
  'Blocked',
  'Expired'
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

const CardModal = ({ isOpen, onClose, isEditing = false, cardData = null }) => {
  if (!isOpen) return null;
  
  const modalTitle = isEditing ? 'Edit Card' : 'Create New Card';
  const buttonText = isEditing ? 'Update Card' : 'Create Card';
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">{modalTitle}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employee</label>
            <select 
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              defaultValue={cardData?.employee || ''}
            >
              <option value="" disabled>Select Employee</option>
              <option>Jane Doe</option>
              <option>John Smith</option>
              <option>Sarah Johnson</option>
              <option>Michael Brown</option>
              <option>Emily Davis</option>
              <option>David Wilson</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select 
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              defaultValue={cardData?.department || ''}
            >
              <option value="" disabled>Select Department</option>
              {departments.slice(1).map((department) => (
                <option key={department}>{department}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Card Type</label>
            <select 
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              defaultValue={cardData?.cardType || 'Virtual'}
            >
              <option>Virtual</option>
              <option>Physical</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Spending Limit</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">₦</span>
              </div>
              <input
                type="number"
                className="pl-8 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Enter amount"
                defaultValue={cardData?.limit || ''}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Card Status</label>
            <select 
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              defaultValue={cardData?.status || 'Active'}
            >
              <option>Active</option>
              <option>Blocked</option>
            </select>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <button 
              type="button" 
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="button" 
              className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CardComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [showCardMenu, setShowCardMenu] = useState(null);
  
  // Filter cards based on search term and selected filters
  const filteredCards = cardsData.filter(card => {
    const matchesSearch = 
      card.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.employee.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'All' || card.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'All' || card.status === selectedStatus;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const handleNewCard = () => {
    setEditingCard(null);
    setIsModalOpen(true);
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setIsModalOpen(true);
    setShowCardMenu(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCard(null);
  };

  const toggleCardMenu = (cardId) => {
    if (showCardMenu === cardId) {
      setShowCardMenu(null);
    } else {
      setShowCardMenu(cardId);
    }
  };

  const calculateProgressPercentage = (balance, limit) => {
    return (balance / limit) * 100;
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedDepartment('All');
    setSelectedStatus('All');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Cards</h1>
        <button 
          className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center"
          onClick={handleNewCard}
        >
          <Plus size={16} className="mr-2" />
          New Card
        </button>
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
              placeholder="Search cards..."
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
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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
            
            <div className="md:col-span-2 flex justify-end mt-2">
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
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-sky-600 to-sky-400 p-4 relative">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white text-sm font-medium opacity-80">Card ID</p>
                  <p className="text-white font-semibold">{card.id}</p>
                </div>
                <div className="relative">
                  <button 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                    onClick={() => toggleCardMenu(card.id)}
                  >
                    <MoreHorizontal size={18} />
                  </button>
                  
                  {showCardMenu === card.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <button 
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          onClick={() => handleEditCard(card)}
                        >
                          <Edit size={16} className="mr-2" />
                          Edit Card
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                          <Eye size={16} className="mr-2" />
                          View Details
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                          {card.status === 'Active' ? (
                            <>
                              <Lock size={16} className="mr-2" />
                              Block Card
                            </>
                          ) : (
                            <>
                              <CreditCard size={16} className="mr-2" />
                              Activate Card
                            </>
                          )}
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                          <Trash size={16} className="mr-2" />
                          Delete Card
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-white font-bold text-lg">{card.cardNumber}</p>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-white text-xs opacity-80">EXPIRES</p>
                    <p className="text-white text-sm">{card.expiryDate}</p>
                  </div>
                  <div>
                    <p className="text-white text-xs opacity-80">TYPE</p>
                    <p className="text-white text-sm">{card.cardType}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold">
                  {card.employee.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{card.employee}</p>
                  <p className="text-sm text-gray-500">{card.department}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium text-gray-700">Balance</p>
                <div className="flex items-center">
                  <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full ${
                    card.status === 'Active' ? 'bg-green-100 text-green-800' : 
                    card.status === 'Blocked' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {card.status}
                  </span>
                </div>
              </div>
              
              <p className="text-lg font-bold text-gray-900">{formatCurrency(card.balance)}</p>
              <p className="text-sm text-gray-500">of {formatCurrency(card.limit)} limit</p>
              
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    calculateProgressPercentage(card.balance, card.limit) > 75 ? 'bg-red-500' :
                    calculateProgressPercentage(card.balance, card.limit) > 50 ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}
                  style={{ width: `${calculateProgressPercentage(card.balance, card.limit)}%` }}
                ></div>
              </div>
              
              <div className="mt-4 flex justify-between items-center text-sm">
                <p className="text-gray-500">Created on {formatDate(card.createdDate)}</p>
                <button className="text-sky-600 hover:text-sky-800 font-medium">Top Up</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* New Card Modal */}
      <CardModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        isEditing={!!editingCard}
        cardData={editingCard}
      />
    </div>
  );
};

export default CardComponent;