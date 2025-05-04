
// src/components/billing/BillingHistoryTable.jsx
import React from 'react';
import { Download } from 'lucide-react';

const BillingHistoryTable = ({ billingHistory, onDownloadAll }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Billing History</h3>
        <button 
          className="flex items-center text-sm text-black hover:text-gray-700"
          onClick={onDownloadAll}
        >
          <Download size={16} className="mr-1" />
          Download All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-200">
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Plan</th>
              <th className="pb-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map(bill => (
              <tr key={bill.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4">{bill.date}</td>
                <td className="py-4 font-medium">{bill.amount}</td>
                <td className="py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    bill.status === 'Paid' ? 'bg-green-100 text-green-800' :
                    bill.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {bill.status}
                  </span>
                </td>
                <td className="py-4">{bill.plan}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <button className="text-black hover:underline text-sm">
                      Invoice
                    </button>
                    <span className="text-gray-300">|</span>
                    <button className="text-black hover:underline text-sm">
                      Receipt
                    </button>
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

export default BillingHistoryTable