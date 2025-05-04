// src/pages/Campaigns.jsx
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Eye, 
  Copy, 
  Trash2 
} from 'lucide-react';
import NewCampaignModal from '../components/campaigns/NewCampaignModal';

const Campaigns = () => {
    const [showNewCampaignModal, setShowNewCampaignModal] = useState(false);

// Handle creating a new campaign
const handleCreateCampaign = (campaignData) => {
    console.log('New campaign data:', campaignData);
    // In a real app, you would create the campaign and update state
    setShowNewCampaignModal(false);
  };
  


  const campaigns = [
    { id: 1, name: "Welcome Series", status: "Active", sentLast: "2 days ago", performance: "Good", type: "Automated" },
    { id: 2, name: "March Newsletter", status: "Completed", sentLast: "6 days ago", performance: "Excellent", type: "One-time" },
    { id: 3, name: "Product Update", status: "Draft", sentLast: "Never", performance: "N/A", type: "One-time" },
    { id: 4, name: "Weekly Digest", status: "Active", sentLast: "1 day ago", performance: "Average", type: "Automated" },
    { id: 5, name: "Abandoned Cart", status: "Active", sentLast: "5 hours ago", performance: "Good", type: "Triggered" },
    { id: 6, name: "Customer Feedback", status: "Paused", sentLast: "10 days ago", performance: "Poor", type: "Automated" }
  ];

  return (
    <>
      {/* Campaigns Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 min-w-64">
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
          <button className="p-2 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter size={18} />
          </button>
        </div>
        <button onClick={() => setShowNewCampaignModal(true)} className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
          <Plus size={18} className="mr-2" />
          New Campaign
        </button>
      </div>
      
      {/* Campaigns List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 font-medium">Campaign Name</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Last Sent</th>
                <th className="px-6 py-3 font-medium">Performance</th>
                <th className="px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map(campaign => (
                <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{campaign.name}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                      campaign.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                      campaign.status === 'Paused' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{campaign.type}</td>
                  <td className="px-6 py-4 text-gray-500">{campaign.sentLast}</td>
                  <td className="px-6 py-4">
                    <span className={`${
                      campaign.performance === 'Excellent' ? 'text-green-600' :
                      campaign.performance === 'Good' ? 'text-green-500' :
                      campaign.performance === 'Average' ? 'text-yellow-500' :
                      campaign.performance === 'Poor' ? 'text-red-500' :
                      'text-gray-500'
                    }`}>
                      {campaign.performance}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-gray-500 hover:text-black">
                        <Edit size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-black">
                        <Eye size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-black">
                        <Copy size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-red-500">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing 1-6 of 25 campaigns
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-gray-900 text-white rounded-md text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>

         {/* New Campaign Modal */}
         {showNewCampaignModal && (
        <NewCampaignModal 
          onClose={() => setShowNewCampaignModal(false)}
          onSave={handleCreateCampaign}
        />
      )}
    </>
  );
};

export default Campaigns;