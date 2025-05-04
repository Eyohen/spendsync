
// src/components/templates/TemplateCard.jsx
import React from 'react';
import { FileText, Edit, Copy, Trash2 } from 'lucide-react';

const TemplateCard = ({ template, onPreview, onEdit, onDuplicate, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div className="h-36 bg-gray-100 border-b border-gray-200 flex items-center justify-center">
        {template.thumbnail ? (
          <img 
            src={template.thumbnail} 
            alt={template.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <FileText size={32} className="text-gray-400" />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">{template.name}</h3>
          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{template.category}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Last edited: {template.lastEdited}</span>
          <span>Used in: {template.usedIn} campaign{template.usedIn !== 1 ? 's' : ''}</span>
        </div>
        <div className="mt-4 flex justify-between">
          <button 
            className="text-sm text-gray-600 hover:text-black"
            onClick={() => onPreview(template.id)}
          >
            Preview
          </button>
          <div className="flex gap-2">
            <button 
              className="p-1 text-gray-500 hover:text-black"
              onClick={() => onEdit(template.id)}
            >
              <Edit size={16} />
            </button>
            <button 
              className="p-1 text-gray-500 hover:text-black"
              onClick={() => onDuplicate(template.id)}
            >
              <Copy size={16} />
            </button>
            <button 
              className="p-1 text-gray-500 hover:text-red-500"
              onClick={() => onDelete(template.id)}
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard