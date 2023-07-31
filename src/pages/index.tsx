import React from "react";
import { useState, useEffect } from "react";
import CharacterCardSkeleton from "../components/character/characaterCardSkeleton/CharacterCardSkeleton";
import CharacterFilter from "../components/character/characterFilter/CharacterFilter";
import CharacterList from "../components/character/characterList/CharacterList";
import Paginator from "../components/ui/paginator/Paginator";
import SearchBar from "../components/ui/searchBar/SearchBar";
import { Character } from "../modules/characters/domain/character";
import { Response } from "../modules/models/response";
import PaginationAdapter from "../modules/characters/application/adapters/PaginationAdapter";
import paginationService from "../modules/characters/application/services/paginationService";
import searchService from "../modules/characters/application/services/searchService";
import { getServerSideProps } from "./serverSideProps/getAllCharactersServerSite";
import { orderCharacters } from "src/modules/characters/application/services/characterOrder";


const Home = ({ response }: { response: Response }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [preOrderCharacters, setPreOrderCharacters] = useState<Character[]>([]);
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>("");
  const [previousePageUrl, setPreviousePageUrl] = useState<string | null>("");
  const [isSearching, setIsSearching] = useState(false);
  const [isOrderByName, setisOrderByName] = useState(false);
  const [isOrderBySpecie, setIsOrderBySpecie] = useState(false);
  const [isOrderByStatus, setIsOrderByStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // delay just to show the skeleton
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [isLoading]);

  const paginationAdapter = new PaginationAdapter(
    setCharacters,
    setPreOrderCharacters,
    setNextPageUrl,
    setPreviousePageUrl,
    setTotalPages,
    setCurrentPage
  );

  useEffect(() => {
    setAllCharacters(response.characters);
    setCharacters(response.characters);
    setPreOrderCharacters(response.characters);
    paginationAdapter.setPaginationData(response);
    paginationAdapter.updatePaginator(response.info);
  }, [response]);

  useEffect(() => {
    if (characters.length > 0) {
      setCharacters(
        orderCharacters(
          preOrderCharacters,
          characters,
          isOrderBySpecie,
          isOrderByName,
          isOrderByStatus
        )
      );
    }
  }, [isOrderBySpecie, isOrderByName, isOrderByStatus, preOrderCharacters]);

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
    setIsLoading(true);
    if (nextPageUrl) {
      paginationService.handleNext(nextPageUrl, currentPage, paginationAdapter);
    }
  };

  const handlePreviouse = () => {
    setIsSearching(false);
    setIsLoading(true);
    if (previousePageUrl) {
      paginationService.handlePrevious(
        previousePageUrl,
        currentPage,
        paginationAdapter
      );
    }
  };

  const handleOrderByName = () => {
    setisOrderByName(!isOrderByName);
  };
  const handleOrderBySpecie = () => {
    setIsOrderBySpecie(!isOrderBySpecie);
  };
  const handleOrderByStatus = () => {
    setIsOrderByStatus(!isOrderByStatus);
  };

  const resetToAllCharacters = () => {
    setCharacters(allCharacters);
    setIsSearching(false);
    paginationAdapter.setPaginationData(response);
    paginationAdapter.updatePaginator(response.info);
  };

  return (
    <>
 <div data-testid="home-component">
        <SearchBar onChange={handleSearchChange} />
        <CharacterFilter
          isOrderByName={isOrderByName}
          isOrderBySpecie={isOrderBySpecie}
          isOrderByStatus={isOrderByStatus}
          handleOrderByName={handleOrderByName}
          handleOrderBySpecie={handleOrderBySpecie}
          handleOrderByStatus={handleOrderByStatus}
        />
        {isLoading ? (
          <CharacterCardSkeleton />
        ) : (
          <CharacterList characters={characters} isSearching={isSearching} />
        )}

        {characters.length > 0 && (
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onNextClick={handleNext}
            onPreviousClick={handlePreviouse}
          />
        )}
      </div>
    </>
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

//NICO
//DONE
//Create  squeleton index and detailf
//Divide components character detail, remove data emphy loke Summer Smith detail
//Create filter to order from a to z name or specie
//Test searchService andvos compo*/
//TODO

//DAVID
//DONE
//TEST  ORDERSEARCH, SKELETON, FORMATDATE, getCharacterById, getAllCharacters <-- PRIORIDAD
//ADD DEAD OR ALIVE AND ITS FILTER
//MODO noche usando context.provider -> SAVE STATE IN LOCAL STORAGE
//COMPOMENTS -> ADD FOLDERS LIKE CHARACTER

//TODO
//TRADUCCIONES
