import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CharacterList from "@/components/CharacterList";

const mockCharacter = {
  id: 1,
  name: "Rick",
  status: "alive",
  species: "human",
  type: "",
  gender: "male",
  origin: {
    name: "Earth",
    url: "",
  },
  location: {
    name: "Earth",
    url: "",
  },
  image: "",
  episode: [],
  url: "",
  created: "",
};

const mockCharacters = [
  mockCharacter,
  {
    id: 2,
    name: "Morty",
    status: "alive",
    species: "human",
    type: "",
    gender: "male",
    origin: {
      name: "Earth",
      url: "",
    },
    location: {
      name: "Earth",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  },
];

describe("CharacterList", () => {
  it("Renders CharacterCard components for each character", () => {
    const handleOpenModal = jest.fn();
    const handleCloseModal = jest.fn();

    const { getByText} = render(
      <CharacterList
        characters={mockCharacters}
        isModalOpen={false}
        selectedCharacter={mockCharacter}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
    );
    mockCharacters.forEach((character) => {
        const characterNameElement = getByText(character.name);
        expect(characterNameElement).toBeInTheDocument();
      });
  });

  it("Clicking on a CharacterCard", () => {
    const handleOpenModal = jest.fn();
    const handleCloseModal = jest.fn();

    const { getByText } = render(
      <CharacterList
        characters={mockCharacters}
        isModalOpen={false}
        selectedCharacter={mockCharacter}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
    );

    const characterName = getByText(mockCharacter.name);
    fireEvent.click(characterName);

    expect(handleOpenModal).toHaveBeenCalledWith(mockCharacter);
  });
  
});
