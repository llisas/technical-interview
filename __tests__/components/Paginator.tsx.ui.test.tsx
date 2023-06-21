import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Paginator from "@/components/Paginator";

describe("Paginator", () => {
  const mockOnPageChange = jest.fn();

  it("Renders current page and total pages correctly", () => {
    const currentPage = 2;
    const totalPages = 5;

    const { getByText } = render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );

    expect(getByText(`Page ${currentPage} of ${totalPages}`)).toBeInTheDocument();
  });

  it("Calls onPageChange with the previous page number when previous button is clicked", () => {
    const currentPage = 3;
    const totalPages = 5;

    const { getByTestId } = render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );

    const previousButton = getByTestId("previous-button");
    fireEvent.click(previousButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(currentPage - 1);
  });

  it("Calls onPageChange with the next page number when next button is clicked", () => {
    const currentPage = 3;
    const totalPages = 5;

    const { getByTestId } = render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = getByTestId("next-button");
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(currentPage + 1);
  });

  it("Disables previous button when on first page", () => {
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
});
