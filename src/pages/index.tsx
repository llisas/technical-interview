import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import SearchBar from "../components/SearchBar";
import Paginator from "../components/Paginator"
import { Character } from "../modules/characters/domain/character";
import { Result } from "../modules/characters/domain/result";
import { createApiCharacterRepository } from "../modules/characters/infra/ApiCharacterRepository";
import { getAllCharacters } from "src/modules/characters/application/get/getAllCharacters";

export default function Home() {
  const characterRepository = createApiCharacterRepository();
  const getAllCharactersFn = getAllCharacters(characterRepository);
  const [characters, setCharacters] = useState<Result[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = async () => {
    const characterResults: Character = await getAllCharactersFn();
    setCharacters(characterResults.results);
    
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <SearchBar/>
      <CharacterList characters={characters} />
      <Paginator
        currentPage={1}
        totalPages={12}
        onPageChange={handlePageChange}
      />
    </>
  );
}
