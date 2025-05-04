
// src/components/templates/TemplatePreviewModal.jsx
import React from 'react';
import { X } from 'lucide-react';

const TemplatePreviewModal = ({ template, onClose, onUse, onEdit }) => {
  if (!template) return null;
  
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button 
              type="button" 
              className="text-gray-400 hover:text-gray-500" 
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="border-b border-gray-200 pb-4 mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Category: {template.category}
                </p>
              </div>
              <span className="text-sm text-gray-500">
                Last edited: {template.lastEdited}
              </span>
            </div>
            
            <div className="border border-gray-200 rounded-md p-4 mb-4 h-96 overflow-auto">
              {/* This would be the actual template content/HTML */}
              <div className="text-center text-gray-500 p-8">
                Template preview would appear here
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              type="button" 
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => onUse(template.id)}
            >
              Use This Template
            </button>
            <button 
              type="button" 
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => onEdit(template.id)}
            >
              Edit Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewModal