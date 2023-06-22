import { useState } from "react";

interface UsePaginatorProps {
  totalPages: number;
  onPageChange: (page: number, direction: "next" | "back") => void;
}

const usePaginator = ({ totalPages, onPageChange }: UsePaginatorProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      onPageChange(currentPage - 1, "back");
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      onPageChange(currentPage + 1, "next");
    }
  };

  return {
    currentPage,
    handlePreviousClick,
    handleNextClick,
  };
};

export default usePaginator;
