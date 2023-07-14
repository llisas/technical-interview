import { useState, useEffect } from "react";
import { Response } from "src/modules/models/response";
import CharacterList from "../components/characterList/CharacterList";
import Paginator from "../components/paginator/Paginator";
import SearchBar from "../components/searchBar/SearchBar";
import { Character } from "../modules/characters/domain/character";
import PaginationAdapter from "../modules/characters/application/adapters/PaginationAdapter";
import paginationService from "../modules/characters/application/services/paginationService";
import searchService from "../modules/characters/application/services/searchService";
import ToggleButton from "../components/toogleButton/ToggleButton";
import { getServerSideProps } from "./serverSideProps/getAllCharactersServerSite";
import { RickAndMortyCharacterRepository } from "src/modules/characters/application/adapters/RickAndMortyCharacterRepository";
import React from "react";

const Home = ({ response }: { response: Response }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>("");
  const [previousePageUrl, setPreviousePageUrl] = useState<string | null>("");
  const [isSearching, setIsSearching] = useState(false);
  const [isOrderByName, setisOrderByName] = useState(false);
  const [isOrderBySpecie, setIsOrderBySpecie] = useState(false);

  const paginationAdapter = new PaginationAdapter(
    setCharacters,
    setNextPageUrl,
    setPreviousePageUrl,
    setTotalPages,
    setCurrentPage
  );
  const characterOrderRepository = new RickAndMortyCharacterRepository(
    characters
  );

  useEffect(() => {
    setAllCharacters(response.characters);
    paginationAdapter.setPaginationData(response);
    paginationAdapter.updatePaginator(response.info);
  }, [response]);

  const handleSearchChange = async (inputSearchTerm: string) => {
    setIsSearching(true);
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

  const handleNext = () => {
    setIsSearching(false);
    if (nextPageUrl) {
      setCharacters([]);
      paginationService.handleNext(nextPageUrl, currentPage, paginationAdapter);
    }
  };

  const handlePreviouse = () => {
    setIsSearching(false);
    if (previousePageUrl) {
      setCharacters([]);
      paginationService.handlePrevious(
        previousePageUrl,
        currentPage,
        paginationAdapter
      );
    }
  };

  const handleOrderByName = () => {
    setisOrderByName(!isOrderByName);
    setCharacters(characterOrderRepository.orderCharactersByName(characters));
  };

  const handleOrderBySpecie = () => {
    setIsOrderBySpecie(!isOrderBySpecie);
  };

  const resetToAllCharacters = () => {
    setCharacters(allCharacters);
    setIsSearching(false);
    paginationAdapter.setPaginationData(response);
    paginationAdapter.updatePaginator(response.info);
  };

  return (
    <div data-testid="home-component">
      <SearchBar onChange={handleSearchChange} />
      <ToggleButton
        name="Order by name"
        active={isOrderByName}
        onToggle={handleOrderByName}
      />
      <ToggleButton
        name="Order by specie"
        active={isOrderBySpecie}
        onToggle={handleOrderBySpecie}
      />
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
export { getServerSideProps };

//JAIME
///DONE
// useHome move to its compoment -> characterList
// CHANGE NAME FROM RESULT TO CHARACTER
// move to nextjs calls server site -> api folder move to pages folder using => useGetServerSiteProps
// improve variables names
// after open model navegate to character detail

//TODO
// useMemo to improve validations in Characterlist compoment ??

//NICO
//DONE
//Create  squeleton index and detailf
//Divide components character detail, remove data emphy loke Summer Smith detail

//TODO
//Create filter to order from a to z name or specie
//Test searchService andvos compo*/
