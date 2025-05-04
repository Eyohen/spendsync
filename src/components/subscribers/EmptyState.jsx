
// src/components/subscribers/EmptyState.jsx
import React from 'react';
import { Users, UserPlus } from 'lucide-react';

const EmptyState = ({ onAddSubscriber }) => {
  return (
    <div className="py-12 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
        <Users size={28} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">No subscribers found</h3>
      <p className="text-gray-500 max-w-md mx-auto mb-4">
        There are no subscribers matching your current filter criteria. Try changing your filters or add new subscribers.
      </p>
      <button 
        className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 mx-auto"
        onClick={onAddSubscriber}
      >
        <UserPlus size={18} className="mr-2" />
        Add Subscriber
      </button>
    </div>
  );
};

export default EmptyState