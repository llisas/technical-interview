import React from "react";
import { useSearchBar } from "../../modules/characters/application/useCase/useSearchBar";
import {
  SearchBarContainer,
  SearchContainer,
  SearchInput,
} from "./SearchBar.styles";

const SearchBar = () => {
  const { searchTerm, suggestions, handleChange } = useSearchBar();
  console.log("AAAAAAAAA" , suggestions)
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
    </SearchBarContainer>
  );
};

export default SearchBar;
