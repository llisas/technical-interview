import { useState, useEffect } from "react";
import { Result } from "../../../domain/result";

const useHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
    searchTerm,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useHome;
