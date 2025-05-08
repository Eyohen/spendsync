// ReimbursementTab.jsx
import { useState } from 'react';
import { 
  DollarSign, 
  Calendar, 
  FileText, 
  Upload, 
  Check, 
  AlertCircle,
  Clock,
  X,
  ChevronDown, 
} from 'lucide-react';
import ReceiptUpload from './ReceiptUpload';

// Mock data for pending reimbursements
const MOCK_REIMBURSEMENTS = [
  {
    id: 'reimb-1',
    description: 'Client lunch - Bungalow Restaurant',
    amount: 1850000, // in kobo (₦18,500.00)
    date: '2025-05-02T13:45:30',
    status: 'pending',
    receiptUploaded: true
  },
  {
    id: 'reimb-2',
    description: 'Airport taxi fare',
    amount: 750000, // in kobo (₦7,500.00)
    date: '2025-04-28T19:10:45',
    status: 'approved',
    receiptUploaded: true,
    approvedDate: '2025-05-01T10:23:45',
    paymentStatus: 'processing'
  }
];

// Helper function to format currency in Naira
const formatNaira = (amount) => {
  // Convert from kobo to Naira
  const naira = amount / 100;
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(naira);
};

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-NG', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
};

const ReimbursementTab = () => {
  const [reimbursements, setReimbursements] = useState(MOCK_REIMBURSEMENTS);
  const [showNewForm, setShowNewForm] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Transport',
    notes: ''
  });
  const [receiptUploaded, setReceiptUploaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Toggle new reimbursement form
  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
    setError('');
    setSuccessMessage('');
    
    // Reset form data if closing
    if (showNewForm) {
      setFormData({
        description: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        category: 'Transport',
        notes: ''
      });
      setReceiptUploaded(false);
    }
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle receipt upload completion
  const handleReceiptUpload = (data) => {
    setReceiptUploaded(true);
  };
  
  // Submit new reimbursement request
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.description.trim()) {
      setError('Please enter a description');
      return;
    }
    
    if (!formData.amount || isNaN(parseFloat(formData.amount)) || parseFloat(formData.amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }
    
    if (!formData.date) {
      setError('Please select a date');
      return;
    }
    
    if (!receiptUploaded) {
      setError('Please upload a receipt');
      return;
    }
    
    setSubmitting(true);
    setError('');
    
    try {
      // In a real app, you would make an API call here
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Convert amount from Naira to kobo
      const amountInKobo = Math.round(parseFloat(formData.amount) * 100);
      
      // Create new reimbursement object
      const newReimbursement = {
        id: `reimb-${Date.now()}`,
        description: formData.description,
        amount: amountInKobo,
        date: new Date().toISOString(),
        category: formData.category,
        notes: formData.notes,
        status: 'pending',
        receiptUploaded: true
      };
      
      // Add to list
      setReimbursements([newReimbursement, ...reimbursements]);
      
      // Show success message
      setSuccessMessage('Reimbursement request submitted successfully');
      
      // Reset form
      setFormData({
        description: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        category: 'Transport',
        notes: ''
      });
      setReceiptUploaded(false);
      
      // Close form after 2 seconds
      setTimeout(() => {
        setShowNewForm(false);
        setSuccessMessage('');
      }, 2000);
    } catch (err) {
      setError('Failed to submit reimbursement request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900">Reimbursement Requests</h2>
        
        <button
          onClick={toggleNewForm}
          className={`px-4 py-2 text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            showNewForm
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent'
          }`}
        >
          {showNewForm ? 'Cancel' : 'New Request'}
        </button>
      </div>
      
      {/* Success Message */}
      {successMessage && (
        <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <div className="flex">
            <Check className="h-5 w-5 text-green-500" />
            <div className="ml-3">
              <p className="text-sm text-green-700">{successMessage}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* New Reimbursement Form */}
      {showNewForm && (
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">New Reimbursement Request</h3>
            
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                {/* Description */}
                <div className="sm:col-span-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="E.g., Client lunch at Restaurant Name"
                    />
                  </div>
                </div>
                
                {/* Amount */}
                <div className="sm:col-span-3">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Amount (₦)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₦</span>
                    </div>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>
                </div>
                
                {/* Date */}
                <div className="sm:col-span-3">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date of Expense
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                {/* Category */}
                <div className="sm:col-span-3">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <div className="mt-1">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="Transport">Transport</option>
                      <option value="Meals">Meals & Entertainment</option>
                      <option value="Office Supplies">Office Supplies</option>
                      <option value="Communication">Communication</option>
                      <option value="Accommodation">Accommodation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                {/* Notes */}
                <div className="sm:col-span-6">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                    Additional Notes
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Any additional details about this expense..."
                    />
                  </div>
                </div>
                
                {/* Receipt Upload */}
                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Receipt
                  </label>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <ReceiptUpload 
                      transactionId={null} // We don't have a transaction ID yet
                      onUploadComplete={handleReceiptUpload}
                    />
                  </div>
                  {receiptUploaded && (
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <Check className="mr-1.5 h-4 w-4" />
                      Receipt uploaded successfully
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={toggleNewForm}
                  className="mr-3 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting || !receiptUploaded}
                  className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
                >
                  {submitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Reimbursement List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {reimbursements.length === 0 ? (
          <div className="px-4 py-5 sm:p-6 text-center">
            <p className="text-gray-500">No reimbursement requests found</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {reimbursements.map((reimbursement) => (
              <li key={reimbursement.id}>
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-sm font-medium text-indigo-600 truncate">
                        <span className="truncate">{reimbursement.description}</span>
                      </div>
                      <div className="mt-2 flex">
                        <div className="flex items-center text-sm text-gray-500">
                          <DollarSign className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <p>
                            <span className="font-medium">{formatNaira(reimbursement.amount)}</span>
                          </p>
                        </div>
                        <div className="ml-6 flex items-center text-sm text-gray-500">
                          <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <p>
                            <time dateTime={reimbursement.date}>
                              {formatDate(reimbursement.date)}
                            </time>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                      <div className="flex -space-x-1 overflow-hidden">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            reimbursement.status === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : reimbursement.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {reimbursement.status.charAt(0).toUpperCase() + reimbursement.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-5 flex-shrink-0">
                    <button 
                      type="button"
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
                    >
                      <span className="sr-only">View details</span>
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Additional details could be shown in an expandable panel */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReimbursementTab;