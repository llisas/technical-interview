import { useState } from "react";
import { Result } from "../../domain/Result";

interface CharacterListUseCaseProps {
  characters: Result[];
}

export function characterListUseCase({ characters }: CharacterListUseCaseProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Result | null>(null);

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
    characters,
  };
}
