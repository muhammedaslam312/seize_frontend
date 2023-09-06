import React, { useState } from 'react';

const CustomPagination = ({ page, setPage, totalPages }) => {
  const handlePreviousPage = () => {
    setPage(Math.max(page - 1, 1));
  };

  const handleNextPage = () => {
    setPage(Math.min(page + 1, totalPages));
  };

  return (
    <div>
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={handleNextPage} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default CustomPagination;
