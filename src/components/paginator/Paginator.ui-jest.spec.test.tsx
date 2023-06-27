import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Paginator from "@/components/paginator/Paginator";

describe("Paginator", () => {
  const mockOnPageChange = jest.fn();

  it("renders current page and total pages correctly", () => {
    const currentPage = 2;
    const totalPages = 5;

    const { getByText } = render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );

    expect(getByText(`${currentPage} of ${totalPages}`)).toBeInTheDocument();
  });

  it("renders the previous button", () => {
    const currentPage = 1;
    const totalPages = 5;

    const { getByTestId } = render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );

    const previousButton = getByTestId("previous-button");

    expect(previousButton).toBeInTheDocument();
  });
  it("disables the previous button when current page is 1", () => {
    const currentPage = 1;
    const totalPages = 5;

    const { getByTestId } = render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );

    const previousButton = getByTestId("previous-button");
    expect(previousButton).toBeDisabled();
  });

  it("renders next button", () => {
    const currentPage = 2;
    const totalPages = 5;

    const { getByTestId } = render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = getByTestId("next-button");
    expect(nextButton).toBeInTheDocument();
  });

});
