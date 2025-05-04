// src/components/billing/PlanCard.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

const PlanCard = ({ 
  name, 
  description, 
  price, 
  features, 
  isCurrentPlan,
  isPopular,
  onSelect
}) => {
  return (
    <div className={`${
      isPopular 
        ? 'border-2 border-black rounded-lg p-6 relative' 
        : 'border border-gray-200 rounded-lg p-6'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-full">
          Popular
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <span className="text-gray-700 font-bold">{price}</span>
      </div>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
          isCurrentPlan 
            ? 'bg-gray-100 text-gray-700 cursor-default' 
            : isPopular
              ? 'bg-black text-white hover:bg-gray-800'
              : name === 'Basic'
                ? 'border border-black text-black hover:bg-gray-50'
                : 'bg-black text-white hover:bg-gray-800'
        }`}
        disabled={isCurrentPlan}
        onClick={() => !isCurrentPlan && onSelect(name)}
      >
        {isCurrentPlan ? 'Current Plan' : name === 'Basic' ? 'Downgrade' : 'Upgrade'}
      </button>
    </div>
  );
};

export default PlanCard