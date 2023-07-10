import { useState, useEffect } from "react";
import { Response } from "src/modules/models/response";
import CharacterList from "../components/characterList/CharacterList";
import Paginator from "../components/paginator/Paginator";
import SearchBar from "../components/searchBar/SearchBar";
import { Character } from "../modules/characters/domain/character";
import PaginationAdapter from "../modules/characters/application/adapters/PaginationAdapter";
import paginationService from "../modules/characters/application/services/paginationService";
import searchService from "../modules/characters/application/services/searchService";
import { getServerSideProps } from "./serverSideProps/getAllCharactersServerSite";

const Home = ({ response }: { response: Response}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
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

  useEffect(() => {
    setAllCharacters(response.characters);
    paginationAdapter.setPaginationData(response);
    paginationAdapter.updatePaginator(response.info);
  }, [response]);

  const handleSearchChange = async (inputSearchTerm: string) => {
    if (inputSearchTerm) {
      searchService.handleSearchChange(
        inputSearchTerm,
        setIsSearching,
        paginationAdapter
      );
    } else {
      resetToAllCharacters();
    }
  };

  const resetToAllCharacters = () => {
    setCharacters(allCharacters);
    paginationAdapter.setPaginationData(response);
    paginationAdapter.updatePaginator(response.info);
  };

  const handleNext = () => {
    if (nextPageUrl) {
      paginationService.handleNext(nextPageUrl, currentPage, paginationAdapter);
    }
  };

  const handlePreviouse = () => {
    if (previousePageUrl) {
      paginationService.handlePrevious(
        previousePageUrl,
        currentPage,
        paginationAdapter
      );
    }
  };

  return (
    <div data-testid="home-component">
      <SearchBar onChange={handleSearchChange} />
      <CharacterList characters={characters} isSearching={isSearching} />
      {characters.length > 0 && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onNextClick={handleNext}
          onPreviousClick={handlePreviouse}
        />
      )}
    </div>
  );
};

export default Home;
export {getServerSideProps};



///DONE
// useHome move to its compoment -> characterList
// CHANGE NAME FROM RESULT TO CHARACTER
// move to nextjs calls server site -> api folder move to pages folder using => useGetServerSiteProps
// improve variables names
// after open model navegate to character detail

//TODO
// test searchService
// useMemo to improve validations in Characterlist compoment
