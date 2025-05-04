
// src/components/subscribers/ImportSubscribersModal.jsx
import React from 'react';
import { Upload, X, Download } from 'lucide-react';

const ImportSubscribersModal = ({ onClose, onImport }) => {
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
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mx-auto">
                <Upload size={24} className="text-gray-600" />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4 text-center">
                Import Subscribers
              </h3>
              <div className="mt-3">
                <p className="text-sm text-gray-500 text-center mb-4">
                  Upload a CSV file with your subscribers. The file should have the following columns: email, first_name, last_name, lists, status.
                </p>
                
                <div className="border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center justify-center">
                  <div className="flex text-sm text-gray-600">
                    <label 
                      htmlFor="file-upload" 
                      className="cursor-pointer bg-white rounded-md font-medium text-black hover:text-gray-800 focus:outline-none"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    CSV up to 10MB
                  </p>
                </div>
                
                <div className="mt-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-center text-sm text-black hover:text-gray-800"
                  >
                    <Download size={16} className="mr-1" />
                    Download Sample CSV Template
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              type="button" 
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onImport}
            >
              Import
            </button>
            <button 
              type="button" 
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportSubscribersModal;