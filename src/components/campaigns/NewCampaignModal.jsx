// src/components/campaigns/NewCampaignModal.jsx
import React, { useState } from 'react';
import { X, Mail, Zap, Clock, CalendarDays, ChevronRight, FileText } from 'lucide-react';

const NewCampaignModal = ({ onClose, onSave }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [campaignType, setCampaignType] = useState('');
  const [campaignData, setCampaignData] = useState({
    name: '',
    subject: '',
    fromName: '',
    fromEmail: '',
    template: '',
    audience: '',
    schedule: 'now',
    scheduledDate: '',
    scheduledTime: ''
  });

  // Campaign type options
  const campaignTypes = [
    { 
      id: 'regular', 
      name: 'Regular Campaign', 
      description: 'One-time email sent to your selected audience', 
      icon: <Mail size={24} />
    },
    { 
      id: 'automated', 
      name: 'Automated Campaign', 
      description: 'Triggered emails based on subscriber actions or time', 
      icon: <Zap size={24} />
    },
    { 
      id: 'scheduled', 
      name: 'Scheduled Campaign', 
      description: 'Email campaign scheduled for future delivery', 
      icon: <Clock size={24} />
    }
  ];

  // Mock data for templates and audiences
  const templates = [
    { id: 1, name: 'Welcome Email', category: 'Onboarding' },
    { id: 2, name: 'Monthly Newsletter', category: 'Newsletter' },
    { id: 3, name: 'Product Announcement', category: 'Marketing' },
    { id: 4, name: 'Promotional Offer', category: 'Marketing' }
  ];

  const audiences = [
    { id: 1, name: 'All Subscribers', count: 28452 },
    { id: 2, name: 'Active Subscribers', count: 27845 },
    { id: 3, name: 'Marketing List', count: 15678 },
    { id: 4, name: 'Product Updates List', count: 12455 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCampaignData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCampaignTypeSelect = (typeId) => {
    setCampaignType(typeId);
    setCurrentStep(2);
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...campaignData,
      type: campaignType
    });
  };

  // Render different step content based on currentStep
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Choose Campaign Type</h3>
            <div className="space-y-3">
              {campaignTypes.map((type) => (
                <button
                  key={type.id}
                  className={`w-full flex items-start p-4 border rounded-md hover:border-black hover:bg-gray-50 transition-colors text-left ${
                    campaignType === type.id ? 'border-black bg-gray-50' : 'border-gray-200'
                  }`}
                  onClick={() => handleCampaignTypeSelect(type.id)}
                >
                  <div className="p-2 bg-gray-100 rounded-md mr-4">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{type.name}</h4>
                    <p className="text-sm text-gray-500">{type.description}</p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400 self-center" />
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">Campaign Details</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Campaign Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={campaignData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="e.g. April Newsletter"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={campaignData.subject}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="e.g. Check out our April promotions!"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fromName" className="block text-sm font-medium text-gray-700 mb-1">
                    From Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fromName"
                    name="fromName"
                    type="text"
                    required
                    value={campaignData.fromName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Your Name or Company"
                  />
                </div>
                <div>
                  <label htmlFor="fromEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    From Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fromEmail"
                    name="fromEmail"
                    type="email"
                    required
                    value={campaignData.fromEmail}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">Choose Template</h3>
            <div className="grid grid-cols-2 gap-4 mb-4 max-h-64 overflow-y-auto">
              {templates.map((template) => (
                <div 
                  key={template.id}
                  className={`border rounded-md p-4 cursor-pointer hover:border-black hover:bg-gray-50 transition-colors ${
                    campaignData.template === template.id.toString() ? 'border-black bg-gray-50' : 'border-gray-200'
                  }`}
                  onClick={() => handleInputChange({ target: { name: 'template', value: template.id.toString() } })}
                >
                  <div className="h-24 bg-gray-100 rounded-md flex items-center justify-center mb-3">
                    <FileText size={24} className="text-gray-400" />
                  </div>
                  <h4 className="font-medium">{template.name}</h4>
                  <p className="text-xs text-gray-500">{template.category}</p>
                </div>
              ))}
            </div>
            <button className="text-sm text-black hover:underline flex items-center mt-2">
              Create new template
            </button>
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">Select Audience</h3>
            <div className="space-y-3 mb-4">
              {audiences.map((audience) => (
                <div 
                  key={audience.id}
                  className={`border rounded-md p-4 cursor-pointer hover:border-black hover:bg-gray-50 transition-colors ${
                    campaignData.audience === audience.id.toString() ? 'border-black bg-gray-50' : 'border-gray-200'
                  }`}
                  onClick={() => handleInputChange({ target: { name: 'audience', value: audience.id.toString() } })}
                >
                  <div className="flex justify-between">
                    <h4 className="font-medium">{audience.name}</h4>
                    <span className="text-sm text-gray-500">{audience.count.toLocaleString()} subscribers</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-sm text-black hover:underline flex items-center mt-2">
              Create new audience segment
            </button>
          </div>
        );
      case 5:
        return (
          <div>
            <h3 className="text-lg font-medium mb-4">
              {campaignType === 'scheduled' ? 'Schedule Delivery' : 'Delivery Options'}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  id="sendNow"
                  name="schedule"
                  type="radio"
                  checked={campaignData.schedule === 'now'}
                  onChange={() => handleInputChange({ target: { name: 'schedule', value: 'now' } })}
                  className="h-4 w-4 border-gray-300 text-black focus:ring-black"
                />
                <label htmlFor="sendNow" className="block text-sm font-medium text-gray-700">
                  Send immediately
                </label>
              </div>
              
              <div className="flex items-start space-x-2">
                <input
                  id="sendLater"
                  name="schedule"
                  type="radio"
                  checked={campaignData.schedule === 'later'}
                  onChange={() => handleInputChange({ target: { name: 'schedule', value: 'later' } })}
                  className="h-4 w-4 border-gray-300 text-black focus:ring-black mt-1"
                />
                <div className="flex-1">
                  <label htmlFor="sendLater" className="block text-sm font-medium text-gray-700 mb-2">
                    Schedule for later
                  </label>
                  
                  {campaignData.schedule === 'later' && (
                    <div className="pl-1 grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="scheduledDate" className="block text-sm text-gray-600 mb-1">
                          Date
                        </label>
                        <input
                          id="scheduledDate"
                          name="scheduledDate"
                          type="date"
                          value={campaignData.scheduledDate}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="scheduledTime" className="block text-sm text-gray-600 mb-1">
                          Time
                        </label>
                        <input
                          id="scheduledTime"
                          name="scheduledTime"
                          type="time"
                          value={campaignData.scheduledTime}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {campaignType === 'automated' && (
                <div className="bg-gray-50 p-4 rounded-md mt-2">
                  <h4 className="font-medium text-sm mb-2">Automation Settings</h4>
                  <p className="text-xs text-gray-500 mb-2">
                    For automated campaigns, you'll be able to set up triggers and conditions in the next step.
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  // Get step title
  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Choose Campaign Type";
      case 2: return "Campaign Details";
      case 3: return "Choose Template";
      case 4: return "Select Audience";
      case 5: return campaignType === 'scheduled' ? "Schedule Delivery" : "Delivery Options";
      default: return "";
    }
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button 
              type="button" 
              className="text-gray-400 hover:text-gray-500" 
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {/* Steps indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      currentStep >= step ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex mt-2 justify-between px-4">
                <div className={`text-xs ${currentStep >= 1 ? 'text-black' : 'text-gray-400'}`}>Type</div>
                <div className={`text-xs ${currentStep >= 2 ? 'text-black' : 'text-gray-400'}`}>Details</div>
                <div className={`text-xs ${currentStep >= 3 ? 'text-black' : 'text-gray-400'}`}>Template</div>
                <div className={`text-xs ${currentStep >= 4 ? 'text-black' : 'text-gray-400'}`}>Audience</div>
                <div className={`text-xs ${currentStep >= 5 ? 'text-black' : 'text-gray-400'}`}>Schedule</div>
              </div>
            </div>
            
            {/* Step Content */}
            <div className="min-h-[320px]">
              {renderStepContent()}
            </div>
          </div>
          
          {/* Step Navigation Buttons */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {currentStep < 5 ? (
              <button 
                type="button" 
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleNextStep}
                disabled={
                  (currentStep === 1 && !campaignType) ||
                  (currentStep === 2 && (!campaignData.name || !campaignData.subject || !campaignData.fromName || !campaignData.fromEmail)) ||
                  (currentStep === 3 && !campaignData.template) ||
                  (currentStep === 4 && !campaignData.audience)
                }
              >
                Next
              </button>
            ) : (
              <button 
                type="button" 
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleSubmit}
                disabled={
                  campaignData.schedule === 'later' && (!campaignData.scheduledDate || !campaignData.scheduledTime)
                }
              >
                {campaignType === 'regular' ? 'Create Campaign' : campaignType === 'scheduled' ? 'Schedule Campaign' : 'Set Up Automation'}
              </button>
            )}
            
            {currentStep > 1 && (
              <button 
                type="button" 
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                onClick={handlePrevStep}
              >
                Back
              </button>
            )}
            
            {currentStep === 1 && (
              <button 
                type="button" 
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCampaignModal;