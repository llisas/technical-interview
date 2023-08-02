import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CharacterList from "@/components/character/characterList/CharacterList";
import {
  mockCharacter,
  mockCharacters,
} from "./__mockData__/CharacterListMockData";

describe("CharacterList", () => {
  it("Correctly displays character information in each rendered CharacterCard component", () => {
    const handleOpenModal = jest.fn();
    const handleCloseModal = jest.fn();

    const { getByText } = render(
      <CharacterList characters={mockCharacters} isSearching={false} />
    );
    mockCharacters.forEach((character) => {
      const characterNameElement = getByText(character.name);
      expect(characterNameElement).toBeInTheDocument();
    });
  });

  it("Al hacer clic en un CharacterCard se debe abrir el modal de detalles del personaje", () => {
    const { getByText, getByTestId } = render(
      <CharacterList characters={mockCharacters} isSearching={false} />
    );

    const characterContainer = getByTestId("character-card-container");
    fireEvent.click(characterContainer);
    const characterModalTitle = getByText(mockCharacter.name);

    expect(characterModalTitle).toBeInTheDocument();
  });
});
