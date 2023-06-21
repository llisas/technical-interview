import { useState } from "react";

interface PaginatorUseCaseProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function usePaginator({
  currentPage,
  totalPages,
  onPageChange,
}: PaginatorUseCaseProps) {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      setIsFirstPage(currentPage - 1 === 1);
      setIsLastPage(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      setIsFirstPage(false);
      setIsLastPage(currentPage + 1 === totalPages);
    }
  };

  return {
    isFirstPage,
    isLastPage,
    handlePreviousPage,
    handleNextPage,
  };
}
