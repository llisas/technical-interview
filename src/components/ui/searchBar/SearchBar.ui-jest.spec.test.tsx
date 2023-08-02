import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../../../components/ui/searchBar/SearchBar";

describe("SearchBar", () => {
  it("renders the SearchBar component", () => {
    const mockOnChange = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchBar  onChange={mockOnChange} />
    );

    const input = getByPlaceholderText(
      "Search characters..."
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Rick" } });

    expect(input.value).toBe("Rick");
  });

  it("updates the searchTerm when typing in the input", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar  onChange={mockOnChange} />
    );

    const input = getByPlaceholderText(
      "Search characters..."
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Rick" } });

    expect(input.value).toBe("Rick");
  });
});
