// import { useState, useEffect } from 'react';
// import { 
//   CreditCard, 
//   Clock, 
//   DollarSign, 
//   Upload, 
//   ChevronDown, 
//   CheckCircle, 
//   AlertCircle, 
//   LogOut, 
//   User,
//   Filter
// } from 'lucide-react';
// import logo from '../assets/logo.png'; 

// // Sample data - would come from your API in production
// const MOCK_USER = {
//   name: "Jane Okonkwo",
//   email: "jane.o@alaralogistics.com",
//   department: "Sales",
//   role: "Sales Executive",
//   profileImage: "/api/placeholder/100/100"
// };

// const MOCK_CARD = {
//   cardNumber: "4512 •••• •••• 7632",
//   expiryDate: "12/28",
//   cardName: "Jane Okonkwo",
//   balance: 250000, // in kobo (₦2,500.00)
//   limit: 500000, // in kobo (₦5,000.00)
//   status: "active" // active, blocked, expired
// };

// const MOCK_TRANSACTIONS = [
//   {
//     id: "txn-1",
//     description: "Fuel Purchase - Mobil Filling Station",
//     amount: 1500000, // in kobo (₦15,000.00)
//     type: "debit",
//     category: "Transport",
//     date: "2025-05-06T14:22:31",
//     status: "completed",
//     receiptUploaded: true
//   },
//   {
//     id: "txn-2",
//     description: "Office Supplies - Spar Supermarket",
//     amount: 3250000, // in kobo (₦32,500.00)
//     type: "debit",
//     category: "Office Supplies",
//     date: "2025-05-05T10:18:45",
//     status: "completed",
//     receiptUploaded: true
//   },
//   {
//     id: "txn-3",
//     description: "Client Meeting - Cafe Neo",
//     amount: 850000, // in kobo (₦8,500.00)
//     type: "debit",
//     category: "Entertainment",
//     date: "2025-05-04T16:35:22",
//     status: "completed",
//     receiptUploaded: false
//   },
//   {
//     id: "txn-4",
//     description: "Top-up from Finance",
//     amount: 10000000, // in kobo (₦100,000.00)
//     type: "credit",
//     category: "Top-up",
//     date: "2025-05-03T09:12:55",
//     status: "completed",
//     receiptUploaded: false
//   }
// ];

// // Helper function to format currency in Naira
// const formatNaira = (amount) => {
//   // Convert from kobo to Naira
//   const naira = amount / 100;
//   return new Intl.NumberFormat('en-NG', {
//     style: 'currency',
//     currency: 'NGN'
//   }).format(naira);
// };

// // Helper function to format date
// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return new Intl.DateTimeFormat('en-NG', {
//     dateStyle: 'medium',
//     timeStyle: 'short'
//   }).format(date);
// };

// const MemberDashboard = () => {
//   const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('card');
  
//   // In a real app, you would fetch this data from your API
//   useEffect(() => {
//     // Simulate API call to get user data, card info, and transactions
//     // setUserData(fetchedUserData);
//     // setCardData(fetchedCardData);
//     // setTransactions(fetchedTransactions);
//   }, []);
  
//   const handleLogout = () => {
//     // Clear authentication data and redirect to login
//     localStorage.removeItem('memberToken');
//     localStorage.removeItem('memberInfo');
//     window.location.href = '/member/login';
//   };
  
//   const handleUploadReceipt = (transactionId) => {
//     // In a real app, you would open a file dialog and upload to your API
//     alert(`Upload receipt for transaction ${transactionId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <img 
//               src={logo}
//               alt="Spend Sync Logo" 
//               className="h-10 w-auto"
//             />
//             <h1 className="ml-3 text-xl font-bold text-gray-900">Spend Sync</h1>
//           </div>
//           <div className="flex items-center">
//             <div className="mr-4 text-right">
//               <p className="text-sm font-medium text-gray-900">{MOCK_USER.name}</p>
//               <p className="text-xs text-gray-500">{MOCK_USER.department} - {MOCK_USER.role}</p>
//             </div>
//             <img 
//               src={MOCK_USER.profileImage} 
//               alt="Profile" 
//               className="h-10 w-10 rounded-full"
//             />
//             <button 
//               onClick={handleLogout}
//               className="ml-4 p-2 text-gray-500 hover:text-gray-700"
//             >
//               <LogOut size={20} />
//             </button>
//           </div>
//         </div>
//       </header>
      
//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Tabs */}
//         <div className="border-b border-gray-200 mb-6">
//           <nav className="-mb-px flex space-x-8">
//             <button
//               onClick={() => setActiveTab('card')}
//               className={`pb-4 px-1 border-b-2 font-medium text-sm ${
//                 activeTab === 'card'
//                   ? 'border-indigo-500 text-indigo-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               <span className="flex items-center">
//                 <CreditCard size={16} className="mr-2" />
//                 My Virtual Card
//               </span>
//             </button>
//             <button
//               onClick={() => setActiveTab('transactions')}
//               className={`pb-4 px-1 border-b-2 font-medium text-sm ${
//                 activeTab === 'transactions'
//                   ? 'border-indigo-500 text-indigo-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               <span className="flex items-center">
//                 <Clock size={16} className="mr-2" />
//                 Transaction History
//               </span>
//             </button>
//             <button
//               onClick={() => setActiveTab('profile')}
//               className={`pb-4 px-1 border-b-2 font-medium text-sm ${
//                 activeTab === 'profile'
//                   ? 'border-indigo-500 text-indigo-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//               }`}
//             >
//               <span className="flex items-center">
//                 <User size={16} className="mr-2" />
//                 My Profile
//               </span>
//             </button>
//           </nav>
//         </div>
        
//         {/* Tab Content */}
//         {activeTab === 'card' && (
//           <div>
//             <h2 className="text-lg font-medium text-gray-900 mb-4">Virtual Card Details</h2>
            
//             {/* Card Container */}
//             <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 shadow-lg max-w-md mb-6">
//               <div className="flex justify-between items-start mb-8">
//                 <div>
//                   <h3 className="text-white text-lg font-medium mb-1">Spend Sync</h3>
//                   <p className="text-indigo-100 text-sm">Alara Logistics</p>
//                 </div>
//                 <div className="bg-white/20 rounded-full p-2">
//                   <CreditCard className="text-white h-6 w-6" />
//                 </div>
//               </div>
              
//               <p className="text-white text-lg font-mono mb-4">{MOCK_CARD.cardNumber}</p>
              
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="text-indigo-100 text-xs uppercase">Card Holder</p>
//                   <p className="text-white">{MOCK_CARD.cardName}</p>
//                 </div>
//                 <div>
//                   <p className="text-indigo-100 text-xs uppercase">Expires</p>
//                   <p className="text-white">{MOCK_CARD.expiryDate}</p>
//                 </div>
//                 <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
//                   <span className="text-white font-bold">VS</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Card Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <div className="flex items-center mb-2">
//                   <DollarSign className="text-indigo-500 mr-2" size={20} />
//                   <h3 className="text-gray-700 font-medium">Current Balance</h3>
//                 </div>
//                 <p className="text-2xl font-bold text-gray-900">{formatNaira(MOCK_CARD.balance)}</p>
//                 <p className="text-sm text-gray-500">
//                   Available to spend on your virtual card
//                 </p>
//               </div>
              
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <div className="flex items-center mb-2">
//                   <DollarSign className="text-indigo-500 mr-2" size={20} />
//                   <h3 className="text-gray-700 font-medium">Monthly Limit</h3>
//                 </div>
//                 <p className="text-2xl font-bold text-gray-900">{formatNaira(MOCK_CARD.limit)}</p>
//                 <p className="text-sm text-gray-500">
//                   Your spending limit per month
//                 </p>
//               </div>
//             </div>
            
//             {/* Recent Activity on Card Tab */}
//             <div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Recent Activity</h3>
//               <div className="bg-white rounded-lg shadow overflow-hidden">
//                 <ul className="divide-y divide-gray-200">
//                   {transactions.slice(0, 3).map((transaction) => (
//                     <li key={transaction.id} className="p-4 hover:bg-gray-50">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                           <div className={`p-2 rounded-full ${
//                             transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
//                           }`}>
//                             {transaction.type === 'credit' ? (
//                               <DollarSign size={16} className="text-green-600" />
//                             ) : (
//                               <DollarSign size={16} className="text-red-600" />
//                             )}
//                           </div>
//                           <div className="ml-3">
//                             <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
//                             <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <p className={`text-sm font-medium ${
//                             transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
//                           }`}>
//                             {transaction.type === 'credit' ? '+' : '-'}{formatNaira(transaction.amount)}
//                           </p>
//                           <p className="text-xs text-gray-500">{transaction.category}</p>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="bg-gray-50 px-4 py-3 text-center">
//                   <button 
//                     onClick={() => setActiveTab('transactions')}
//                     className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
//                   >
//                     View all transactions
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {activeTab === 'transactions' && (
//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-medium text-gray-900">Transaction History</h2>
              
//               {/* Filter Button */}
//               <div className="relative">
//                 <button 
//                   onClick={() => setFilterOpen(!filterOpen)}
//                   className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//                 >
//                   <Filter size={16} className="mr-2" />
//                   Filter
//                   <ChevronDown size={16} className="ml-2" />
//                 </button>
                
//                 {filterOpen && (
//                   <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                     <div className="py-1">
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         All Transactions
//                       </a>
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         Pending Receipts
//                       </a>
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         Last 7 Days
//                       </a>
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         Last 30 Days
//                       </a>
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         By Category
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
            
//             {/* Transactions Table */}
//             <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Transaction
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Date
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Category
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Amount
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Receipt
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {transactions.map((transaction) => (
//                     <tr key={transaction.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-500">{formatDate(transaction.date)}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-500">{transaction.category}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className={`text-sm font-medium ${
//                           transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
//                         }`}>
//                           {transaction.type === 'credit' ? '+' : '-'}{formatNaira(transaction.amount)}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                           {transaction.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {transaction.receiptUploaded ? (
//                           <span className="inline-flex items-center text-green-600">
//                             <CheckCircle size={16} className="mr-1" />
//                             Uploaded
//                           </span>
//                         ) : (
//                           <button 
//                             onClick={() => handleUploadReceipt(transaction.id)}
//                             className="inline-flex items-center text-indigo-600 hover:text-indigo-900"
//                           >
//                             <Upload size={16} className="mr-1" />
//                             Upload
//                           </button>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
              
//               {/* Pagination */}
//               <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
//                 <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//                   <div>
//                     <p className="text-sm text-gray-700">
//                       Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{' '}
//                       <span className="font-medium">4</span> results
//                     </p>
//                   </div>
//                   <div>
//                     <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                       <a
//                         href="#"
//                         className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                       >
//                         <span className="sr-only">Previous</span>
//                         <ChevronDown className="h-5 w-5 transform rotate-90" />
//                       </a>
//                       <a
//                         href="#"
//                         className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//                       >
//                         1
//                       </a>
//                       <a
//                         href="#"
//                         className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                       >
//                         <span className="sr-only">Next</span>
//                         <ChevronDown className="h-5 w-5 transform -rotate-90" />
//                       </a>
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {activeTab === 'profile' && (
//           <div>
//             <h2 className="text-lg font-medium text-gray-900 mb-4">My Profile</h2>
            
//             <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//               <div className="px-4 py-5 sm:px-6 flex items-center">
//                 <img 
//                   src={MOCK_USER.profileImage} 
//                   alt="Profile" 
//                   className="h-16 w-16 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg leading-6 font-medium text-gray-900">
//                     {MOCK_USER.name}
//                   </h3>
//                   <p className="mt-1 max-w-2xl text-sm text-gray-500">
//                     {MOCK_USER.department} • {MOCK_USER.role}
//                   </p>
//                 </div>
//               </div>
//               <div className="border-t border-gray-200">
//                 <dl>
//                   <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt className="text-sm font-medium text-gray-500">Full name</dt>
//                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                       {MOCK_USER.name}
//                     </dd>
//                   </div>
//                   <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt className="text-sm font-medium text-gray-500">Email address</dt>
//                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                       {MOCK_USER.email}
//                     </dd>
//                   </div>
//                   <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt className="text-sm font-medium text-gray-500">Department</dt>
//                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                       {MOCK_USER.department}
//                     </dd>
//                   </div>
//                   <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt className="text-sm font-medium text-gray-500">Role</dt>
//                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                       {MOCK_USER.role}
//                     </dd>
//                   </div>
//                   <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt className="text-sm font-medium text-gray-500">Card Status</dt>
//                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                       <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                         Active
//                       </span>
//                     </dd>
//                   </div>
//                   <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt className="text-sm font-medium text-gray-500">Password</dt>
//                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                       <button className="text-indigo-600 hover:text-indigo-900">
//                         Change password
//                       </button>
//                     </dd>
//                   </div>
//                   <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                     <dt className="text-sm font-medium text-gray-500">Support</dt>
//                     <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                       <p>If you're experiencing any issues with your virtual card or need assistance, please contact:</p>
//                       <p className="mt-2">
//                         <strong>Finance Manager:</strong> finance@alaralogistics.com
//                       </p>
//                       <p>
//                         <strong>Support Team:</strong> support@spendsync.com
//                       </p>
//                     </dd>
//                   </div>
//                 </dl>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
      
//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-200 mt-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="md:flex md:items-center md:justify-between">
//             <div className="flex justify-center md:order-2">
//               <p className="text-center text-sm text-gray-500">
//                 &copy; 2025 Spend Sync. All rights reserved.
//               </p>
//             </div>
//             <div className="mt-4 md:mt-0 md:order-1">
//               <p className="text-center text-sm text-gray-500">
//                 For help, contact support@spendsync.com
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default MemberDashboard;




import { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Clock, 
  DollarSign, 
  Upload, 
  ChevronDown, 
  CheckCircle, 
  AlertCircle, 
  LogOut, 
  User,
  Filter,
  Receipt
} from 'lucide-react';
import logo from '../assets/logo.png'; 
import ReceiptModal from './ReceiptModal';
import ReimbursementTab from './ReimbursementTab';

// Sample data - would come from your API in production
const MOCK_USER = {
  name: "Jane Okonkwo",
  email: "jane.o@alaralogistics.com",
  department: "Sales",
  role: "Sales Executive",
  profileImage: "/api/placeholder/100/100"
};

const MOCK_CARD = {
  cardNumber: "4512 •••• •••• 7632",
  expiryDate: "12/28",
  cardName: "Jane Okonkwo",
  balance: 250000, // in kobo (₦2,500.00)
  limit: 500000, // in kobo (₦5,000.00)
  status: "active" // active, blocked, expired
};

const MOCK_TRANSACTIONS = [
  {
    id: "txn-1",
    description: "Fuel Purchase - Mobil Filling Station",
    amount: 1500000, // in kobo (₦15,000.00)
    type: "debit",
    category: "Transport",
    date: "2025-05-06T14:22:31",
    status: "completed",
    receiptUploaded: true
  },
  {
    id: "txn-2",
    description: "Office Supplies - Spar Supermarket",
    amount: 3250000, // in kobo (₦32,500.00)
    type: "debit",
    category: "Office Supplies",
    date: "2025-05-05T10:18:45",
    status: "completed",
    receiptUploaded: true
  },
  {
    id: "txn-3",
    description: "Client Meeting - Cafe Neo",
    amount: 850000, // in kobo (₦8,500.00)
    type: "debit",
    category: "Entertainment",
    date: "2025-05-04T16:35:22",
    status: "completed",
    receiptUploaded: false
  },
  {
    id: "txn-4",
    description: "Top-up from Finance",
    amount: 10000000, // in kobo (₦100,000.00)
    type: "credit",
    category: "Top-up",
    date: "2025-05-03T09:12:55",
    status: "completed",
    receiptUploaded: false
  }
];

// Helper function to format currency in Naira
const formatNaira = (amount) => {
  // Convert from kobo to Naira
  const naira = amount / 100;
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(naira);
};

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-NG', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
};

const MemberDashboard = () => {
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('card');
  const [receiptModalOpen, setReceiptModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  
  // In a real app, you would fetch this data from your API
  useEffect(() => {
    // Simulate API call to get user data, card info, and transactions
    // setUserData(fetchedUserData);
    // setCardData(fetchedCardData);
    // setTransactions(fetchedTransactions);
  }, []);
  
  const handleLogout = () => {
    // Clear authentication data and redirect to login
    localStorage.removeItem('memberToken');
    localStorage.removeItem('memberInfo');
    window.location.href = '/member/login';
  };
  
  const handleUploadReceipt = (transaction) => {
    setSelectedTransaction(transaction);
    setReceiptModalOpen(true);
  };
  
  const handleReceiptModalClose = (uploaded = false) => {
    setReceiptModalOpen(false);
    
    // If receipt was uploaded successfully, update the transaction in the list
    if (uploaded && selectedTransaction) {
      const updatedTransactions = transactions.map(tx => 
        tx.id === selectedTransaction.id 
          ? { ...tx, receiptUploaded: true } 
          : tx
      );
      setTransactions(updatedTransactions);
    }
    
    // Clear selected transaction after a delay
    setTimeout(() => {
      setSelectedTransaction(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logo}
              alt="Spend Sync Logo" 
              className="h-10 w-auto"
            />
            <h1 className="ml-3 text-xl font-bold text-gray-900">Spend Sync</h1>
          </div>
          <div className="flex items-center">
            <div className="mr-4 text-right">
              <p className="text-sm font-medium text-gray-900">{MOCK_USER.name}</p>
              <p className="text-xs text-gray-500">{MOCK_USER.department} - {MOCK_USER.role}</p>
            </div>
            <img 
              src={MOCK_USER.profileImage} 
              alt="Profile" 
              className="h-10 w-10 rounded-full"
            />
            <button 
              onClick={handleLogout}
              className="ml-4 p-2 text-gray-500 hover:text-gray-700"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('card')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'card'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="flex items-center">
                <CreditCard size={16} className="mr-2" />
                My Virtual Card
              </span>
            </button>
            <button
              onClick={() => setActiveTab('transactions')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'transactions'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="flex items-center">
                <Clock size={16} className="mr-2" />
                Transaction History
              </span>
            </button>
            <button
              onClick={() => setActiveTab('reimbursements')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reimbursements'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="flex items-center">
                <Receipt size={16} className="mr-2" />
                Reimbursements
              </span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'profile'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="flex items-center">
                <User size={16} className="mr-2" />
                My Profile
              </span>
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'card' && (
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Virtual Card Details</h2>
            
            {/* Card Container */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 shadow-lg max-w-md mb-6">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-white text-lg font-medium mb-1">Spend Sync</h3>
                  <p className="text-indigo-100 text-sm">Alara Logistics</p>
                </div>
                <div className="bg-white/20 rounded-full p-2">
                  <CreditCard className="text-white h-6 w-6" />
                </div>
              </div>
              
              <p className="text-white text-lg font-mono mb-4">{MOCK_CARD.cardNumber}</p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-indigo-100 text-xs uppercase">Card Holder</p>
                  <p className="text-white">{MOCK_CARD.cardName}</p>
                </div>
                <div>
                  <p className="text-indigo-100 text-xs uppercase">Expires</p>
                  <p className="text-white">{MOCK_CARD.expiryDate}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">VS</span>
                </div>
              </div>
            </div>
            
            {/* Card Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <DollarSign className="text-indigo-500 mr-2" size={20} />
                  <h3 className="text-gray-700 font-medium">Current Balance</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900">{formatNaira(MOCK_CARD.balance)}</p>
                <p className="text-sm text-gray-500">
                  Available to spend on your virtual card
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <DollarSign className="text-indigo-500 mr-2" size={20} />
                  <h3 className="text-gray-700 font-medium">Monthly Limit</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900">{formatNaira(MOCK_CARD.limit)}</p>
                <p className="text-sm text-gray-500">
                  Your spending limit per month
                </p>
              </div>
            </div>
            
            {/* Recent Activity on Card Tab */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Recent Activity</h3>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {transactions.slice(0, 3).map((transaction) => (
                    <li key={transaction.id} className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-full ${
                            transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                          }`}>
                            {transaction.type === 'credit' ? (
                              <DollarSign size={16} className="text-green-600" />
                            ) : (
                              <DollarSign size={16} className="text-red-600" />
                            )}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                            <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-medium ${
                            transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.type === 'credit' ? '+' : '-'}{formatNaira(transaction.amount)}
                          </p>
                          <p className="text-xs text-gray-500">{transaction.category}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 px-4 py-3 text-center">
                  <button 
                    onClick={() => setActiveTab('transactions')}
                    className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    View all transactions
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'transactions' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Transaction History</h2>
              
              {/* Filter Button */}
              <div className="relative">
                <button 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Filter size={16} className="mr-2" />
                  Filter
                  <ChevronDown size={16} className="ml-2" />
                </button>
                
                {filterOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        All Transactions
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Pending Receipts
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Last 7 Days
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Last 30 Days
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        By Category
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Transactions Table */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Receipt
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{formatDate(transaction.date)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{transaction.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${
                          transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'credit' ? '+' : '-'}{formatNaira(transaction.amount)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.receiptUploaded ? (
                          <span className="inline-flex items-center text-green-600">
                            <CheckCircle size={16} className="mr-1" />
                            Uploaded
                          </span>
                        ) : (
                          <button 
                            onClick={() => handleUploadReceipt(transaction)}
                            className="inline-flex items-center text-indigo-600 hover:text-indigo-900"
                          >
                            <Upload size={16} className="mr-1" />
                            Upload
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Pagination */}
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{' '}
                      <span className="font-medium">4</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronDown className="h-5 w-5 transform rotate-90" />
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <ChevronDown className="h-5 w-5 transform -rotate-90" />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'reimbursements' && (
          <ReimbursementTab />
        )}
        
        {activeTab === 'profile' && (
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">My Profile</h2>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex items-center">
                <img 
                  src={MOCK_USER.profileImage} 
                  alt="Profile" 
                  className="h-16 w-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {MOCK_USER.name}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {MOCK_USER.department} • {MOCK_USER.role}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {MOCK_USER.name}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {MOCK_USER.email}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Department</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {MOCK_USER.department}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Role</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {MOCK_USER.role}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Card Status</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Password</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Change password
                      </button>
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Support</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <p>If you're experiencing any issues with your virtual card or need assistance, please contact:</p>
                      <p className="mt-2">
                        <strong>Finance Manager:</strong> finance@alaralogistics.com
                      </p>
                      <p>
                        <strong>Support Team:</strong> support@spendsync.com
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:order-2">
              <p className="text-center text-sm text-gray-500">
                &copy; 2025 Spend Sync. All rights reserved.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:order-1">
              <p className="text-center text-sm text-gray-500">
                For help, contact support@spendsync.com
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Receipt Upload Modal */}
      {receiptModalOpen && selectedTransaction && (
        <ReceiptModal
          isOpen={receiptModalOpen}
          onClose={handleReceiptModalClose}
          transactionId={selectedTransaction.id}
          transactionDetails={selectedTransaction}
        />
      )}
    </div>
  );
};

export default MemberDashboard;