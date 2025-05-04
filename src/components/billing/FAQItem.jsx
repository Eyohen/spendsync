
// src/components/billing/FAQItem.jsx
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button 
        className="flex w-full text-left items-center justify-between p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <ChevronDown size={16} className="text-gray-400" />
        ) : (
          <ChevronRight size={16} className="text-gray-400" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-4 pt-0 text-sm text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem