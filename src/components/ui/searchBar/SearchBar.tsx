import React from "react";
import { SearchBarContainer, SearchContainer, SearchInput } from './SearchBar.styles';
import useSearchBar from "../../../modules/characters/application/useCase/customHooks/useSearchBar";
import { useDarkModeContext } from "src/context/darkMode/DarkModeContext";
interface SearchBarProps {
  onChange: (searchTerm: string) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  const { searchTerm: inputValue, handleInputChange } = useSearchBar(onChange);

  const { isDarkModeContext } = useDarkModeContext();
  console.log("ESTA DARKMODE ACTIVO",isDarkModeContext)
  return (
    <SearchBarContainer data-testid="search-bar">
      <SearchContainer>
        <SearchInput
          id="search-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search characters..."
          isDarkMode= {isDarkModeContext}
        />
      </SearchContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
