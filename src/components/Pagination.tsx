import React, { useState } from 'react';

interface PaginationProps {
  current_page: number;
  next_page: string;
}

const Pagination: React.FC<PaginationProps> = ({ current_page, next_page }) => {
  const [currentPage, setCurrentPage] = useState(current_page);
  const [nextPage, setNextPage] = useState(next_page);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
    setNextPage(next_page);
    // Trigger a refetch with the new page number
    console.log(next_page)
  };

  return (
    <div>
      {/* {currentPage < next_page && ( */}
        <button className="load-more" onClick={handleLoadMore}>
          Load More
        </button>
      {/* )} */}
    </div>
  );
};

export default Pagination;
