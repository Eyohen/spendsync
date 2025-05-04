
// src/components/subscribers/Pagination.jsx
import React from 'react';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  totalItems, 
  itemsPerPage, 
  onPageChange 
}) => {
  return (
    <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
      <div className="text-sm text-gray-500">
        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} subscribers
      </div>
      <div className="flex items-center gap-2">
        <button 
          className={`px-3 py-1 border border-gray-300 rounded-md text-sm ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => {
          const pageNumber = i + 1;
          return (
            <button 
              key={pageNumber}
              className={`px-3 py-1 ${
                currentPage === pageNumber 
                  ? 'bg-gray-900 text-white' 
                  : 'border border-gray-300 hover:bg-gray-50'
              } rounded-md text-sm`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        
        {totalPages > 3 && (
          <button 
            className={`px-3 py-1 border border-gray-300 rounded-md text-sm ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination