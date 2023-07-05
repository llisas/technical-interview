import { useState } from "react";
import { Result } from "../../../domain/result";

const useCharacterModal = () => {
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Result | undefined>(undefined);

  const handleOpenModal = (character: Result) => {
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
