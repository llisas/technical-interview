import React from "react";
import { Container, Button, PageInfo } from "./Paginator.styles";
import usePaginator from "../../modules/characters/application/useCase/usePaginator";

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number, direction: "next" | "back") => void;
}

const Paginator: React.FunctionComponent<PaginatorProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const { handlePreviousClick, handleNextClick } = usePaginator({
    totalPages,
    onPageChange,
  });

  return (
    <Container>
      <Button disabled={currentPage === 1} onClick={handlePreviousClick}>
        &lt;
      </Button>
      <PageInfo>
        {currentPage} of {totalPages}
      </PageInfo>
      <Button disabled={currentPage === totalPages} onClick={handleNextClick}>
        &gt;
      </Button>
    </Container>
  );
};

export default Paginator;
