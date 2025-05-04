
// src/components/subscribers/SubscriberForm.jsx
import React from 'react';

const SubscriberForm = ({ 
  subscriber = {}, 
  onSubmit, 
  onCancel, 
  isEditing = false 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium mb-6">
        {isEditing ? 'Edit Subscriber' : 'Add New Subscriber'}
      </h2>
      
      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              defaultValue={subscriber.email || ''}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              defaultValue={subscriber.firstName || ''}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              defaultValue={subscriber.lastName || ''}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lists
            </label>
            <div className="space-y-2">
              {['Marketing', 'Product Updates', 'Promotions'].map((list) => (
                <div key={list} className="flex items-center">
                  <input
                    id={`list-${list}`}
                    type="checkbox"
                    defaultChecked={subscriber.lists?.includes(list)}
                    className="mr-2"
                  />
                  <label htmlFor={`list-${list}`} className="text-sm text-gray-700">
                    {list}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              defaultValue={subscriber.status || 'Active'}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="Active">Active</option>
              <option value="Unsubscribed">Unsubscribed</option>
              <option value="Bounced">Bounced</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
          >
            {isEditing ? 'Save Changes' : 'Add Subscriber'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriberForm