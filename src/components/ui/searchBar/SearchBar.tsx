import React, { useEffect, useState } from "react";
import {
  SearchBarContainer,
  SearchContainer,
  SearchInput,
} from "./SearchBar.styles";
import useSearchBar from "../../../modules/characters/application/useCase/customHooks/useSearchBar";
import { useDarkModeContext } from "src/context/darkMode/DarkModeContext";
import i18n from "../../../../i18n";
import { useTranslation } from "react-i18next"; 

interface SearchBarProps {
  onChange: (searchTerm: string) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  const { searchTerm: inputValue, handleInputChange } = useSearchBar(onChange);
  const { isDarkModeContext } = useDarkModeContext();
  const [searchi18n, setsearchi18n] = useState("");

  const { t } = useTranslation();
  useEffect(() => {
    setsearchi18n(i18n.t("searchCharacter"));
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setsearchi18n(t("searchCharacter"));
    }
  }, [t]); 
  return (
    <SearchBarContainer data-testid="search-bar">
      <SearchContainer>
        <SearchInput
          id="search-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={searchi18n}
          isDarkMode={isDarkModeContext}
        />
      </SearchContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
