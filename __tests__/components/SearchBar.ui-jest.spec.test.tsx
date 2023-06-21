import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";

describe("SearchBar", () => {
  it("renders without errors", () => {
    render(<SearchBar />);
  });

  it("updates the searchTerm when typing in the input", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText("Search...") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Rick" } });
    expect(input.value).toBe("Rick");
  });
});
