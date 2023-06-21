import React from "react";
import { usePaginator } from "../../modules/characters/application/useCase/usePaginator";
import { Container, Button, PageInfo } from "./Paginator.styles";

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginator = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginatorProps) => {
  const { isFirstPage, isLastPage, handlePreviousPage, handleNextPage } =
    usePaginator({ currentPage, totalPages, onPageChange });

  return (
    <Container>
      <Button
        data-testid="previous-button"
        onClick={handlePreviousPage}
        disabled={isFirstPage}
      >
        &lt;
      </Button>
      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>
      <Button
        data-testid="next-button"
        onClick={handleNextPage}
        disabled={isLastPage}
      >
        &gt;
      </Button>
    </Container>
  );
};

export default Paginator;
