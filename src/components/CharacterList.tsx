import { useState, useEffect } from "react";
import CharacterModal from "./CharacterModal";
import CharacterCard from "@/components/CharacterCard";
import { Result } from "../modules/characters/domain/Result";
import { characterListUseCase } from "../modules/characters/application/useCase/CharacterListUseCase";
interface CharacterList {
  characters: Result[];
}

export default function CharacterList({ characters }: CharacterList) {
  const { isModalOpen, selectedCharacter, handleOpenModal, handleCloseModal } =
  characterListUseCase({ characters });

  return (
    <div>
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={() => handleOpenModal(character)}
        />
      ))}
    </div>
  );
}
