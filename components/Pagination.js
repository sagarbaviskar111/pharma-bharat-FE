import styles from './Pagination.module.css'; 

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisibleButtons = 4; 
  const totalPageNumbers = Math.min(maxVisibleButtons, totalPages); 

  // Calculate the range of page numbers to display
  const startPage = Math.max(
    1,
    Math.min(
      currentPage - Math.floor(totalPageNumbers / 2),
      totalPages - totalPageNumbers + 1
    )
  );
  const endPage = Math.min(startPage + totalPageNumbers - 1, totalPages);

  const handlePageClick = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      {/* Previous Button */}
      <button
        className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ''}`}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Buttons */}
      {startPage > 1 && (
        <button
          className={styles.pageButton}
        >
                    {currentPage}

        </button>
      )}


      {endPage < totalPages && (
        <button
          className={styles.pageButton}
        >
          {currentPage}
          </button>
      )}

      {/* Next Button */}
      <button
        className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ''}`}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      {/* Pagination Info */}
      <div className={styles.paginationInfo}>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
