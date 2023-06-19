import React from "react";
import { Result } from "../modules/characters/domain/result";
import CharacterCard from "@/components/CharacterCard";
import CharacterModal from "./CharacterModal";
import { CharacterListContainer } from "../styles/CharacterList.styles";

interface CharacterListProps {
  characters: Result[];
  isModalOpen: boolean;
  selectedCharacter: Result | null;
  handleOpenModal: (character: Result) => void;
  handleCloseModal: () => void;
}

const CharacterList = ({
  characters,
  isModalOpen,
  selectedCharacter,
  handleOpenModal,
  handleCloseModal,
}: CharacterListProps) => {
  return (
    <>
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
      <CharacterListContainer>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => handleOpenModal(character)}
          />
        ))}
      </CharacterListContainer>
    </>
  );
};

export default CharacterList;
