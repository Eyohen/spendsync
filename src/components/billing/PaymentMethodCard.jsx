
// src/components/billing/PaymentMethodCard.jsx
import React from 'react';
import { CreditCard } from 'lucide-react';

const PaymentMethodCard = ({ 
  type, 
  last4, 
  expiry, 
  isDefault, 
  onSetDefault, 
  onRemove 
}) => {
  return (
    <div className={`border ${isDefault ? 'border-black' : 'border-gray-200'} rounded-md p-4 flex items-start`}>
      <div className="bg-gray-100 p-2 rounded-md mr-4">
        <CreditCard size={20} />
      </div>
      <div className="flex-1">
        <div className="font-medium">{type} ending in {last4}</div>
        <div className="text-sm text-gray-500">Expiry: {expiry}</div>
        {isDefault && (
          <div className="text-xs text-gray-500 mt-1">Default payment method</div>
        )}
        <div className="mt-3 flex gap-2">
          {!isDefault && (
            <>
              <button 
                className="text-xs text-black hover:underline"
                onClick={onSetDefault}
              >
                Set as default
              </button>
              <span className="text-gray-300">|</span>
            </>
          )}
          <button 
            className="text-xs text-black hover:underline"
            onClick={onRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};


export default PaymentMethodCard