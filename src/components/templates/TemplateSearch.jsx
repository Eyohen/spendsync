
// src/components/templates/TemplateSearch.jsx
import React from 'react';
import { Search, Filter } from 'lucide-react';

const TemplateSearch = ({ 
  searchQuery, 
  onSearchChange, 
  showFilterOptions, 
  setShowFilterOptions,
  sortBy,
  onSortChange 
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-1 min-w-64">
        <input
          type="text"
          placeholder="Search templates..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>
      <div className="relative">
        <button 
          className="p-2 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50"
          onClick={() => setShowFilterOptions(!showFilterOptions)}
        >
          <Filter size={18} />
        </button>
        
        {showFilterOptions && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
            <div className="py-1">
              <h3 className="px-4 py-1 text-xs uppercase text-gray-500 font-semibold">Sort by</h3>
              <button 
                className={`block w-full text-left px-4 py-2 text-sm ${sortBy === 'newest' ? 'bg-gray-100 text-black' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => onSortChange('newest')}
              >
                Newest first
              </button>
              <button 
                className={`block w-full text-left px-4 py-2 text-sm ${sortBy === 'alphabetical' ? 'bg-gray-100 text-black' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => onSortChange('alphabetical')}
              >
                Alphabetical
              </button>
              <button 
                className={`block w-full text-left px-4 py-2 text-sm ${sortBy === 'mostUsed' ? 'bg-gray-100 text-black' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => onSortChange('mostUsed')}
              >
                Most used
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateSearch;