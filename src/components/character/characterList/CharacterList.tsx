import React, { useState } from "react";
import { Character } from "../../../modules/characters/domain/character";
import CharacterCard from "../charaterCard/CharacterCard";
import CharacterModal from "../characterModal/CharacterModal";
import { CharacterListContainer, EmptyMessage } from "./CharacterList.styles";
import useCharacterModal from "../../../modules/characters/application/useCase/customHooks/useCharacterModal";

interface CharacterListProps {
  characters: Character[] | null | undefined;
  isSearching: boolean;
}

const CharacterList = ({ characters, isSearching }: CharacterListProps) => {
  const {
    isCharacterModalOpen,
    selectedCharacter,
    handleOpenModal,
    handleCloseModal,
  } = useCharacterModal();

  return (
    <div data-testid="character-list">
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          isOpen={isCharacterModalOpen}
          onClose={handleCloseModal}
        />
      )}

      {characters?.length === 0 && isSearching && (
        <EmptyMessage>
          <p>No characters found</p>
          <img
            src="https://decider.com/wp-content/uploads/2021/07/rick-and-morty-8.jpg?quality=75&strip=all"
            alt="No characters"
          />
        </EmptyMessage>
      )}
  
      {characters && characters.length > 0 &&
        <CharacterListContainer>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => handleOpenModal(character)}
            />
          ))}
        </CharacterListContainer>
      }
    </div>
  );
};

export default CharacterList;
