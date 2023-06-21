import { useState, useEffect, useRef } from "react";
import { createApiCharacterRepository } from "../../infra/ApiCharacterRepository";
import { getSuggestions } from "../get/getSuggestions";
import { Character } from "../../domain/character";
import { Result } from "../../domain/result";

export function useSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Character>();
  const characterRepository = createApiCharacterRepository();
  const getSuggestionsFn = getSuggestions(characterRepository);
  const timerRef = useRef<NodeJS.Timeout>();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    setSearchTerm(inputValue);
    clearTimeout(timerRef.current);
  };

  const fetchSuggestions = async () => {
    if (searchTerm) {
      const characterResults: Character = await getSuggestionsFn(searchTerm);
      setSuggestions(characterResults);
    }
  };
 
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      fetchSuggestions();
    }, 400);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [searchTerm]);
  

  return {
    searchTerm,
    suggestions,
    handleChange,
  };
}
