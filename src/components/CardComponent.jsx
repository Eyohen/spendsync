// import { useState } from 'react';
// import { Plus, MoreHorizontal, Search, Filter, Eye, Lock, CreditCard, Edit, Trash, AlertCircle } from 'lucide-react';

// // Sample cards data
// const cardsData = [
//   {
//     id: 'CARD001',
//     employee: 'Jane Doe',
//     department: 'Sales',
//     cardNumber: '•••• •••• •••• 4567',
//     balance: 150000,
//     limit: 200000,
//     status: 'Active',
//     expiryDate: '05/28',
//     cardType: 'Virtual',
//     createdDate: '2025-02-15'
//   },
//   {
//     id: 'CARD002',
//     employee: 'John Smith',
//     department: 'Operations',
//     cardNumber: '•••• •••• •••• 8901',
//     balance: 85000,
//     limit: 100000,
//     status: 'Active',
//     expiryDate: '07/27',
//     cardType: 'Virtual',
//     createdDate: '2025-01-20'
//   },
//   {
//     id: 'CARD003',
//     employee: 'Sarah Johnson',
//     department: 'Marketing',
//     cardNumber: '•••• •••• •••• 2345',
//     balance: 175000,
//     limit: 250000,
//     status: 'Active',
//     expiryDate: '09/26',
//     cardType: 'Virtual',
//     createdDate: '2024-12-10'
//   },
//   {
//     id: 'CARD004',
//     employee: 'Michael Brown',
//     department: 'IT',
//     cardNumber: '•••• •••• •••• 6789',
//     balance: 0,
//     limit: 150000,
//     status: 'Blocked',
//     expiryDate: '03/27',
//     cardType: 'Virtual',
//     createdDate: '2025-03-05'
//   },
//   {
//     id: 'CARD005',
//     employee: 'Emily Davis',
//     department: 'HR',
//     cardNumber: '•••• •••• •••• 1234',
//     balance: 45000,
//     limit: 50000,
//     status: 'Active',
//     expiryDate: '11/26',
//     cardType: 'Virtual',
//     createdDate: '2025-02-28'
//   },
//   {
//     id: 'CARD006',
//     employee: 'David Wilson',
//     department: 'Finance',
//     cardNumber: '•••• •••• •••• 5678',
//     balance: 120000,
//     limit: 200000,
//     status: 'Active',
//     expiryDate: '06/27',
//     cardType: 'Virtual',
//     createdDate: '2025-01-15'
//   }
// ];

// // Departments for filter
// const departments = [
//   'All',
//   'Sales',
//   'Operations',
//   'Marketing',
//   'IT',
//   'HR',
//   'Finance'
// ];

// // Statuses for filter
// const statuses = [
//   'All',
//   'Active',
//   'Blocked',
//   'Expired'
// ];

// const formatCurrency = (value) => {
//   return `₦${value.toLocaleString()}`;
// };

// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return date.toLocaleDateString('en-NG', { 
//     day: '2-digit', 
//     month: 'short', 
//     year: 'numeric' 
//   });
// };

// const CardModal = ({ isOpen, onClose, isEditing = false, cardData = null }) => {
//   if (!isOpen) return null;
  
//   const modalTitle = isEditing ? 'Edit Card' : 'Create New Card';
//   const buttonText = isEditing ? 'Update Card' : 'Create Card';
  
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-bold text-gray-800">{modalTitle}</h2>
//           <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
//             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
        
//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Employee</label>
//             <select 
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
//               defaultValue={cardData?.employee || ''}
//             >
//               <option value="" disabled>Select Employee</option>
//               <option>Jane Doe</option>
//               <option>John Smith</option>
//               <option>Sarah Johnson</option>
//               <option>Michael Brown</option>
//               <option>Emily Davis</option>
//               <option>David Wilson</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//             <select 
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
//               defaultValue={cardData?.department || ''}
//             >
//               <option value="" disabled>Select Department</option>
//               {departments.slice(1).map((department) => (
//                 <option key={department}>{department}</option>
//               ))}
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Card Type</label>
//             <select 
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
//               defaultValue={cardData?.cardType || 'Virtual'}
//             >
//               <option>Virtual</option>
//               <option>Physical</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Spending Limit</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500">₦</span>
//               </div>
//               <input
//                 type="number"
//                 className="pl-8 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
//                 placeholder="Enter amount"
//                 defaultValue={cardData?.limit || ''}
//               />
//             </div>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Card Status</label>
//             <select 
//               className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
//               defaultValue={cardData?.status || 'Active'}
//             >
//               <option>Active</option>
//               <option>Blocked</option>
//             </select>
//           </div>
          
//           <div className="flex justify-end space-x-2 pt-4">
//             <button 
//               type="button" 
//               className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//             <button 
//               type="button" 
//               className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
//             >
//               {buttonText}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const CardComponent = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDepartment, setSelectedDepartment] = useState('All');
//   const [selectedStatus, setSelectedStatus] = useState('All');
//   const [showFilters, setShowFilters] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingCard, setEditingCard] = useState(null);
//   const [activeCard, setActiveCard] = useState(null);
//   const [showCardMenu, setShowCardMenu] = useState(null);
  
//   // Filter cards based on search term and selected filters
//   const filteredCards = cardsData.filter(card => {
//     const matchesSearch = 
//       card.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       card.employee.toLowerCase().includes(searchTerm.toLowerCase());
    
//     const matchesDepartment = selectedDepartment === 'All' || card.department === selectedDepartment;
//     const matchesStatus = selectedStatus === 'All' || card.status === selectedStatus;
    
//     return matchesSearch && matchesDepartment && matchesStatus;
//   });

//   const handleNewCard = () => {
//     setEditingCard(null);
//     setIsModalOpen(true);
//   };

//   const handleEditCard = (card) => {
//     setEditingCard(card);
//     setIsModalOpen(true);
//     setShowCardMenu(null);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingCard(null);
//   };

//   const toggleCardMenu = (cardId) => {
//     if (showCardMenu === cardId) {
//       setShowCardMenu(null);
//     } else {
//       setShowCardMenu(cardId);
//     }
//   };

//   const calculateProgressPercentage = (balance, limit) => {
//     return (balance / limit) * 100;
//   };

//   // Reset filters
//   const resetFilters = () => {
//     setSelectedDepartment('All');
//     setSelectedStatus('All');
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-gray-800">Cards</h1>
//         <button 
//           className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center"
//           onClick={handleNewCard}
//         >
//           <Plus size={16} className="mr-2" />
//           New Card
//         </button>
//       </div>
      
//       {/* Search and Filter */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
//         <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
//           <div className="flex-1 relative mb-4 md:mb-0">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search size={18} className="text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search cards..."
//               className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
          
//           <button
//             className="flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
//             onClick={() => setShowFilters(!showFilters)}
//           >
//             <Filter size={16} className="mr-2" />
//             {showFilters ? 'Hide Filters' : 'Show Filters'}
//           </button>
//         </div>
        
//         {showFilters && (
//           <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//               <select
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//                 value={selectedDepartment}
//                 onChange={(e) => setSelectedDepartment(e.target.value)}
//               >
//                 {departments.map((department) => (
//                   <option key={department} value={department}>{department}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//               <select
//                 className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//                 value={selectedStatus}
//                 onChange={(e) => setSelectedStatus(e.target.value)}
//               >
//                 {statuses.map((status) => (
//                   <option key={status} value={status}>{status}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="md:col-span-2 flex justify-end mt-2">
//               <button
//                 className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
//                 onClick={resetFilters}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
      
//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCards.map((card) => (
//           <div key={card.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-gradient-to-r from-sky-600 to-sky-400 p-4 relative">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="text-white text-sm font-medium opacity-80">Card ID</p>
//                   <p className="text-white font-semibold">{card.id}</p>
//                 </div>
//                 <div className="relative">
//                   <button 
//                     className="w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30"
//                     onClick={() => toggleCardMenu(card.id)}
//                   >
//                     <MoreHorizontal size={18} />
//                   </button>
                  
//                   {showCardMenu === card.id && (
//                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
//                       <div className="py-1">
//                         <button 
//                           className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                           onClick={() => handleEditCard(card)}
//                         >
//                           <Edit size={16} className="mr-2" />
//                           Edit Card
//                         </button>
//                         <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
//                           <Eye size={16} className="mr-2" />
//                           View Details
//                         </button>
//                         <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
//                           {card.status === 'Active' ? (
//                             <>
//                               <Lock size={16} className="mr-2" />
//                               Block Card
//                             </>
//                           ) : (
//                             <>
//                               <CreditCard size={16} className="mr-2" />
//                               Activate Card
//                             </>
//                           )}
//                         </button>
//                         <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
//                           <Trash size={16} className="mr-2" />
//                           Delete Card
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
              
//               <div className="mt-4">
//                 <p className="text-white font-bold text-lg">{card.cardNumber}</p>
//                 <div className="flex justify-between mt-2">
//                   <div>
//                     <p className="text-white text-xs opacity-80">EXPIRES</p>
//                     <p className="text-white text-sm">{card.expiryDate}</p>
//                   </div>
//                   <div>
//                     <p className="text-white text-xs opacity-80">TYPE</p>
//                     <p className="text-white text-sm">{card.cardType}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="p-4 border-b border-gray-100">
//               <div className="flex items-center">
//                 <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold">
//                   {card.employee.charAt(0)}
//                 </div>
//                 <div className="ml-3">
//                   <p className="font-medium text-gray-900">{card.employee}</p>
//                   <p className="text-sm text-gray-500">{card.department}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="p-4">
//               <div className="flex justify-between items-center mb-1">
//                 <p className="text-sm font-medium text-gray-700">Balance</p>
//                 <div className="flex items-center">
//                   <span className={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full ${
//                     card.status === 'Active' ? 'bg-green-100 text-green-800' : 
//                     card.status === 'Blocked' ? 'bg-red-100 text-red-800' : 
//                     'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     {card.status}
//                   </span>
//                 </div>
//               </div>
              
//               <p className="text-lg font-bold text-gray-900">{formatCurrency(card.balance)}</p>
//               <p className="text-sm text-gray-500">of {formatCurrency(card.limit)} limit</p>
              
//               <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
//                 <div 
//                   className={`h-2 rounded-full ${
//                     calculateProgressPercentage(card.balance, card.limit) > 75 ? 'bg-red-500' :
//                     calculateProgressPercentage(card.balance, card.limit) > 50 ? 'bg-yellow-500' :
//                     'bg-green-500'
//                   }`}
//                   style={{ width: `${calculateProgressPercentage(card.balance, card.limit)}%` }}
//                 ></div>
//               </div>
              
//               <div className="mt-4 flex justify-between items-center text-sm">
//                 <p className="text-gray-500">Created on {formatDate(card.createdDate)}</p>
//                 <button className="text-sky-600 hover:text-sky-800 font-medium">Top Up</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       {/* New Card Modal */}
//       <CardModal 
//         isOpen={isModalOpen} 
//         onClose={closeModal}
//         isEditing={!!editingCard}
//         cardData={editingCard}
//       />
//     </div>
//   );
// };

// export default CardComponent;






import { useState } from 'react';
import { 
  Plus, 
  MoreHorizontal, 
  Search, 
  Filter, 
  Eye, 
  Lock, 
  CreditCard, 
  Edit, 
  Trash, 
  AlertCircle,
  ArrowUpCircle,
  History,
  ChevronRight,
  X,
  Check,
  CheckCircle2
} from 'lucide-react';

// Sample cards data
const cardsData = [
  {
    id: 'CARD001',
    employee: 'Jane Doe',
    department: 'Sales',
    cardNumber: '4567',
    balance: 150000,
    limit: 200000,
    status: 'Active',
    expiryDate: '05/28',
    cardType: 'Virtual',
    createdDate: '2025-02-15',
    cardColor: 'gradient-blue',
    cardBrand: 'Visa'
  },
  {
    id: 'CARD002',
    employee: 'John Smith',
    department: 'Operations',
    cardNumber: '8901',
    balance: 85000,
    limit: 100000,
    status: 'Active',
    expiryDate: '07/27',
    cardType: 'Virtual',
    createdDate: '2025-01-20',
    cardColor: 'gradient-purple',
    cardBrand: 'Mastercard'
  },
  {
    id: 'CARD003',
    employee: 'Sarah Johnson',
    department: 'Marketing',
    cardNumber: '2345',
    balance: 175000,
    limit: 250000,
    status: 'Active',
    expiryDate: '09/26',
    cardType: 'Virtual',
    createdDate: '2024-12-10',
    cardColor: 'gradient-green',
    cardBrand: 'Visa'
  },
  {
    id: 'CARD004',
    employee: 'Michael Brown',
    department: 'IT',
    cardNumber: '6789',
    balance: 0,
    limit: 150000,
    status: 'Blocked',
    expiryDate: '03/27',
    cardType: 'Virtual',
    createdDate: '2025-03-05',
    cardColor: 'gradient-red',
    cardBrand: 'Mastercard'
  },
  {
    id: 'CARD005',
    employee: 'Emily Davis',
    department: 'HR',
    cardNumber: '1234',
    balance: 45000,
    limit: 50000,
    status: 'Active',
    expiryDate: '11/26',
    cardType: 'Virtual',
    createdDate: '2025-02-28',
    cardColor: 'gradient-orange',
    cardBrand: 'Visa'
  },
  {
    id: 'CARD006',
    employee: 'David Wilson',
    department: 'Finance',
    cardNumber: '5678',
    balance: 120000,
    limit: 200000,
    status: 'Active',
    expiryDate: '06/27',
    cardType: 'Virtual',
    createdDate: '2025-01-15',
    cardColor: 'gradient-teal',
    cardBrand: 'Mastercard'
  }
];

// Sample card history data
const cardHistoryData = [
  {
    id: 1,
    cardId: 'CARD001',
    type: 'transaction',
    amount: 15000,
    description: 'Hotel Booking',
    merchant: 'Hilton Hotels',
    date: '2025-05-01T10:30:00',
    status: 'Approved'
  },
  {
    id: 2,
    cardId: 'CARD001',
    type: 'transaction',
    amount: 7500,
    description: 'Fuel Purchase',
    merchant: 'Total Filling Station',
    date: '2025-04-28T15:45:00',
    status: 'Approved'
  },
  {
    id: 3,
    cardId: 'CARD001',
    type: 'top-up',
    amount: 50000,
    description: 'Card Top-up',
    date: '2025-04-25T09:15:00',
    status: 'Completed'
  },
  {
    id: 4,
    cardId: 'CARD001',
    type: 'transaction',
    amount: 22000,
    description: 'Office Supplies',
    merchant: 'OfficeMax',
    date: '2025-04-20T14:20:00',
    status: 'Approved'
  },
  {
    id: 5,
    cardId: 'CARD001',
    type: 'limit-change',
    amount: 0,
    oldLimit: 150000,
    newLimit: 200000,
    description: 'Spending Limit Increase',
    date: '2025-04-15T11:10:00',
    status: 'Completed'
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

const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString('en-NG', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Card Brand Logo Component
const CardBrandLogo = ({ brand }) => {
  if (brand === 'Visa') {
    return (
      <div className="text-white font-bold italic text-xl">VISA</div>
    );
  } else if (brand === 'Mastercard') {
    return (
      <div className="flex items-center">
        <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
        <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-4"></div>
      </div>
    );
  }
  return null;
};

// Card Modal for adding/editing cards
const CardModal = ({ isOpen, onClose, isEditing = false, cardData = null }) => {
  if (!isOpen) return null;
  
  const [employee, setEmployee] = useState(cardData?.employee || '');
  const [department, setDepartment] = useState(cardData?.department || '');
  const [cardType, setCardType] = useState(cardData?.cardType || 'Virtual');
  const [limit, setLimit] = useState(cardData?.limit || '');
  const [status, setStatus] = useState(cardData?.status || 'Active');
  const [cardColor, setCardColor] = useState(cardData?.cardColor || 'gradient-blue');
  const [cardBrand, setCardBrand] = useState(cardData?.cardBrand || 'Visa');
  
  const modalTitle = isEditing ? 'Edit Card' : 'Create New Card';
  const buttonText = isEditing ? 'Update Card' : 'Create Card';
  
  // Card color options
  const colorOptions = [
    { id: 'gradient-blue', name: 'Blue', classes: 'from-sky-600 to-sky-400' },
    { id: 'gradient-purple', name: 'Purple', classes: 'from-purple-600 to-purple-400' },
    { id: 'gradient-green', name: 'Green', classes: 'from-emerald-600 to-emerald-400' },
    { id: 'gradient-red', name: 'Red', classes: 'from-rose-600 to-rose-400' },
    { id: 'gradient-orange', name: 'Orange', classes: 'from-orange-600 to-orange-400' },
    { id: 'gradient-teal', name: 'Teal', classes: 'from-teal-600 to-teal-400' }
  ];
  
  // Get card color classes based on id
  const getCardColorClasses = (colorId) => {
    const color = colorOptions.find(color => color.id === colorId);
    return color ? color.classes : 'from-sky-600 to-sky-400';
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{modalTitle}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Card Preview */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Card Preview</label>
            <div className={`bg-gradient-to-r ${getCardColorClasses(cardColor)} p-5 rounded-xl shadow-md`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white text-sm font-medium opacity-80">SpendSync</p>
                  <p className="text-white font-bold mt-1">CORPORATE CARD</p>
                </div>
                <CardBrandLogo brand={cardBrand} />
              </div>
              
              <div className="mt-10 text-white">
                <p className="text-xs mb-1 opacity-80">CARD NUMBER</p>
                <p className="font-mono text-lg font-bold mb-6">•••• •••• •••• {cardData?.cardNumber || '0000'}</p>
                
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs opacity-80">CARDHOLDER</p>
                    <p className="font-medium">{employee || 'Employee Name'}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-80">EXPIRES</p>
                    <p className="font-medium">{cardData?.expiryDate || '00/00'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employee</label>
              <select 
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
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
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="" disabled>Select Department</option>
                {departments.slice(1).map((dept) => (
                  <option key={dept}>{dept}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Brand</label>
              <select 
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                value={cardBrand}
                onChange={(e) => setCardBrand(e.target.value)}
              >
                <option>Visa</option>
                <option>Mastercard</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Type</label>
              <select 
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
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
                  value={limit}
                  onChange={(e) => setLimit(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Status</label>
              <select 
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Active</option>
                <option>Blocked</option>
              </select>
            </div>
          </div>
          
          {/* Card Color Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Card Color</label>
            <div className="grid grid-cols-3 gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.id}
                  className={`h-12 rounded-lg bg-gradient-to-r ${color.classes} flex justify-center items-center ${
                    cardColor === color.id ? 'ring-2 ring-offset-2 ring-sky-600' : ''
                  }`}
                  onClick={() => setCardColor(color.id)}
                >
                  {cardColor === color.id && (
                    <CheckCircle2 size={18} className="text-white" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
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
        </div>
      </div>
    </div>
  );
};

// Top-Up Modal Component
const TopUpModal = ({ isOpen, onClose, cardData }) => {
  if (!isOpen || !cardData) return null;
  
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('Bank Transfer');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleTopUp = () => {
    if (!amount) return;
    
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Reset after success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setAmount('');
      }, 2000);
    }, 1500);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Top Up Card</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose} disabled={isProcessing}>
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {!isSuccess ? (
            <>
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold">
                    {cardData.employee.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{cardData.employee}</p>
                    <p className="text-sm text-gray-500">{cardData.cardNumber}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Current Balance</span>
                    <span className="font-bold text-gray-900">{formatCurrency(cardData.balance)}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Available Limit</span>
                    <span className="font-medium text-gray-900">{formatCurrency(cardData.limit)}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Top-up Amount</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">₦</span>
                    </div>
                    <input
                      type="number"
                      className="pl-8 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      disabled={isProcessing}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    disabled={isProcessing}
                  >
                    <option>Bank Transfer</option>
                    <option>Paystack</option>
                    <option>Flutterwave</option>
                  </select>
                </div>
                
                <button
                  className={`w-full py-3 mt-4 rounded-lg flex items-center justify-center ${
                    isProcessing ? 'bg-gray-400' : 'bg-sky-600 hover:bg-sky-700'
                  } text-white font-medium`}
                  onClick={handleTopUp}
                  disabled={isProcessing || !amount}
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    'Top Up Card'
                  )}
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Top-Up Successful!</h3>
              <p className="text-center text-gray-600">
                You have successfully topped up {formatCurrency(Number(amount))} to {cardData.employee}'s card.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Card History Modal Component
const CardHistoryModal = ({ isOpen, onClose, cardData }) => {
  if (!isOpen || !cardData) return null;
  
  // Filter history for the selected card
  const cardHistory = cardHistoryData.filter(item => item.cardId === cardData.id);
  
  // Get icon for history item
  const getHistoryIcon = (type) => {
    switch (type) {
      case 'transaction':
        return <CreditCard size={18} className="text-sky-600" />;
      case 'top-up':
        return <ArrowUpCircle size={18} className="text-green-600" />;
      case 'limit-change':
        return <Edit size={18} className="text-orange-600" />;
      default:
        return <History size={18} className="text-gray-600" />;
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Card History</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 flex-grow overflow-auto">
          <div className="flex items-center mb-6">
            <div className={`w-12 h-8 rounded-md bg-gradient-to-r ${
              cardData.cardColor === 'gradient-blue' ? 'from-sky-600 to-sky-400' :
              cardData.cardColor === 'gradient-purple' ? 'from-purple-600 to-purple-400' :
              cardData.cardColor === 'gradient-green' ? 'from-emerald-600 to-emerald-400' :
              cardData.cardColor === 'gradient-red' ? 'from-rose-600 to-rose-400' :
              cardData.cardColor === 'gradient-orange' ? 'from-orange-600 to-orange-400' :
              'from-teal-600 to-teal-400'
            } mr-3`}></div>
            <div>
              <p className="font-medium text-gray-900">{cardData.employee}'s Card</p>
              <p className="text-sm text-gray-500">Card ending in {cardData.cardNumber}</p>
            </div>
          </div>
          
          {cardHistory.length > 0 ? (
            <div className="space-y-4">
              {cardHistory.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      {getHistoryIcon(item.type)}
                    </div>
                    <div className="ml-3 flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">{item.description}</p>
                          {item.merchant && (
                            <p className="text-sm text-gray-600">{item.merchant}</p>
                          )}
                        </div>
                        <div className="text-right">
                          {item.amount > 0 && (
                            <p className={`font-bold ${item.type === 'transaction' ? 'text-red-600' : 'text-green-600'}`}>
                              {item.type === 'transaction' ? '-' : '+'}{formatCurrency(item.amount)}
                            </p>
                          )}
                          {item.type === 'limit-change' && (
                            <p className="text-sm text-gray-600">
                              {formatCurrency(item.oldLimit)} → {formatCurrency(item.newLimit)}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-gray-500">{formatDateTime(item.date)}</p>
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                          item.status === 'Approved' || item.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
                <History size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No History Found</h3>
              <p className="text-gray-500">This card doesn't have any activity yet.</p>
            </div>
          )}
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200">
          <button 
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
            onClick={onClose}
          >
            Close
          </button>
        </div>
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
  const [showTopUpModal, setShowTopUpModal] = useState(false);
  const [topUpCard, setTopUpCard] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [historyCard, setHistoryCard] = useState(null);
  
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

  const handleTopUp = (card) => {
    setTopUpCard(card);
    setShowTopUpModal(true);
    setShowCardMenu(null);
  };

  const handleViewHistory = (card) => {
    setHistoryCard(card);
    setShowHistoryModal(true);
    setShowCardMenu(null);
  };

  const calculateProgressPercentage = (balance, limit) => {
    return (balance / limit) * 100;
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedDepartment('All');
    setSelectedStatus('All');
  };

  // Get card color classes for gradient background
  const getCardColorClasses = (colorId) => {
    switch (colorId) {
      case 'gradient-blue':
        return 'from-sky-600 to-sky-400';
      case 'gradient-purple':
        return 'from-purple-600 to-purple-400';
      case 'gradient-green':
        return 'from-emerald-600 to-emerald-400';
      case 'gradient-red':
        return 'from-rose-600 to-rose-400';
      case 'gradient-orange':
        return 'from-orange-600 to-orange-400';
      case 'gradient-teal':
        return 'from-teal-600 to-teal-400';
      default:
        return 'from-sky-600 to-sky-400';
    }
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
          <div 
            key={card.id} 
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
          >
            {/* Card Front */}
            <div className={`bg-gradient-to-r ${getCardColorClasses(card.cardColor)} p-5 relative`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white text-sm font-medium opacity-80">SpendSync</p>
                  <p className="text-white font-bold mt-1">CORPORATE CARD</p>
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
                        <button 
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          onClick={() => handleTopUp(card)}
                        >
                          <ArrowUpCircle size={16} className="mr-2" />
                          Top Up Card
                        </button>
                        <button 
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          onClick={() => handleViewHistory(card)}
                        >
                          <History size={16} className="mr-2" />
                          View History
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
              
              <div className="absolute right-5 top-14">
                <CardBrandLogo brand={card.cardBrand} />
              </div>
              
              <div className="mt-10 text-white">
                <p className="text-xs mb-1 opacity-80">CARD NUMBER</p>
                <p className="font-mono text-lg font-bold mb-6">•••• •••• •••• {card.cardNumber}</p>
                
                <div className="flex justify-between">
                  <div>
                    <p className="text-white text-xs opacity-80">CARDHOLDER</p>
                    <p className="text-white font-medium">{card.employee}</p>
                  </div>
                  <div>
                    <p className="text-white text-xs opacity-80">EXPIRES</p>
                    <p className="text-white font-medium">{card.expiryDate}</p>
                  </div>
                </div>
              </div>
              
              {/* Status Badge */}
              <div className="absolute top-5 right-16">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  card.status === 'Active' ? 'bg-green-500 bg-opacity-30 text-white' : 
                  card.status === 'Blocked' ? 'bg-red-500 bg-opacity-30 text-white' : 
                  'bg-yellow-500 bg-opacity-30 text-white'
                }`}>
                  {card.status}
                </span>
              </div>
            </div>
            
            {/* Card Details */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">Department</p>
                  <p className="font-medium text-gray-900">{card.department}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-500">Card ID</p>
                  <p className="font-medium text-gray-900">{card.id}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium text-gray-700">Balance</p>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(card.balance)}</p>
                </div>
                <p className="text-sm text-gray-500 mb-2">of {formatCurrency(card.limit)} limit</p>
                
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      calculateProgressPercentage(card.balance, card.limit) > 75 ? 'bg-red-500' :
                      calculateProgressPercentage(card.balance, card.limit) > 50 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${calculateProgressPercentage(card.balance, card.limit)}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4 border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-500">Created {formatDate(card.createdDate)}</p>
                <div className="flex space-x-2">
                  <button 
                    className="px-2 py-1 bg-sky-100 text-sky-600 rounded hover:bg-sky-200 text-sm font-medium"
                    onClick={() => handleViewHistory(card)}
                  >
                    History
                  </button>
                  <button 
                    className="px-2 py-1 bg-green-100 text-green-600 rounded hover:bg-green-200 text-sm font-medium"
                    onClick={() => handleTopUp(card)}
                  >
                    Top Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* No Cards Found */}
      {filteredCards.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-10 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
            <CreditCard size={24} />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No Cards Found</h3>
          <p className="text-gray-500 mb-6">There are no cards matching your search criteria.</p>
          <button 
            className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 inline-flex items-center"
            onClick={handleNewCard}
          >
            <Plus size={16} className="mr-2" />
            Create New Card
          </button>
        </div>
      )}
      
      {/* New/Edit Card Modal */}
      <CardModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        isEditing={!!editingCard}
        cardData={editingCard}
      />
      
      {/* Top Up Modal */}
      <TopUpModal
        isOpen={showTopUpModal}
        onClose={() => setShowTopUpModal(false)}
        cardData={topUpCard}
      />
      
      {/* Card History Modal */}
      <CardHistoryModal 
        isOpen={showHistoryModal}
        onClose={() => setShowHistoryModal(false)}
        cardData={historyCard}
      />
    </div>
  );
};

export default CardComponent;