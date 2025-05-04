
// src/components/billing/BillingInfoForm.jsx
import React from 'react';

const BillingInfoForm = ({ initialData, onSubmit, onCancel }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4">
      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              defaultValue={initialData?.name || ""}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              defaultValue={initialData?.email || ""}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm text-gray-700 mb-1">
              Address
            </label>
            <input
              id="address"
              type="text"
              defaultValue={initialData?.address || ""}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm text-gray-700 mb-1">
                City
              </label>
              <input
                id="city"
                type="text"
                defaultValue={initialData?.city || ""}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm text-gray-700 mb-1">
                ZIP Code
              </label>
              <input
                id="zipCode"
                type="text"
                defaultValue={initialData?.zipCode || ""}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="country" className="block text-sm text-gray-700 mb-1">
              Country
            </label>
            <select
              id="country"
              defaultValue={initialData?.country || "US"}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="vatId" className="block text-sm text-gray-700 mb-1">
              VAT ID (optional)
            </label>
            <input
              id="vatId"
              type="text"
              defaultValue={initialData?.vatId || ""}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        </div>
        
        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Save Changes
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

 export default BillingInfoForm;