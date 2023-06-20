import { useState, useEffect } from "react";
import { createApiCharacterRepository } from "../../infra/ApiCharacterRepository";
import { getSuggestions } from "../get/getSuggestions";
import { Character } from "../../domain/character";
import { Result } from "../../domain/result";

export function searchBarUseCase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState<Result[]>([]);
  const characterRepository = createApiCharacterRepository();
  const getSuggestionsFn = getSuggestions(characterRepository);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    setSearchTerm(inputValue);
  };

  useEffect(() => {
    let delayTimer: ReturnType<typeof setTimeout>;
    const fetchSuggestions = async () => {
      if (searchTerm) {
        const characterResults: Character = await getSuggestionsFn(searchTerm);
        setCharacters(characterResults.results);
        clearTimeout(delayTimer);
      } else {
        setCharacters([]);
        setSearchTerm("");
      }
    };
    if (searchTerm) {
      delayTimer = setTimeout(fetchSuggestions, 600);
    }
    return () => {
      clearTimeout(delayTimer);
    };
  }, [searchTerm]);

  return {
    searchTerm,
    characters,
    handleChange,
  };
}
