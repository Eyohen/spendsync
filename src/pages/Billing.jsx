// src/pages/Billing.jsx
import React, { useState } from 'react';
import { 
  CreditCard, 
  Download, 
  ChevronRight, 
  CheckCircle, 
  Plus,
  ArrowUpRight,
  AlertCircle
} from 'lucide-react';
import { 
    PlanCard, 
    UsageBar, 
    PaymentMethodCard,
    AddPaymentForm,
    BillingHistoryTable,
    BillingInfoForm,
    FAQItem
  } from '../components/billing';

const Billing = () => {
  const [showAddPaymentMethod, setShowAddPaymentMethod] = useState(false);
  const [showBillingInfoForm, setShowBillingInfoForm] = useState(false);
  
  // Mock data for billing page
  const currentPlan = {
    name: "Professional",
    price: "$15/month",
    emailsIncluded: "50,000",
    apiCalls: "1,000,000",
    nextBilling: "Apr 1, 2025"
  };
  
  const planFeatures = {
    "Basic": [
      "Up to 100 emails/day",
      "3,000 API calls",
      "Basic analytics",
      "Email support",
      "1 team member"
    ],
    "Professional": [
      "Up to 50,000 emails/month",
      "1,000,000 API calls",
      "Advanced analytics",
      "Priority email support",
      "10 team members",
      "Custom domain",
      "Dedicated IP"
    ],
    "Enterprise": [
      "Unlimited emails",
      "Unlimited API calls",
      "Full analytics suite",
      "24/7 phone support",
      "Unlimited team members",
      "Multiple custom domains",
      "Dedicated IP pool",
      "SLA guarantees",
      "Dedicated account manager"
    ]
  };
  
  const billingHistory = [
    { id: 1, date: "Mar 1, 2024", amount: "$15", status: "Paid", plan: "Professional" },
    { id: 2, date: "Feb 1, 2024", amount: "$15", status: "Paid", plan: "Professional" },
    { id: 3, date: "Jan 1, 2024", amount: "$29.99", status: "Paid", plan: "Basic" },
    { id: 4, date: "Dec 1, 2023", amount: "$29.99", status: "Paid", plan: "Basic" }
  ];
  
  const paymentMethods = [
    { id: 1, type: "Visa", last4: "4242", expiry: "12/2025", isDefault: true },
    { id: 2, type: "Mastercard", last4: "5678", expiry: "08/2024", isDefault: false }
  ];
  
  // Usage data
  const usageData = {
    emails: {
      used: 28502,
      total: 50000,
      percentage: 57
    },
    apiCalls: {
      used: 452712,
      total: 1000000,
      percentage: 45
    }
  };
  
  // Handle changing the default payment method
  const handleSetDefaultPayment = (id) => {
    console.log(`Setting payment method ${id} as default`);
    // In a real app, you would update the payment methods in state
  };
  
  // Handle removing a payment method
  const handleRemovePayment = (id) => {
    console.log(`Removing payment method ${id}`);
    // In a real app, you would remove the payment method from state
  };
  
  // Handle form submission for adding a payment method
  const handleAddPaymentSubmit = (e) => {
    e.preventDefault();
    console.log('Adding new payment method');
    // In a real app, you would add the payment method to state
    setShowAddPaymentMethod(false);
  };
  
  // Handle form submission for updating billing info
  const handleBillingInfoSubmit = (e) => {
    e.preventDefault();
    console.log('Updating billing information');
    // In a real app, you would update the billing info in state
    setShowBillingInfoForm(false);
  };
  
  // Handle subscription cancellation
  const handleCancelSubscription = () => {
    console.log('Cancelling subscription');
    // In a real app, you would show a confirmation dialog
  };
  
  // Handle changing the billing cycle
  const handleChangeBillingCycle = () => {
    console.log('Changing billing cycle');
    // In a real app, you would show options for monthly/annual billing
  };
  
  // Handle plan upgrade
  const handleUpgradePlan = () => {
    console.log('Upgrading plan');
    // In a real app, you would navigate to the plan selection page
  };

  return (
    <>
      {/* Billing Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Current Plan */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <div>
              <h3 className="text-lg font-medium">Current Plan</h3>
              <p className="text-sm text-gray-500">Your subscription plan details and usage</p>
            </div>
            <button 
              className="whitespace-nowrap inline-flex px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              onClick={handleUpgradePlan}
            >
              Upgrade Plan
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex flex-col sm:flex-row">
              <div className="mb-4 sm:mb-0 sm:mr-8">
                <div className="text-sm text-gray-500 mb-1">Plan</div>
                <div className="font-medium">{currentPlan.name}</div>
              </div>
              
              <div className="mb-4 sm:mb-0 sm:mr-8">
                <div className="text-sm text-gray-500 mb-1">Price</div>
                <div className="font-medium">{currentPlan.price}</div>
              </div>
              
              <div className="mb-4 sm:mb-0 sm:mr-8">
                <div className="text-sm text-gray-500 mb-1">Renewal</div>
                <div className="font-medium">{currentPlan.nextBilling}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-3">Usage This Month</h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Emails Sent</span>
                  <span className="font-medium">{usageData.emails.used.toLocaleString()} / {currentPlan.emailsIncluded}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-black h-2.5 rounded-full" 
                    style={{ width: `${usageData.emails.percentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>API Calls</span>
                  <span className="font-medium">{usageData.apiCalls.used.toLocaleString()} / {currentPlan.apiCalls}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-black h-2.5 rounded-full" 
                    style={{ width: `${usageData.apiCalls.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <button 
              className="text-sm text-black hover:text-gray-700"
              onClick={handleCancelSubscription}
            >
              Cancel Subscription
            </button>
            <button 
              className="text-sm text-black hover:text-gray-700"
              onClick={handleChangeBillingCycle}
            >
              Change Billing Cycle
            </button>
          </div>
        </div>
        
        {/* Payment Method */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Payment Method</h3>
          
          {paymentMethods.map(method => (
            <div 
              key={method.id} 
              className={`border ${method.isDefault ? 'border-black' : 'border-gray-200'} rounded-md p-4 flex items-start mb-4`}
            >
              <div className="bg-gray-100 p-2 rounded-md mr-4">
                <CreditCard size={20} />
              </div>
              <div className="flex-1">
                <div className="font-medium">{method.type} ending in {method.last4}</div>
                <div className="text-sm text-gray-500">Expiry: {method.expiry}</div>
                {method.isDefault && (
                  <div className="text-xs text-gray-500 mt-1">Default payment method</div>
                )}
                <div className="mt-3 flex gap-2">
                  {!method.isDefault && (
                    <>
                      <button 
                        className="text-xs text-black hover:underline"
                        onClick={() => handleSetDefaultPayment(method.id)}
                      >
                        Set as default
                      </button>
                      <span className="text-gray-300">|</span>
                    </>
                  )}
                  <button 
                    className="text-xs text-black hover:underline"
                    onClick={() => handleRemovePayment(method.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {showAddPaymentMethod ? (
            <div className="border border-gray-200 rounded-md p-4 mb-4">
              <h4 className="font-medium mb-3">Add Payment Method</h4>
              <form onSubmit={handleAddPaymentSubmit}>
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
                    onClick={() => setShowAddPaymentMethod(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <button 
              className="mt-2 text-sm flex items-center text-black hover:text-gray-700"
              onClick={() => setShowAddPaymentMethod(true)}
            >
              <Plus size={16} className="mr-1" />
              Add Payment Method
            </button>
          )}
          
          <h3 className="text-lg font-medium mt-8 mb-4">Billing Information</h3>
          
          {showBillingInfoForm ? (
            <div className="border border-gray-200 rounded-md p-4">
              <form onSubmit={handleBillingInfoSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      defaultValue="John Doe"
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
                      defaultValue="billing@example.com"
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
                      defaultValue="123 Main St"
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
                        defaultValue="Anytown"
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
                        defaultValue="12345"
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
                      defaultValue="US"
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
                      defaultValue="US123456789"
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
                    onClick={() => setShowBillingInfoForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-sm">
              <div className="mb-2"><span className="text-gray-500">Name:</span> John Doe</div>
              <div className="mb-2"><span className="text-gray-500">Email:</span> billing@example.com</div>
              <div className="mb-2"><span className="text-gray-500">Address:</span> 123 Main St, Anytown, USA</div>
              <div><span className="text-gray-500">VAT ID:</span> US123456789</div>
              
              <button 
                className="mt-4 text-sm text-black hover:text-gray-700"
                onClick={() => setShowBillingInfoForm(true)}
              >
                Update Billing Information
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Available Plans */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h3 className="text-lg font-medium mb-6">Available Plans</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-medium">Free</h4>
                <p className="text-sm text-gray-500">Hobby Projects</p>
              </div>
              <span className="text-gray-700 font-bold">$0.00</span>
            </div>
            
            <ul className="space-y-2 mb-6">
              {planFeatures.Basic.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
                currentPlan.name === 'Basic' 
                  ? 'bg-gray-100 text-gray-700 cursor-default' 
                  : 'border border-black text-black hover:bg-gray-50'
              }`}
              disabled={currentPlan.name === 'Basic'}
            >
              {currentPlan.name === 'Basic' ? 'Current Plan' : 'Downgrade'}
            </button>
          </div>
          
          <div className="border-2 border-black rounded-lg p-6 relative">
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-full">
              Popular
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-medium">Professional</h4>
                <p className="text-sm text-gray-500">For growing teams</p>
              </div>
              <span className="text-gray-700 font-bold">$15</span>
            </div>
            
            <ul className="space-y-2 mb-6">
              {planFeatures.Professional.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
                currentPlan.name === 'Professional' 
                  ? 'bg-gray-100 text-gray-700 cursor-default' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
              disabled={currentPlan.name === 'Professional'}
            >
              {currentPlan.name === 'Professional' ? 'Current Plan' : 'Upgrade'}
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-medium">Enterprise</h4>
                <p className="text-sm text-gray-500">For large organizations</p>
              </div>
              <span className="text-gray-700 font-bold">$199.99</span>
            </div>
            
            <ul className="space-y-2 mb-6">
              {planFeatures.Enterprise.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
                currentPlan.name === 'Enterprise' 
                  ? 'bg-gray-100 text-gray-700 cursor-default' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
              disabled={currentPlan.name === 'Enterprise'}
            >
              {currentPlan.name === 'Enterprise' ? 'Current Plan' : 'Upgrade'}
            </button>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button className="text-sm text-black hover:underline flex items-center">
            Need a custom plan? Contact sales
            <ArrowUpRight size={14} className="ml-1" />
          </button>
        </div>
      </div>
      
      {/* Billing History */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Billing History</h3>
          <button className="flex items-center text-sm text-black hover:text-gray-700">
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
        
        {/* Pagination - Include if you have many billing records */}
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing 4 of 4 transactions
          </div>
          <div className="flex gap-2">
            <button 
              className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button 
              className="px-3 py-1 bg-gray-900 text-white rounded-md text-sm"
            >
              1
            </button>
            <button 
              className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
        <h3 className="text-lg font-medium mb-4">Frequently Asked Questions</h3>
        
        <div className="border border-gray-200 rounded-md divide-y divide-gray-200">
          <div className="p-4">
            <button className="flex w-full text-left items-center justify-between">
              <span className="font-medium">How is my monthly usage calculated?</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>
          
          <div className="p-4">
            <button className="flex w-full text-left items-center justify-between">
              <span className="font-medium">What happens if I exceed my plan limits?</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>
          
          <div className="p-4">
            <button className="flex w-full text-left items-center justify-between">
              <span className="font-medium">Can I change plans in the middle of a billing cycle?</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>
          
          <div className="p-4">
            <button className="flex w-full text-left items-center justify-between">
              <span className="font-medium">How do I get a receipt for tax purposes?</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-md p-4 flex items-start">
          <AlertCircle size={20} className="text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium mb-1">Need more help?</h4>
            <p className="text-sm text-gray-600 mb-2">
              If you have any questions about billing or your subscription, our support team is here to help.
            </p>
            <button className="text-sm text-black hover:underline">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;