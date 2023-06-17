import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import SearchBar from "../components/SearchBar";
import { Character } from "../modules/characters/domain/character";
import { Result } from "../modules/characters/domain/result";
import { createApiCharacterRepository } from "../modules/characters/infra/ApiCharacterRepository";
import { getAllCharacters } from "src/modules/characters/application/get/getAllCharacters";

export default function Home() {
  const characterRepository = createApiCharacterRepository();
  const getAllCharactersFn = getAllCharacters(characterRepository);
  const [characters, setCharacters] = useState<Result[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterResults: Character = await getAllCharactersFn();
      setCharacters(characterResults.results);
    };
    fetchCharacters();
  }, []);

  return (
    <>
      <SearchBar/>
      <CharacterList characters={characters} />
    </>
  );
}
