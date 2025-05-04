// // src/pages/Templates.jsx
// import React, { useState } from 'react';
// import { 
//   Plus, 
//   Search, 
//   FileText, 
//   Edit, 
//   Copy, 
//   Trash2, 
//   Eye,
//   Zap,
//   Mail,
//   MessageSquare,
//   ShoppingCart,
//   CreditCard,
//   ChevronRight,
//   Filter
// } from 'lucide-react';

// const Templates = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState('newest');
//   const [showFilterOptions, setShowFilterOptions] = useState(false);
  
//   // Mock data for templates
//   const templates = [
//     { id: 1, name: "Welcome Email", category: "Onboarding", lastEdited: "3 days ago", usedIn: 2, thumbnail: null },
//     { id: 2, name: "Monthly Newsletter", category: "Newsletter", lastEdited: "1 week ago", usedIn: 4, thumbnail: null },
//     { id: 3, name: "Product Announcement", category: "Marketing", lastEdited: "2 days ago", usedIn: 1, thumbnail: null },
//     { id: 4, name: "Feedback Request", category: "Engagement", lastEdited: "5 days ago", usedIn: 1, thumbnail: null },
//     { id: 5, name: "Abandoned Cart", category: "Sales", lastEdited: "1 day ago", usedIn: 1, thumbnail: null },
//     { id: 6, name: "Promotional Offer", category: "Marketing", lastEdited: "4 days ago", usedIn: 3, thumbnail: null },
//     { id: 7, name: "Password Reset", category: "Transactional", lastEdited: "2 weeks ago", usedIn: 0, thumbnail: null },
//     { id: 8, name: "Order Confirmation", category: "Transactional", lastEdited: "3 weeks ago", usedIn: 5, thumbnail: null },
//     { id: 9, name: "Weekly Digest", category: "Newsletter", lastEdited: "6 days ago", usedIn: 2, thumbnail: null }
//   ];
  
//   // Template categories with counts
//   const categories = [
//     { name: "All", count: templates.length, icon: <FileText size={18} /> },
//     { name: "Marketing", count: templates.filter(t => t.category === "Marketing").length, icon: <Zap size={18} /> },
//     { name: "Newsletter", count: templates.filter(t => t.category === "Newsletter").length, icon: <Mail size={18} /> },
//     { name: "Onboarding", count: templates.filter(t => t.category === "Onboarding").length, icon: <UserPlus size={18} /> },
//     { name: "Engagement", count: templates.filter(t => t.category === "Engagement").length, icon: <MessageSquare size={18} /> },
//     { name: "Sales", count: templates.filter(t => t.category === "Sales").length, icon: <ShoppingCart size={18} /> },
//     { name: "Transactional", count: templates.filter(t => t.category === "Transactional").length, icon: <CreditCard size={18} /> }
//   ];
  
//   // Filter templates based on category and search query
//   const filteredTemplates = templates.filter(template => {
//     const matchesCategory = selectedCategory === 'all' || template.category.toLowerCase() === selectedCategory.toLowerCase();
//     const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           template.category.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });
  
//   // Sort templates based on selected sort option
//   const sortedTemplates = [...filteredTemplates].sort((a, b) => {
//     if (sortBy === 'newest') {
//       // Simulating sort by date using the lastEdited field
//       // In a real app, you would use actual dates
//       return a.lastEdited.includes('day') && !b.lastEdited.includes('day') ? -1 : 1;
//     } else if (sortBy === 'alphabetical') {
//       return a.name.localeCompare(b.name);
//     } else if (sortBy === 'mostUsed') {
//       return b.usedIn - a.usedIn;
//     }
//     return 0;
//   });

//   // Handle template deletion
//   const handleDeleteTemplate = (id) => {
//     console.log(`Deleting template with id: ${id}`);
//     // In a real app, you would delete the template and update the state
//   };
  
//   // Handle template duplication
//   const handleDuplicateTemplate = (id) => {
//     console.log(`Duplicating template with id: ${id}`);
//     // In a real app, you would duplicate the template and update the state
//   };

//   // Handle template preview
//   const handlePreviewTemplate = (id) => {
//     console.log(`Previewing template with id: ${id}`);
//     // In a real app, you would show a preview modal
//   };
  
//   // Handle template edit
//   const handleEditTemplate = (id) => {
//     console.log(`Editing template with id: ${id}`);
//     // In a real app, you would navigate to the template editor
//   };
  
//   // Handle new template creation
//   const handleCreateTemplate = () => {
//     console.log('Creating new template');
//     // In a real app, you would navigate to the template editor or show a modal
//   };

//   return (
//     <>
//       {/* Templates Header */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
//         <div className="flex items-center gap-3">
//           <div className="relative flex-1 min-w-64">
//             <input
//               type="text"
//               placeholder="Search templates..."
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//           </div>
//           <div className="relative">
//             <button 
//               className="p-2 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50"
//               onClick={() => setShowFilterOptions(!showFilterOptions)}
//             >
//               <Filter size={18} />
//             </button>
            
//             {showFilterOptions && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
//                 <div className="py-1">
//                   <h3 className="px-4 py-1 text-xs uppercase text-gray-500 font-semibold">Sort by</h3>
//                   <button 
//                     className={`block w-full text-left px-4 py-2 text-sm ${sortBy === 'newest' ? 'bg-gray-100 text-black' : 'text-gray-700 hover:bg-gray-50'}`}
//                     onClick={() => setSortBy('newest')}
//                   >
//                     Newest first
//                   </button>
//                   <button 
//                     className={`block w-full text-left px-4 py-2 text-sm ${sortBy === 'alphabetical' ? 'bg-gray-100 text-black' : 'text-gray-700 hover:bg-gray-50'}`}
//                     onClick={() => setSortBy('alphabetical')}
//                   >
//                     Alphabetical
//                   </button>
//                   <button 
//                     className={`block w-full text-left px-4 py-2 text-sm ${sortBy === 'mostUsed' ? 'bg-gray-100 text-black' : 'text-gray-700 hover:bg-gray-50'}`}
//                     onClick={() => setSortBy('mostUsed')}
//                   >
//                     Most used
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <button 
//           className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
//           onClick={handleCreateTemplate}
//         >
//           <Plus size={18} className="mr-2" />
//           New Template
//         </button>
//       </div>
      
//       {/* Main Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* Categories Sidebar */}
//         <div className="lg:col-span-1">
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             <div className="p-4 border-b border-gray-200">
//               <h3 className="font-medium">Categories</h3>
//             </div>
//             <div className="p-2">
//               {categories.map(category => (
//                 <button
//                   key={category.name}
//                   className={`flex items-center justify-between w-full p-3 text-left rounded-md text-sm mb-1 ${
//                     (selectedCategory === category.name.toLowerCase() || 
//                     (selectedCategory === 'all' && category.name === 'All')) 
//                       ? 'bg-gray-100 text-black' 
//                       : 'text-gray-600 hover:bg-gray-50'
//                   }`}
//                   onClick={() => setSelectedCategory(category.name === 'All' ? 'all' : category.name.toLowerCase())}
//                 >
//                   <div className="flex items-center">
//                     <div className="p-2 bg-gray-100 rounded-md mr-3">
//                       {category.icon}
//                     </div>
//                     <div>
//                       <div className="font-medium">{category.name}</div>
//                       <div className="text-xs text-gray-500">{category.count} template{category.count !== 1 ? 's' : ''}</div>
//                     </div>
//                   </div>
//                   <ChevronRight size={16} className="text-gray-400" />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
        
//         {/* Templates Grid */}
//         <div className="lg:col-span-3">
//           {filteredTemplates.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {sortedTemplates.map(template => (
//                 <div 
//                   key={template.id} 
//                   className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
//                 >
//                   <div className="h-36 bg-gray-100 border-b border-gray-200 flex items-center justify-center">
//                     {template.thumbnail ? (
//                       <img 
//                         src={template.thumbnail} 
//                         alt={template.name} 
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <FileText size={32} className="text-gray-400" />
//                     )}
//                   </div>
//                   <div className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <h3 className="font-medium">{template.name}</h3>
//                       <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{template.category}</span>
//                     </div>
//                     <div className="flex items-center justify-between text-sm text-gray-500">
//                       <span>Last edited: {template.lastEdited}</span>
//                       <span>Used in: {template.usedIn} campaign{template.usedIn !== 1 ? 's' : ''}</span>
//                     </div>
//                     <div className="mt-4 flex justify-between">
//                       <button 
//                         className="text-sm text-gray-600 hover:text-black"
//                         onClick={() => handlePreviewTemplate(template.id)}
//                       >
//                         Preview
//                       </button>
//                       <div className="flex gap-2">
//                         <button 
//                           className="p-1 text-gray-500 hover:text-black"
//                           onClick={() => handleEditTemplate(template.id)}
//                         >
//                           <Edit size={16} />
//                         </button>
//                         <button 
//                           className="p-1 text-gray-500 hover:text-black"
//                           onClick={() => handleDuplicateTemplate(template.id)}
//                         >
//                           <Copy size={16} />
//                         </button>
//                         <button 
//                           className="p-1 text-gray-500 hover:text-red-500"
//                           onClick={() => handleDeleteTemplate(template.id)}
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
              
//               {/* New Template Card */}
//               <div 
//                 className="bg-white rounded-lg shadow-sm overflow-hidden border border-dashed border-gray-300 hover:shadow-md transition-shadow flex items-center justify-center h-64 cursor-pointer"
//                 onClick={handleCreateTemplate}
//               >
//                 <div className="text-center p-6">
//                   <div className="flex justify-center mb-3">
//                     <Plus size={24} className="text-gray-400" />
//                   </div>
//                   <h3 className="font-medium text-gray-600 mb-2">Create New Template</h3>
//                   <p className="text-sm text-gray-500">Start from scratch or use a pre-built template</p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="bg-white rounded-lg shadow-sm p-12 text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
//                 <FileText size={28} className="text-gray-400" />
//               </div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
//               <p className="text-gray-500 max-w-md mx-auto mb-6">
//                 {searchQuery 
//                   ? `No templates matching "${searchQuery}" were found. Try a different search term or clear your filters.`
//                   : `You don't have any templates in this category yet. Create your first template to get started.`
//                 }
//               </p>
//               <button 
//                 className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 mx-auto"
//                 onClick={handleCreateTemplate}
//               >
//                 <Plus size={18} className="mr-2" />
//                 Create Template
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Templates;



// src/pages/Templates.jsx (Refactored)
import React, { useState } from 'react';
import { 
  Plus, 
  FileText, 
  Zap, 
  Mail, 
  UserPlus, 
  MessageSquare, 
  ShoppingCart, 
  CreditCard
} from 'lucide-react';
import {
  CategorySidebar,
  TemplateCard,
  NewTemplateCard,
  EmptyState,
  TemplateSearch,
  TemplatePreviewModal,
  CreateTemplateModal
} from '../components/templates';

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  
  // Mock data for templates
  const templates = [
    { id: 1, name: "Welcome Email", category: "Onboarding", lastEdited: "3 days ago", usedIn: 2, thumbnail: null },
    { id: 2, name: "Monthly Newsletter", category: "Newsletter", lastEdited: "1 week ago", usedIn: 4, thumbnail: null },
    { id: 3, name: "Product Announcement", category: "Marketing", lastEdited: "2 days ago", usedIn: 1, thumbnail: null },
    { id: 4, name: "Feedback Request", category: "Engagement", lastEdited: "5 days ago", usedIn: 1, thumbnail: null },
    { id: 5, name: "Abandoned Cart", category: "Sales", lastEdited: "1 day ago", usedIn: 1, thumbnail: null },
    { id: 6, name: "Promotional Offer", category: "Marketing", lastEdited: "4 days ago", usedIn: 3, thumbnail: null },
    { id: 7, name: "Password Reset", category: "Transactional", lastEdited: "2 weeks ago", usedIn: 0, thumbnail: null },
    { id: 8, name: "Order Confirmation", category: "Transactional", lastEdited: "3 weeks ago", usedIn: 5, thumbnail: null },
    { id: 9, name: "Weekly Digest", category: "Newsletter", lastEdited: "6 days ago", usedIn: 2, thumbnail: null }
  ];
  
  // Template categories with counts
  const categories = [
    { name: "All", count: templates.length, icon: <FileText size={18} /> },
    { name: "Marketing", count: templates.filter(t => t.category === "Marketing").length, icon: <Zap size={18} /> },
    { name: "Newsletter", count: templates.filter(t => t.category === "Newsletter").length, icon: <Mail size={18} /> },
    { name: "Onboarding", count: templates.filter(t => t.category === "Onboarding").length, icon: <UserPlus size={18} /> },
    { name: "Engagement", count: templates.filter(t => t.category === "Engagement").length, icon: <MessageSquare size={18} /> },
    { name: "Sales", count: templates.filter(t => t.category === "Sales").length, icon: <ShoppingCart size={18} /> },
    { name: "Transactional", count: templates.filter(t => t.category === "Transactional").length, icon: <CreditCard size={18} /> }
  ];
  
  // Filter templates based on category and search query
  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Sort templates based on selected sort option
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (sortBy === 'newest') {
      // Simulating sort by date using the lastEdited field
      // In a real app, you would use actual dates
      return a.lastEdited.includes('day') && !b.lastEdited.includes('day') ? -1 : 1;
    } else if (sortBy === 'alphabetical') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'mostUsed') {
      return b.usedIn - a.usedIn;
    }
    return 0;
  });

  // Handle template deletion
  const handleDeleteTemplate = (id) => {
    console.log(`Deleting template with id: ${id}`);
    // In a real app, you would delete the template and update the state
  };
  
  // Handle template duplication
  const handleDuplicateTemplate = (id) => {
    console.log(`Duplicating template with id: ${id}`);
    // In a real app, you would duplicate the template and update the state
  };

  // Handle template preview
  const handlePreviewTemplate = (id) => {
    const template = templates.find(t => t.id === id);
    setPreviewTemplate(template);
    setShowPreviewModal(true);
  };
  
  // Handle template edit
  const handleEditTemplate = (id) => {
    console.log(`Editing template with id: ${id}`);
    // In a real app, you would navigate to the template editor
  };
  
  // Handle new template creation
  const handleCreateTemplate = () => {
    setShowCreateModal(true);
  };
  
  // Handle save new template
  const handleSaveTemplate = (templateData) => {
    console.log('Creating new template with data:', templateData);
    // In a real app, you would create the template and update the state
    setShowCreateModal(false);
  };
  
  // Handle using a template
  const handleUseTemplate = (id) => {
    console.log(`Using template with id: ${id}`);
    // In a real app, you would navigate to the campaign creation page
    setShowPreviewModal(false);
  };

  return (
    <>
      {/* Templates Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <TemplateSearch 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          showFilterOptions={showFilterOptions}
          setShowFilterOptions={setShowFilterOptions}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        <button 
          className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          onClick={handleCreateTemplate}
        >
          <Plus size={18} className="mr-2" />
          New Template
        </button>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <CategorySidebar 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        
        {/* Templates Grid */}
        <div className="lg:col-span-3">
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedTemplates.map(template => (
                <TemplateCard 
                  key={template.id}
                  template={template}
                  onPreview={handlePreviewTemplate}
                  onEdit={handleEditTemplate}
                  onDuplicate={handleDuplicateTemplate}
                  onDelete={handleDeleteTemplate}
                />
              ))}
              
              {/* New Template Card */}
              <NewTemplateCard onClick={handleCreateTemplate} />
            </div>
          ) : (
            <EmptyState 
              searchQuery={searchQuery}
              onCreate={handleCreateTemplate}
            />
          )}
        </div>
      </div>
      
      {/* Preview Modal */}
      {showPreviewModal && (
        <TemplatePreviewModal 
          template={previewTemplate}
          onClose={() => setShowPreviewModal(false)}
          onUse={handleUseTemplate}
          onEdit={handleEditTemplate}
        />
      )}
      
      {/* Create Template Modal */}
      {showCreateModal && (
        <CreateTemplateModal 
          onClose={() => setShowCreateModal(false)}
          onSave={handleSaveTemplate}
          templates={templates}
        />
      )}
    </>
  );
};

export default Templates;