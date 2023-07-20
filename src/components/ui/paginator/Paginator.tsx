import React from "react";

import { Container, Button, PageInfo } from "./Paginator.styles";
interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onNextClick: () => void;
  onPreviousClick: () => void;
}

const Paginator: React.FunctionComponent<PaginatorProps> = ({
  currentPage,
  totalPages,
  onNextClick,
  onPreviousClick,
}) => {
  const handleClickPrevious = () => {
    onPreviousClick();
  };

  const handleClickNext = () => {
   onNextClick();
  };

  return (
    <div data-testid="paginator">
    <Container >
      <Button
        data-testid="previous-button"
        disabled={currentPage === 1}
        onClick={handleClickPrevious}
      >
        &lt;
      </Button>
      <PageInfo>
        {currentPage} of {totalPages}
      </PageInfo>
      <Button
        data-testid="next-button"
        disabled={currentPage === totalPages}
        onClick={handleClickNext}
      >
        &gt;
      </Button>
    </Container>
    </div>
  );
};

export default Paginator;
