import { useState } from "react";
import CharacterList from "../components/characterList/CharacterList";
import Paginator from "../components/paginator/Paginator";
import SearchBar from "@/components/searchBar/SearchBar";
import useHome from "src/modules/characters/application/useCase/customHooks/useHome";
import { Result } from "src/modules/characters/domain/result";
import PaginationAdapter from "../modules/characters/application/adapters/PaginationAdapter";
import paginationService from "src/modules/characters/application/services/paginationService";
import searchService from "src/modules/characters/application/services/searchService";

const Home = () => {
  const [characters, setCharacters] = useState<Result[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>("");
  const [previousePageUrl, setPreviousePageUrl] = useState<string | null>("");
  const [isSearching, setIsSearching] = useState(false);

  const paginationAdapter = new PaginationAdapter(
    setCharacters,
    setNextPageUrl,
    setPreviousePageUrl,
    setTotalPages,
    setCurrentPage
  );

  const { isModalOpen, selectedCharacter, handleOpenModal, handleCloseModal } =
    useHome();

  //BUSQUEDA PODRIA SER UN SEARCHADAPATER ??
  const handleSearchChange = async (event: string) => {
    searchService.handleSearchChange(event, setIsSearching, paginationAdapter);
  };

  //PAGINADOR
  const handleNext =  () => {
    if (nextPageUrl) {
      paginationService.handleNext(nextPageUrl, currentPage, paginationAdapter);
    }
  };

  const handlePreviouse =  () => {
    if (previousePageUrl) {
      paginationService.handlePrevious(previousePageUrl, currentPage, paginationAdapter);
    }
  };

  return (
    <>
      <SearchBar searchTerm={""} onChange={handleSearchChange} />
      <CharacterList
        characters={characters}
        isModalOpen={isModalOpen}
        selectedCharacter={selectedCharacter}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        isSearching={isSearching}
      />
      {characters.length > 0 && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onNextClick={handleNext}
          onPreviousClick={handlePreviouse}
        />
      )}
    </>
  );
};

export default Home;
