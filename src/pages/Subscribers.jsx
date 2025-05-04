// // src/pages/Subscribers.jsx
// import React, { useState } from 'react';
// import { 
//   Plus, 
//   Search, 
//   Filter, 
//   Download, 
//   Trash2, 
//   Edit, 
//   Mail,
//   ChevronDown,
//   Upload,
//   UserPlus,
//   Users,
//   UserCheck,
//   UserX,
//   AlertTriangle
// } from 'lucide-react';

// const Subscribers = () => {
//   const [selectedSubscribers, setSelectedSubscribers] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);
//   const [currentTab, setCurrentTab] = useState('all');
//   const [filterOpen, setFilterOpen] = useState(false);
  
//   // Mock data for subscribers page
//   const subscribers = [
//     { id: 1, email: "john.doe@example.com", status: "Active", joined: "Jan 15, 2024", lists: ["Marketing", "Product Updates"], engagement: "High" },
//     { id: 2, email: "jane.smith@example.com", status: "Active", joined: "Feb 3, 2024", lists: ["Marketing"], engagement: "Medium" },
//     { id: 3, email: "robert.johnson@example.com", status: "Unsubscribed", joined: "Dec 10, 2023", lists: [], engagement: "Low" },
//     { id: 4, email: "emma.williams@example.com", status: "Bounced", joined: "Mar 22, 2024", lists: ["Product Updates"], engagement: "Low" },
//     { id: 5, email: "michael.brown@example.com", status: "Active", joined: "Feb 28, 2024", lists: ["Marketing", "Promotions"], engagement: "High" },
//     { id: 6, email: "olivia.jones@example.com", status: "Active", joined: "Jan 5, 2024", lists: ["Promotions"], engagement: "Medium" },
//     { id: 7, email: "william.taylor@example.com", status: "Active", joined: "Mar 15, 2024", lists: ["Marketing", "Product Updates"], engagement: "Medium" },
//     { id: 8, email: "sophia.anderson@example.com", status: "Unsubscribed", joined: "Feb 10, 2024", lists: [], engagement: "Low" },
//     { id: 9, email: "james.martinez@example.com", status: "Active", joined: "Jan 22, 2024", lists: ["Marketing"], engagement: "High" },
//     { id: 10, email: "ava.thomas@example.com", status: "Bounced", joined: "Mar 5, 2024", lists: ["Promotions"], engagement: "Low" }
//   ];

//   // Filter subscribers based on current tab
//   const filteredSubscribers = subscribers.filter(subscriber => {
//     if (currentTab === 'all') return true;
//     if (currentTab === 'active') return subscriber.status === 'Active';
//     if (currentTab === 'unsubscribed') return subscriber.status === 'Unsubscribed';
//     if (currentTab === 'bounced') return subscriber.status === 'Bounced';
//     return true;
//   });
  
//   // Subscriber stats
//   const subscriberStats = {
//     total: subscribers.length,
//     active: subscribers.filter(s => s.status === 'Active').length,
//     unsubscribed: subscribers.filter(s => s.status === 'Unsubscribed').length,
//     bounced: subscribers.filter(s => s.status === 'Bounced').length,
//   };
  
//   // Toggle select all
//   const handleSelectAll = () => {
//     if (selectAll) {
//       setSelectedSubscribers([]);
//     } else {
//       setSelectedSubscribers(filteredSubscribers.map(s => s.id));
//     }
//     setSelectAll(!selectAll);
//   };
  
//   // Toggle select individual subscriber
//   const handleSelectSubscriber = (id) => {
//     if (selectedSubscribers.includes(id)) {
//       setSelectedSubscribers(selectedSubscribers.filter(subId => subId !== id));
//     } else {
//       setSelectedSubscribers([...selectedSubscribers, id]);
//     }
//   };

//   return (
//     <>
//       {/* Subscribers Header */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
//         <div className="flex items-center gap-3">
//           <div className="relative flex-1 min-w-64">
//             <input
//               type="text"
//               placeholder="Search subscribers..."
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//           </div>
//           <button 
//             className="p-2 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50"
//             onClick={() => setFilterOpen(!filterOpen)}
//           >
//             <Filter size={18} />
//           </button>
//         </div>
//         <div className="flex gap-2">
//           <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
//             <Download size={18} className="mr-2" />
//             Export
//           </button>
//           <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
//             <Upload size={18} className="mr-2" />
//             Import
//           </button>
//           <button className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
//             <Plus size={18} className="mr-2" />
//             Add Subscriber
//           </button>
//         </div>
//       </div>
      
//       {/* Filter Panel - Conditionally Rendered */}
//       {filterOpen && (
//         <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="font-medium">Filter Subscribers</h3>
//             <button 
//               className="text-sm text-gray-500 hover:text-black"
//               onClick={() => setFilterOpen(false)}
//             >
//               Clear Filters
//             </button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm text-gray-600 mb-1">Subscriber Lists</label>
//               <select className="w-full p-2 border border-gray-300 rounded-md">
//                 <option value="">All Lists</option>
//                 <option value="marketing">Marketing</option>
//                 <option value="product">Product Updates</option>
//                 <option value="promotions">Promotions</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm text-gray-600 mb-1">Join Date</label>
//               <select className="w-full p-2 border border-gray-300 rounded-md">
//                 <option value="">Any Date</option>
//                 <option value="7days">Last 7 days</option>
//                 <option value="30days">Last 30 days</option>
//                 <option value="90days">Last 90 days</option>
//                 <option value="custom">Custom Range</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm text-gray-600 mb-1">Engagement</label>
//               <select className="w-full p-2 border border-gray-300 rounded-md">
//                 <option value="">All Engagement</option>
//                 <option value="high">High Engagement</option>
//                 <option value="medium">Medium Engagement</option>
//                 <option value="low">Low Engagement</option>
//               </select>
//             </div>
//           </div>
//           <div className="flex justify-end mt-4">
//             <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
//               Apply Filters
//             </button>
//           </div>
//         </div>
//       )}
      
//       {/* Subscriber Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//         <div 
//           className={`bg-white rounded-lg shadow-sm p-4 cursor-pointer border-b-2 ${currentTab === 'all' ? 'border-black' : 'border-transparent'}`}
//           onClick={() => setCurrentTab('all')}
//         >
//           <div className="flex items-center justify-between">
//             <h3 className="text-sm text-gray-500">Total Subscribers</h3>
//             <Users size={18} className="text-gray-400" />
//           </div>
//           <div className="mt-1">
//             <span className="text-xl font-bold">{subscriberStats.total}</span>
//           </div>
//         </div>
        
//         <div 
//           className={`bg-white rounded-lg shadow-sm p-4 cursor-pointer border-b-2 ${currentTab === 'active' ? 'border-black' : 'border-transparent'}`}
//           onClick={() => setCurrentTab('active')}
//         >
//           <div className="flex items-center justify-between">
//             <h3 className="text-sm text-gray-500">Active</h3>
//             <UserCheck size={18} className="text-green-500" />
//           </div>
//           <div className="mt-1">
//             <span className="text-xl font-bold">{subscriberStats.active}</span>
//             <span className="ml-2 text-xs text-gray-500">{Math.round(subscriberStats.active / subscriberStats.total * 100)}%</span>
//           </div>
//         </div>
        
//         <div 
//           className={`bg-white rounded-lg shadow-sm p-4 cursor-pointer border-b-2 ${currentTab === 'unsubscribed' ? 'border-black' : 'border-transparent'}`}
//           onClick={() => setCurrentTab('unsubscribed')}
//         >
//           <div className="flex items-center justify-between">
//             <h3 className="text-sm text-gray-500">Unsubscribed</h3>
//             <UserX size={18} className="text-red-500" />
//           </div>
//           <div className="mt-1">
//             <span className="text-xl font-bold">{subscriberStats.unsubscribed}</span>
//             <span className="ml-2 text-xs text-gray-500">{Math.round(subscriberStats.unsubscribed / subscriberStats.total * 100)}%</span>
//           </div>
//         </div>
        
//         <div 
//           className={`bg-white rounded-lg shadow-sm p-4 cursor-pointer border-b-2 ${currentTab === 'bounced' ? 'border-black' : 'border-transparent'}`}
//           onClick={() => setCurrentTab('bounced')}
//         >
//           <div className="flex items-center justify-between">
//             <h3 className="text-sm text-gray-500">Bounced</h3>
//             <AlertTriangle size={18} className="text-yellow-500" />
//           </div>
//           <div className="mt-1">
//             <span className="text-xl font-bold">{subscriberStats.bounced}</span>
//             <span className="ml-2 text-xs text-gray-500">{Math.round(subscriberStats.bounced / subscriberStats.total * 100)}%</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Bulk Actions - Show when subscribers are selected */}
//       {selectedSubscribers.length > 0 && (
//         <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mb-4 flex items-center justify-between">
//           <div className="text-sm">
//             <span className="font-medium">{selectedSubscribers.length}</span> subscribers selected
//           </div>
//           <div className="flex gap-2">
//             <button className="text-sm px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100">
//               Add to List
//             </button>
//             <button className="text-sm px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100">
//               Send Email
//             </button>
//             <button className="text-sm px-3 py-1.5 border border-red-300 text-red-600 rounded-md hover:bg-red-50">
//               Delete
//             </button>
//           </div>
//         </div>
//       )}
      
//       {/* Subscribers List */}
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="text-left text-gray-500 bg-gray-50 border-b border-gray-200">
//                 <th className="px-6 py-3 font-medium">
//                   <div className="flex items-center">
//                     <input 
//                       type="checkbox" 
//                       className="mr-3"
//                       checked={selectAll}
//                       onChange={handleSelectAll} 
//                     />
//                     Email
//                   </div>
//                 </th>
//                 <th className="px-6 py-3 font-medium">Status</th>
//                 <th className="px-6 py-3 font-medium">Joined</th>
//                 <th className="px-6 py-3 font-medium">Lists</th>
//                 <th className="px-6 py-3 font-medium">Engagement</th>
//                 <th className="px-6 py-3 font-medium">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredSubscribers.map(subscriber => (
//                 <tr key={subscriber.id} className="border-b border-gray-100 hover:bg-gray-50">
//                   <td className="px-6 py-4">
//                     <div className="flex items-center">
//                       <input 
//                         type="checkbox" 
//                         className="mr-3"
//                         checked={selectedSubscribers.includes(subscriber.id)}
//                         onChange={() => handleSelectSubscriber(subscriber.id)}
//                       />
//                       <span className="font-medium">{subscriber.email}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                       subscriber.status === 'Active' ? 'bg-green-100 text-green-800' :
//                       subscriber.status === 'Unsubscribed' ? 'bg-red-100 text-red-800' :
//                       'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {subscriber.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-gray-500">{subscriber.joined}</td>
//                   <td className="px-6 py-4">
//                     <div className="flex flex-wrap gap-1">
//                       {subscriber.lists.length > 0 ? subscriber.lists.map((list, idx) => (
//                         <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100">
//                           {list}
//                         </span>
//                       )) : <span className="text-gray-400">None</span>}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                       subscriber.engagement === 'High' ? 'bg-green-100 text-green-800' :
//                       subscriber.engagement === 'Medium' ? 'bg-blue-100 text-blue-800' :
//                       'bg-gray-100 text-gray-800'
//                     }`}>
//                       {subscriber.engagement}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-2">
//                       <button className="p-1 text-gray-500 hover:text-black">
//                         <Edit size={16} />
//                       </button>
//                       <button className="p-1 text-gray-500 hover:text-black">
//                         <Mail size={16} />
//                       </button>
//                       <div className="relative group">
//                         <button className="p-1 text-gray-500 hover:text-black">
//                           <ChevronDown size={16} />
//                         </button>
//                         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 invisible group-hover:visible z-10">
//                           <div className="py-1">
//                             <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                               View Activity
//                             </button>
//                             <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                               Add to List
//                             </button>
//                             <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                               Remove from List
//                             </button>
//                             <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
//         {/* Empty State - Show when no subscribers match filter */}
//         {filteredSubscribers.length === 0 && (
//           <div className="py-12 text-center">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
//               <Users size={28} className="text-gray-400" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-1">No subscribers found</h3>
//             <p className="text-gray-500 max-w-md mx-auto mb-4">
//               There are no subscribers matching your current filter criteria. Try changing your filters or add new subscribers.
//             </p>
//             <button className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 mx-auto">
//               <UserPlus size={18} className="mr-2" />
//               Add Subscriber
//             </button>
//           </div>
//         )}
        
//         {/* Pagination */}
//         {filteredSubscribers.length > 0 && (
//           <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
//             <div className="text-sm text-gray-500">
//               Showing {filteredSubscribers.length} of {subscribers.length} subscribers
//             </div>
//             <div className="flex items-center gap-2">
//               <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50">
//                 Previous
//               </button>
//               <button className="px-3 py-1 bg-gray-900 text-white rounded-md text-sm">
//                 1
//               </button>
//               <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
//                 2
//               </button>
//               <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Subscribers;


// src/pages/Subscribers.jsx (Refactored)
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Upload,
  Users,
  UserCheck,
  UserX,
  AlertTriangle
} from 'lucide-react';

import {
  SubscriberStatCard,
  SubscriberTable,
  EmptyState,
  BulkActionBar,
  FilterPanel,
  Pagination,
  SubscriberForm,
  ImportSubscribersModal
} from '../components/subscribers';

const Subscribers = () => {
  const [selectedSubscribers, setSelectedSubscribers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentTab, setCurrentTab] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // Mock data for subscribers page
  const subscribers = [
    { id: 1, email: "john.doe@example.com", status: "Active", joined: "Jan 15, 2024", lists: ["Marketing", "Product Updates"], engagement: "High" },
    { id: 2, email: "jane.smith@example.com", status: "Active", joined: "Feb 3, 2024", lists: ["Marketing"], engagement: "Medium" },
    { id: 3, email: "robert.johnson@example.com", status: "Unsubscribed", joined: "Dec 10, 2023", lists: [], engagement: "Low" },
    { id: 4, email: "emma.williams@example.com", status: "Bounced", joined: "Mar 22, 2024", lists: ["Product Updates"], engagement: "Low" },
    { id: 5, email: "michael.brown@example.com", status: "Active", joined: "Feb 28, 2024", lists: ["Marketing", "Promotions"], engagement: "High" },
    { id: 6, email: "olivia.jones@example.com", status: "Active", joined: "Jan 5, 2024", lists: ["Promotions"], engagement: "Medium" },
    { id: 7, email: "william.taylor@example.com", status: "Active", joined: "Mar 15, 2024", lists: ["Marketing", "Product Updates"], engagement: "Medium" },
    { id: 8, email: "sophia.anderson@example.com", status: "Unsubscribed", joined: "Feb 10, 2024", lists: [], engagement: "Low" },
    { id: 9, email: "james.martinez@example.com", status: "Active", joined: "Jan 22, 2024", lists: ["Marketing"], engagement: "High" },
    { id: 10, email: "ava.thomas@example.com", status: "Bounced", joined: "Mar 5, 2024", lists: ["Promotions"], engagement: "Low" }
  ];

  // Filter subscribers based on current tab
  const filteredSubscribers = subscribers.filter(subscriber => {
    if (currentTab === 'all') return true;
    if (currentTab === 'active') return subscriber.status === 'Active';
    if (currentTab === 'unsubscribed') return subscriber.status === 'Unsubscribed';
    if (currentTab === 'bounced') return subscriber.status === 'Bounced';
    return true;
  });
  
  // Subscriber stats
  const subscriberStats = {
    total: subscribers.length,
    active: subscribers.filter(s => s.status === 'Active').length,
    unsubscribed: subscribers.filter(s => s.status === 'Unsubscribed').length,
    bounced: subscribers.filter(s => s.status === 'Bounced').length,
  };
  
  // Toggle select all
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedSubscribers([]);
    } else {
      setSelectedSubscribers(filteredSubscribers.map(s => s.id));
    }
    setSelectAll(!selectAll);
  };
  
  // Toggle select individual subscriber
  const handleSelectSubscriber = (id) => {
    if (selectedSubscribers.includes(id)) {
      setSelectedSubscribers(selectedSubscribers.filter(subId => subId !== id));
      setSelectAll(false);
    } else {
      setSelectedSubscribers([...selectedSubscribers, id]);
      if (selectedSubscribers.length + 1 === filteredSubscribers.length) {
        setSelectAll(true);
      }
    }
  };
  
  // Handle add/import subscriber
  const handleAddSubscriber = () => {
    setShowAddForm(true);
  };
  
  const handleImportSubscribers = () => {
    setShowImportModal(true);
  };
  
  // Handle form submission
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // In a real app, you would save the subscriber data here
    setShowAddForm(false);
    // Show success message or update the subscriber list
  };
  
  // Handle bulk actions
  const handleAddToList = () => {
    console.log('Adding subscribers to list:', selectedSubscribers);
    // In a real app, you would open a modal to select lists
  };
  
  const handleSendEmail = () => {
    console.log('Sending email to subscribers:', selectedSubscribers);
    // In a real app, you would redirect to the email composer
  };
  
  const handleDeleteSubscribers = () => {
    console.log('Deleting subscribers:', selectedSubscribers);
    // In a real app, you would show a confirmation dialog
  };
  
  // Handle filter actions
  const handleApplyFilters = () => {
    console.log('Applying filters');
    setFilterOpen(false);
    // In a real app, you would apply the selected filters
  };
  
  const handleClearFilters = () => {
    console.log('Clearing filters');
    // In a real app, you would reset all filter controls
  };
  
  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <>
      {/* Subscribers Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 min-w-64">
            <input
              type="text"
              placeholder="Search subscribers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button 
            className="p-2 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter size={18} />
          </button>
        </div>
        <div className="flex gap-2">
          <button 
            className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            onClick={handleAddSubscriber}
          >
            <Download size={18} className="mr-2" />
            Export
          </button>
          <button 
            className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            onClick={handleImportSubscribers}
          >
            <Upload size={18} className="mr-2" />
            Import
          </button>
          <button 
            className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            onClick={handleAddSubscriber}
          >
            <Plus size={18} className="mr-2" />
            Add Subscriber
          </button>
        </div>
      </div>
      
      {/* Filter Panel - Conditionally Rendered */}
      {filterOpen && (
        <FilterPanel 
          onApplyFilters={handleApplyFilters} 
          onClearFilters={handleClearFilters} 
        />
      )}
      
      {/* Subscriber Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <SubscriberStatCard
          title="Total Subscribers"
          count={subscriberStats.total}
          icon={<Users size={18} className="text-gray-400" />}
          isActive={currentTab === 'all'}
          onClick={() => setCurrentTab('all')}
        />
        
        <SubscriberStatCard
          title="Active"
          count={subscriberStats.active}
          percentage={Math.round(subscriberStats.active / subscriberStats.total * 100)}
          icon={<UserCheck size={18} className="text-green-500" />}
          isActive={currentTab === 'active'}
          onClick={() => setCurrentTab('active')}
        />
        
        <SubscriberStatCard
          title="Unsubscribed"
          count={subscriberStats.unsubscribed}
          percentage={Math.round(subscriberStats.unsubscribed / subscriberStats.total * 100)}
          icon={<UserX size={18} className="text-red-500" />}
          isActive={currentTab === 'unsubscribed'}
          onClick={() => setCurrentTab('unsubscribed')}
        />
        
        <SubscriberStatCard
          title="Bounced"
          count={subscriberStats.bounced}
          percentage={Math.round(subscriberStats.bounced / subscriberStats.total * 100)}
          icon={<AlertTriangle size={18} className="text-yellow-500" />}
          isActive={currentTab === 'bounced'}
          onClick={() => setCurrentTab('bounced')}
        />
      </div>
      
      {/* Bulk Actions - Show when subscribers are selected */}
      {selectedSubscribers.length > 0 && (
        <BulkActionBar 
          selectedCount={selectedSubscribers.length}
          onAddToList={handleAddToList}
          onSendEmail={handleSendEmail}
          onDelete={handleDeleteSubscribers}
        />
      )}
      
      {/* Subscribers Table or Empty State */}
      {filteredSubscribers.length > 0 ? (
        <>
          <SubscriberTable 
            subscribers={filteredSubscribers}
            selectedIds={selectedSubscribers}
            selectAll={selectAll}
            onSelectAll={handleSelectAll}
            onSelectSubscriber={handleSelectSubscriber}
          />
          
          <Pagination 
            currentPage={currentPage}
            totalPages={Math.ceil(filteredSubscribers.length / itemsPerPage)}
            totalItems={filteredSubscribers.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <EmptyState onAddSubscriber={handleAddSubscriber} />
      )}
      
      {/* Add Subscriber Form - Conditionally Rendered */}
      {showAddForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-center">
          <div className="relative mx-auto p-5 w-full max-w-md">
            <SubscriberForm 
              onSubmit={handleSubmitForm}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        </div>
      )}
      
      {/* Import Modal - Conditionally Rendered */}
      {showImportModal && (
        <ImportSubscribersModal 
          onClose={() => setShowImportModal(false)}
          onImport={() => {
            // In a real app, you would process the uploaded file
            console.log('Importing subscribers');
            setShowImportModal(false);
          }}
        />
      )}
    </>
  );
};

export default Subscribers;