import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CharacterList from "@/components/characterList/CharacterList";
import {mockCharacter, mockCharacters} from "./__mockData__/CharacterListMockData"

describe("CharacterList", () => {
  it("Correctly displays character information in each rendered CharacterCard component", () => {
    const handleOpenModal = jest.fn();
    const handleCloseModal = jest.fn();

    const { getByText} = render(
      <CharacterList
        characters={mockCharacters}
        isModalOpen={false}
        selectedCharacter={mockCharacter}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        isSearching = {false}
      />
    );
    mockCharacters.forEach((character) => {
        const characterNameElement = getByText(character.name);
        expect(characterNameElement).toBeInTheDocument();
      });
  });

  it("Clicking on a CharacterCard should open the character details modal", () => {
    const handleOpenModal = jest.fn();
    const handleCloseModal = jest.fn();

    const { getByText } = render(
      <CharacterList
        characters={mockCharacters}
        isModalOpen={false}
        selectedCharacter={mockCharacter}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        isSearching = {false}
      />
    );

    const characterName = getByText(mockCharacter.name);
    fireEvent.click(characterName);
    expect(handleOpenModal).toHaveBeenCalledWith(mockCharacter);
  });
  
});
