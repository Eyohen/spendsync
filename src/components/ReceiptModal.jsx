// ReceiptModal.jsx
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import ReceiptUpload from './ReceiptUpload';

const ReceiptModal = ({ isOpen, onClose, transactionId, transactionDetails }) => {
  const modalRef = useRef(null);
  
  // Close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    // Add event listener only if modal is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);
  
  // Handle upload completion
  const handleUploadComplete = (data) => {
    // You can do additional processing here if needed
    // For now, just close the modal after a delay to show success message
    setTimeout(() => {
      onClose(true); // Pass true to indicate successful upload
    }, 2000);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity" 
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        {/* Modal panel */}
        <div 
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          ref={modalRef}
        >
          {/* Modal header */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">
              Receipt for Transaction
            </h3>
            <button
              onClick={onClose}
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Transaction details */}
          {transactionDetails && (
            <div className="px-4 py-3 border-b border-gray-200">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-500">Merchant:</span>
                <span className="text-gray-900">{transactionDetails.description}</span>
              </div>
              <div className="flex justify-between items-center text-sm mt-1">
                <span className="font-medium text-gray-500">Amount:</span>
                <span className={`font-medium ${
                  transactionDetails.type === 'credit' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transactionDetails.type === 'credit' ? '+' : '-'}
                  {new Intl.NumberFormat('en-NG', {
                    style: 'currency',
                    currency: 'NGN'
                  }).format(transactionDetails.amount / 100)}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm mt-1">
                <span className="font-medium text-gray-500">Date:</span>
                <span className="text-gray-900">
                  {new Intl.DateTimeFormat('en-NG', {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  }).format(new Date(transactionDetails.date))}
                </span>
              </div>
            </div>
          )}
          
          {/* Receipt upload component */}
          <div className="px-4 py-5 sm:p-6">
            <ReceiptUpload 
              transactionId={transactionId} 
              onUploadComplete={handleUploadComplete} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;