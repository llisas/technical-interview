import { useState, useEffect } from "react";
import { Result } from "../../domain/result";
import { getCharacter } from "../get/getCharacter";
import { getSuggestions } from "../get/getSuggestions";
import {getCharactersByUrl} from "../get/getCharactersByUrl"
import { createApiCharacterRepository } from "../../infra/ApiCharacterRepository";
import { Character } from "../../domain/character";

const useHome = () => {
  
  const characterRepository = createApiCharacterRepository();
  const getSearchSuggestions = getSuggestions(characterRepository);
  const getSuggestionsByUrl = getCharactersByUrl(characterRepository);
  const getPageResults = getCharacter(characterRepository);

  const [characters, setCharacters] = useState<Result[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Result | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const [searchTotalPages, setSearchTotalPages] = useState(0);
  const [searchCurrentPage, setSearchCurrentPage] = useState(1);
  const [searchNextUrlPage, setSearchNextUrlPage] = useState<string | null>('');
  const [searchPreviouseUrlPage, setSearchPrevoiuseUrlPage] = useState<string | null>('');

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const fetchCharacters = async () => {
    const characterResults: Character = await getPageResults(currentPage);
    setCharacters(characterResults.results);
    setTotalPages(characterResults.info.pages);
  };

  const fetchSuggestionsByUrl = async (url: string) => {
    const response: Character = await getSuggestionsByUrl(url); 
    setSearchResults(response.results);
    setSearchTotalPages(response.info.pages);
    setSearchNextUrlPage(response.info.next);
    setSearchPrevoiuseUrlPage(response.info.prev);
  };

  const handleSearch = async () => {
    const response = await getSearchSuggestions(searchTerm)
    setSearchResults(response.results);
    setSearchTotalPages(response.info.pages);
    setSearchNextUrlPage(response.info.next);
    setSearchPrevoiuseUrlPage(response.info.prev);
    setSearchCurrentPage(1); 
  };

  const handleOpenModal = (character: Result) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (page: number, direction: 'next' | 'back') => {
    if (searchTerm) {
      if (direction === 'next' && searchNextUrlPage) {
        fetchSuggestionsByUrl(searchNextUrlPage);
      } else if (direction === 'back' && searchPreviouseUrlPage) {
        fetchSuggestionsByUrl(searchPreviouseUrlPage);
      }
      setSearchCurrentPage(page);
    } else {
      setCurrentPage(page);
    }
  };

  const currentResults = searchTerm ? searchResults : characters;
  const currentTotalPages = searchTerm ? searchTotalPages : totalPages;
  const currentCurrentPage = searchTerm ? searchCurrentPage : currentPage;

  return {
    characters: currentResults,
    isModalOpen,
    selectedCharacter,
    currentPage: currentCurrentPage,
    totalPages: currentTotalPages,
    searchTerm,
    setSearchTerm,
    handleSearchChange,
    handleOpenModal,
    handleCloseModal,
    onPageChange: handlePageChange
  };
};

export default useHome;