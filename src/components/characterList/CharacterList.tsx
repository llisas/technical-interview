import React from "react";
import { Result } from "../../modules/characters/domain/result";
import CharacterCard from "../charaterCard/CharacterCard";
import CharacterModal from "../characterModal/CharacterModal";
import { CharacterListContainer } from "./CharacterList.styles";

interface CharacterListProps {
  characters: Result[] | null | undefined;
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
      {characters && characters.length > 0 ? (
        <CharacterListContainer>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => handleOpenModal(character)}
            />
          ))}
        </CharacterListContainer>
      ) : (
        <div>There is nothing here</div>
      )}
    </>
  );
};

export default CharacterList;
