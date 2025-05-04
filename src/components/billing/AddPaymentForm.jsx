
// src/components/billing/AddPaymentForm.jsx
import React from 'react';

const AddPaymentForm = ({ onSubmit, onCancel }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4">
      <h4 className="font-medium mb-3">Add Payment Method</h4>
      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm text-gray-700 mb-1">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              placeholder="1234 1234 1234 1234"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                id="expiry"
                type="text"
                placeholder="MM/YY"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm text-gray-700 mb-1">
                CVC
              </label>
              <input
                id="cvc"
                type="text"
                placeholder="123"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="defaultPayment"
              type="checkbox"
              className="mr-2"
            />
            <label htmlFor="defaultPayment" className="text-sm text-gray-700">
              Set as default payment method
            </label>
          </div>
        </div>
        
        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Add Payment Method
          </button>
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};


export default AddPaymentForm