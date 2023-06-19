import { useState } from "react";
import { createApiCharacterRepository } from "../../infra/ApiCharacterRepository";
import { getSuggestions } from "../get/getSuggestions";
import { Character } from "../../domain/character";
import { Result } from "../../domain/result";

export function searchBarUseCase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState<Result[]>([]);

  const characterRepository = createApiCharacterRepository();
  const getSuggestionsFn = getSuggestions(characterRepository);

  const handleChange = async (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value) {
      setSearchTerm(event.currentTarget.value);
      const characterResults: Character = await getSuggestionsFn(
        event.currentTarget.value
      );
      setCharacters(characterResults.results);
    } else {
      setSearchTerm("");
      setCharacters([]);
    }
  };

  return {
    searchTerm,
    characters,
    handleChange,
  };
}
