import { useState, useEffect } from "react";
import { Result } from "../../../domain/result";

const useHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Result | null>(
    null
  );

  const handleOpenModal = (character: Result) => {
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
  };
};

export default useHome;
