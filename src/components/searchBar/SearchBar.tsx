import React from "react";
import { SearchBarContainer, SearchContainer, SearchInput } from './SearchBar.styles';
import useSearchBar from "../../modules/characters/application/useCase/customHooks/useSearchBar";

interface SearchBarProps {
  searchTerm: string;
  onChange: (searchTerm: string) => void;
}

const SearchBar = ({ searchTerm, onChange }: SearchBarProps) => {
  const { searchTerm: inputValue, handleInputChange } = useSearchBar(searchTerm, onChange);

  return (
    <SearchBarContainer>
      <SearchContainer>
        <SearchInput
          id="search-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search characters..."
        />
      </SearchContainer>
    </SearchBarContainer>
  );
  
};

export default SearchBar;

