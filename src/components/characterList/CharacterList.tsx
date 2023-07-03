import React from "react";
import { Result } from "../../modules/characters/domain/result";
import CharacterCard from "../charaterCard/CharacterCard";
import CharacterModal from "../characterModal/CharacterModal";
import { CharacterListContainer, EmptyMessage } from "./CharacterList.styles";

interface CharacterListProps {
  characters: Result[] | null | undefined;
  isModalOpen: boolean;
  selectedCharacter: Result | null;
  handleOpenModal: (character: Result) => void;
  handleCloseModal: () => void;
  isSearching: boolean;
}


const CharacterList = ({
  characters,
  isModalOpen,
  selectedCharacter,
  handleOpenModal,
  handleCloseModal,
  isSearching,
}: CharacterListProps) => {


  return (
    <div  data-testid="character-list" >
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
      {characters?.length === 0 && isSearching && (
        <EmptyMessage>
          <p>No characters found </p>
          <img
            src="https://decider.com/wp-content/uploads/2021/07/rick-and-morty-8.jpg?quality=75&strip=all"
            alt="No characters"
          />
        
        </EmptyMessage>
      )}
      { characters && characters.length > 0 && (
        <CharacterListContainer>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => handleOpenModal(character)}
            />
          ))}
        </CharacterListContainer>
      )}
    </div>
  );
};

export default CharacterList;
