
// src/components/templates/NewTemplateCard.jsx
import React from 'react';
import { Plus } from 'lucide-react';

const NewTemplateCard = ({ onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden border border-dashed border-gray-300 hover:shadow-md transition-shadow flex items-center justify-center h-64 cursor-pointer"
      onClick={onClick}
    >
      <div className="text-center p-6">
        <div className="flex justify-center mb-3">
          <Plus size={24} className="text-gray-400" />
        </div>
        <h3 className="font-medium text-gray-600 mb-2">Create New Template</h3>
        <p className="text-sm text-gray-500">Start from scratch or use a pre-built template</p>
      </div>
    </div>
  );
};


export default NewTemplateCard