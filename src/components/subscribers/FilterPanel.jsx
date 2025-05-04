
// src/components/subscribers/FilterPanel.jsx
import React from 'react';

const FilterPanel = ({ onApplyFilters, onClearFilters }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Filter Subscribers</h3>
        <button 
          className="text-sm text-gray-500 hover:text-black"
          onClick={onClearFilters}
        >
          Clear Filters
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Subscriber Lists</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">All Lists</option>
            <option value="marketing">Marketing</option>
            <option value="product">Product Updates</option>
            <option value="promotions">Promotions</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Join Date</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Any Date</option>
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Engagement</label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">All Engagement</option>
            <option value="high">High Engagement</option>
            <option value="medium">Medium Engagement</option>
            <option value="low">Low Engagement</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button 
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          onClick={onApplyFilters}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel