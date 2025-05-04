// src/components/templates/CreateTemplateModal.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

const CreateTemplateModal = ({ onClose, onSave, templates = [] }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [templateType, setTemplateType] = useState('blank');
  const [basedOn, setBasedOn] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name,
      category,
      templateType,
      basedOn: templateType === 'duplicate' ? basedOn : null
    });
  };
  
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
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
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Create New Template
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Template Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Monthly Newsletter"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select a category</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Newsletter">Newsletter</option>
                    <option value="Onboarding">Onboarding</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Sales">Sales</option>
                    <option value="Transactional">Transactional</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Template Type
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="blank"
                        type="radio"
                        name="templateType"
                        checked={templateType === 'blank'}
                        onChange={() => setTemplateType('blank')}
                        className="mr-2"
                      />
                      <label htmlFor="blank" className="text-sm text-gray-700">
                        Blank template
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="starter"
                        type="radio"
                        name="templateType"
                        checked={templateType === 'starter'}
                        onChange={() => setTemplateType('starter')}
                        className="mr-2"
                      />
                      <label htmlFor="starter" className="text-sm text-gray-700">
                        Use starter template
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="duplicate"
                        type="radio"
                        name="templateType"
                        checked={templateType === 'duplicate'}
                        onChange={() => setTemplateType('duplicate')}
                        className="mr-2"
                      />
                      <label htmlFor="duplicate" className="text-sm text-gray-700">
                        Duplicate existing template
                      </label>
                    </div>
                  </div>
                </div>
                
                {templateType === 'duplicate' && (
                  <div>
                    <label htmlFor="basedOn" className="block text-sm font-medium text-gray-700 mb-1">
                      Based On <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="basedOn"
                      required={templateType === 'duplicate'}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                      value={basedOn}
                      onChange={(e) => setBasedOn(e.target.value)}
                    >
                      <option value="">Select a template</option>
                      {templates.map(template => (
                        <option key={template.id} value={template.id}>
                          {template.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                
                {templateType === 'starter' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Starter Templates
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Newsletter', 'Welcome Email', 'Promotional', 'Announcement'].map(template => (
                        <div 
                          key={template}
                          className="border border-gray-200 rounded-md p-2 cursor-pointer hover:bg-gray-50"
                        >
                          <div className="text-center p-4 bg-gray-100 rounded mb-2">
                            {/* Placeholder for template thumbnail */}
                            <span className="text-xs text-gray-500">Preview</span>
                          </div>
                          <p className="text-sm font-medium text-center">{template}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Create Template
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplateModal