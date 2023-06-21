import React from "react";
import { paginatorUseCase } from "../modules/characters/application/useCase/paginatorUseCase";
import { Container, Button, PageInfo } from "../styles/Paginator.styles";

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
    paginatorUseCase({ currentPage, totalPages, onPageChange });

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
      <Button data-testid="next-button" onClick={handleNextPage}>
        &gt;
      </Button>
    </Container>
  );
};

export default Paginator;
