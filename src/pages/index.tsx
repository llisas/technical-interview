import { useState } from "react";
import CharacterList from "../components/characterList/CharacterList";
import Paginator from "../components/paginator/Paginator";
import SearchBar from "../components/searchBar/SearchBar";

import { Result } from "../modules/characters/domain/result";
import PaginationAdapter from "../modules/characters/application/adapters/PaginationAdapter";
import paginationService from "../modules/characters/application/services/paginationService";
import searchService from "../modules/characters/application/services/searchService";

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
                                                            
  const handleSearchChange = async (searchTerm: string) => {
    searchService.handleSearchChange(searchTerm, setIsSearching, paginationAdapter);
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
      <CharacterList
        characters={characters}
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
    </div>
  );
};

export default Home;



//DONE
// useHome move to its compoment -> characterList




//TODO
// improve variables names
// move to nextjs calls server site -> api folder move to pages folder using => useGetServerSiteProps 
// test searchService

// useMemo to improve validations in Characterlist compoment
// after open model navegate to character detail 