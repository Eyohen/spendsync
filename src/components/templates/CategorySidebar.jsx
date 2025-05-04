// src/components/templates/CategorySidebar.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const CategorySidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium">Categories</h3>
      </div>
      <div className="p-2">
        {categories.map(category => (
          <button
            key={category.name}
            className={`flex items-center justify-between w-full p-3 text-left rounded-md text-sm mb-1 ${
              (selectedCategory === category.name.toLowerCase() || 
              (selectedCategory === 'all' && category.name === 'All')) 
                ? 'bg-gray-100 text-black' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => onSelectCategory(category.name === 'All' ? 'all' : category.name.toLowerCase())}
          >
            <div className="flex items-center">
              <div className="p-2 bg-gray-100 rounded-md mr-3">
                {category.icon}
              </div>
              <div>
                <div className="font-medium">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} template{category.count !== 1 ? 's' : ''}</div>
              </div>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar