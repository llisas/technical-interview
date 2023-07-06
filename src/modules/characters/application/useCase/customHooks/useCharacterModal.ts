import { useState } from "react";
import { Character } from "../../../domain/character";

const useCharacterModal = () => {
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleOpenModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsCharacterModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCharacterModalOpen(false);
  };

  return {
    isCharacterModalOpen,
    selectedCharacter,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useCharacterModal;
