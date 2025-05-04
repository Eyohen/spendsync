
// src/components/billing/UsageBar.jsx
import React from 'react';

const UsageBar = ({ label, used, total, percentage }) => {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="font-medium">{used.toLocaleString()} / {total.toLocaleString()}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-black h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};


export default UsageBar