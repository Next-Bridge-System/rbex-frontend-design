import React from 'react';

const Carousal = ({ currentPage = 1, totalPages = 3, onNext }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            className={`w-8 h-8 rounded-md text-sm font-semibold border ${
              isActive
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={onNext}
        className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium"
      >
        Next <span className="text-lg">→</span>
      </button>
    </div>
  );
};

export default Carousal;
