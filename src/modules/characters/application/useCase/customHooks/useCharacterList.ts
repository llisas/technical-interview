import { useState } from "react";
import { Character } from "../../../domain/character";

interface CharacterListUseCaseProps {
  characters: Character[];
}

export function useCharacterList({ characters }: CharacterListUseCaseProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleOpenModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    selectedCharacter,
    handleOpenModal,
    handleCloseModal,
    characters,
  };
}
