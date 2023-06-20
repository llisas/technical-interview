import React from "react";
import CharacterSuggestions from "./CharacterSuggestions";
import { searchBarUseCase } from "../modules/characters/application/useCase/searchBarUseCase";
import {
  SearchBarContainer,
  SearchContainer,
  SearchInput,
} from "../styles/SearchBar.styles";

const SearchBar = () => {
  const { searchTerm, characters, handleChange } = searchBarUseCase();

  return (
    <SearchBarContainer>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </SearchContainer>
      <CharacterSuggestions suggestions={characters} />
    </SearchBarContainer>
  );
};

export default SearchBar;
