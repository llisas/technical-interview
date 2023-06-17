import React from "react";
import CharacterSuggestions from "./CharacterSuggestions";
import { searchBarUseCase } from "../modules/characters/application/useCase/searchBarUseCase";

const SearchBar = () => {
  const { searchTerm, characters, handleChange } = searchBarUseCase();

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <br />
      {characters?.map((character) => (
        <CharacterSuggestions key={character.id} suggestions={character} />
      ))}
    </>
  );
};

export default SearchBar;
