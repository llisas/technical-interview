import { useState } from "react";

interface PaginatorUseCaseProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function paginatorUseCase({
  currentPage,
  totalPages,
  onPageChange,
}: PaginatorUseCaseProps) {
  const [isFirstPage, setIsFirstPage] = useState(currentPage === 1);
  const [isLastPage, setIsLastPage] = useState(currentPage === totalPages);

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
