import { useState } from "react";
import { createApiCharacterRepository } from "../../../../modules/characters/infra/ApiCharacterRepository";
import { getSuggestions } from "../../../../modules/characters/application/get/getSuggestions";
import { Character } from "../../../../modules/characters/domain/Character";
import { Result } from "../../../../modules/characters/domain/Result";


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
