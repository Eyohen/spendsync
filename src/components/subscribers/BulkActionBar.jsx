
// src/components/subscribers/BulkActionBar.jsx
import React from 'react';

const BulkActionBar = ({ selectedCount, onAddToList, onSendEmail, onDelete }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mb-4 flex items-center justify-between">
      <div className="text-sm">
        <span className="font-medium">{selectedCount}</span> subscribers selected
      </div>
      <div className="flex gap-2">
        <button 
          className="text-sm px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100"
          onClick={onAddToList}
        >
          Add to List
        </button>
        <button 
          className="text-sm px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100"
          onClick={onSendEmail}
        >
          Send Email
        </button>
        <button 
          className="text-sm px-3 py-1.5 border border-red-300 text-red-600 rounded-md hover:bg-red-50"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};


export default BulkActionBar