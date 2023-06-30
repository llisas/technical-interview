import { useState } from "react";
import CharacterList from "../components/characterList/CharacterList";
import Paginator from "../components/paginator/Paginator";
import SearchBar from "@/components/searchBar/SearchBar";
import useHome from "src/modules/characters/application/useCase/customHooks/useHome";
import {
  getSuggestions,
  getCharactersByUrl,
} from "../modules/characters/infra/http/api";
import { Response } from "src/modules/characters/domain/response";
import { Result } from "src/modules/characters/domain/result";
import PaginationAdapter from "../modules/characters/application/adapters/PaginationAdapter";

const Home = () => {
  const [characters, setCharacters] = useState<Result[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>("");
  const [previousePageUrl, setPreviousePageUrl] = useState<string | null>("");

  const paginationAdapter = new PaginationAdapter(
    setCharacters,
    setNextPageUrl,
    setPreviousePageUrl,
    setTotalPages,
    setCurrentPage
  );

  const {
    isModalOpen,
    selectedCharacter,
    searchTerm,
    handleOpenModal,
    handleCloseModal,
  } = useHome();

  const handleSearchChange = async (event: string) => {
    const response: Response = await getSuggestions(event);
    paginationAdapter.updatePaginator(response.info);
    paginationAdapter.setPaginationData(response);
  };

  const handleNext = async () => {
    if (nextPageUrl) {
      const response: Response = await getCharactersByUrl(nextPageUrl);
      paginationAdapter.updateCurrentPage(currentPage + 1);
      paginationAdapter.setPaginationData(response);
    }
  };

  const handlePreviouse = async () => {
    if (previousePageUrl) {
      const response: Response = await getCharactersByUrl(previousePageUrl);
      paginationAdapter.updateCurrentPage(currentPage - 1);
      paginationAdapter.setPaginationData(response);
    }
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} onChange={handleSearchChange} />
      <CharacterList
        characters={characters}
        isModalOpen={isModalOpen}
        selectedCharacter={selectedCharacter}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onNextClick={handleNext}
        onPreviousClick={handlePreviouse}
      />
    </>
  );
};

export default Home;
