// src/components/subscribers/SubscriberTable.jsx
import React from 'react';
import { 
  Edit, 
  Mail, 
  ChevronDown 
} from 'lucide-react';

const SubscriberTable = ({ 
  subscribers, 
  selectedIds, 
  onSelectAll, 
  onSelectSubscriber, 
  selectAll 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 font-medium">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-3"
                    checked={selectAll}
                    onChange={onSelectAll} 
                  />
                  Email
                </div>
              </th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Joined</th>
              <th className="px-6 py-3 font-medium">Lists</th>
              <th className="px-6 py-3 font-medium">Engagement</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map(subscriber => (
              <tr key={subscriber.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-3"
                      checked={selectedIds.includes(subscriber.id)}
                      onChange={() => onSelectSubscriber(subscriber.id)}
                    />
                    <span className="font-medium">{subscriber.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    subscriber.status === 'Active' ? 'bg-green-100 text-green-800' :
                    subscriber.status === 'Unsubscribed' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {subscriber.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">{subscriber.joined}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {subscriber.lists.length > 0 ? subscriber.lists.map((list, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100">
                        {list}
                      </span>
                    )) : <span className="text-gray-400">None</span>}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    subscriber.engagement === 'High' ? 'bg-green-100 text-green-800' :
                    subscriber.engagement === 'Medium' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {subscriber.engagement}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-gray-500 hover:text-black">
                      <Edit size={16} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-black">
                      <Mail size={16} />
                    </button>
                    <div className="relative group">
                      <button className="p-1 text-gray-500 hover:text-black">
                        <ChevronDown size={16} />
                      </button>
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 invisible group-hover:visible z-10">
                        <div className="py-1">
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            View Activity
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Add to List
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Remove from List
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default SubscriberTable