
// src/components/templates/EmptyState.jsx
import React from 'react';
import { FileText, Plus } from 'lucide-react';

const EmptyState = ({ searchQuery, onCreate }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-12 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
        <FileText size={28} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
      <p className="text-gray-500 max-w-md mx-auto mb-6">
        {searchQuery 
          ? `No templates matching "${searchQuery}" were found. Try a different search term or clear your filters.`
          : `You don't have any templates in this category yet. Create your first template to get started.`
        }
      </p>
      <button 
        className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 mx-auto"
        onClick={onCreate}
      >
        <Plus size={18} className="mr-2" />
        Create Template
      </button>
    </div>
  );
};

export default EmptyState