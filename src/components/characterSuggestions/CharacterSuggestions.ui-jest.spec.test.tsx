import React from "react";
import { render } from "@testing-library/react";
import CharacterSuggestions from "@/components/characterSuggestions/CharacterSuggestions";
import { Result } from "src/modules/characters/domain/result";

const mockSuggestions: Result[] = [
  { id: 1, name: "Rick", status: "alive", species: "human", type: "", gender: "", origin: { name: "", url: "" }, location: { name: "", url: "" }, image: "", episode: [], url: "", created: "" },
  { id: 2, name: "Morty", status: "alive", species: "human", type: "", gender: "", origin: { name: "", url: "" }, location: { name: "", url: "" }, image: "", episode: [], url: "", created: "" },
];

describe("CharacterSuggestions", () => {
  it("Renders the list of suggestions correctly", () => {
    const { getByTestId } = render(
      <CharacterSuggestions suggestions={mockSuggestions} />
    );

    const suggestionList = getByTestId("suggestion-list");
    expect(suggestionList.children.length).toBe(mockSuggestions.length);
  });

  it("Does not render anything if there are no suggestions", () => {
    const { container } = render(
      <CharacterSuggestions suggestions={[]} />
    );

    expect(container.firstChild).toBeNull();
  });
});
