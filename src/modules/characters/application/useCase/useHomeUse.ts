import { useState, useEffect } from "react";
import { Result } from "../../domain/result";
import { getCharacter } from "../get/getCharacter"
import { createApiCharacterRepository } from "../../../../modules/characters/infra/ApiCharacterRepository";
import { Character } from "../../domain/character";

export function homeUseCase() {
  const characterRepository = createApiCharacterRepository();
  const getPageResults = getCharacter(characterRepository);

  const [characters, setCharacters] = useState<Result[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Result | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCharacters = async () => {
    const characterResults: Character = await getPageResults(currentPage);
    setCharacters(characterResults.results);
    setTotalPages(characterResults.info.pages);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleOpenModal = (character: Result) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  return {
    isModalOpen,
    selectedCharacter,
    handleOpenModal,
    handleCloseModal,
    characters,
    currentPage,
    totalPages,
    onPageChange: handlePageChange,
  };
}
