
// src/components/subscribers/SubscriberStatCard.jsx
import React from 'react';

const SubscriberStatCard = ({ title, count, percentage, icon, isActive, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-sm p-4 cursor-pointer border-b-2 ${isActive ? 'border-black' : 'border-transparent'}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm text-gray-500">{title}</h3>
        {icon}
      </div>
      <div className="mt-1">
        <span className="text-xl font-bold">{count}</span>
        {percentage && <span className="ml-2 text-xs text-gray-500">{percentage}%</span>}
      </div>
    </div>
  );
};


export default SubscriberStatCard;