// application/searchBarService.ts

import { Character } from "../../domain/Character";
import { Result } from "../../domain/Result";

interface SearchBarServiceProps {
  getSuggestionsFn: (value: string) => Promise<Character>;
}

export const createSearchBarService = (
  getSuggestionsFn: (value: string) => Promise<Character>
) => {
  const handleChange = async (
    value: string,
    setCharacters: React.Dispatch<React.SetStateAction<Result[]>>,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setSearchTerm(value);

    if (value) {
      const characterResults: Character = await getSuggestionsFn(value);
      setCharacters(characterResults.results);
    } else {
      setCharacters([]);
    }
  };

  return { handleChange };
};
