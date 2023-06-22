import React from "react";
import{SearchBarContainer,SearchContainer,SearchInput} from './SearchBar.styles'
interface SearchBarProps {
  searchTerm: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}



const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onChange }) => {
  return (
    <SearchBarContainer>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={onChange}
          placeholder="Search characters..."
        />
      </SearchContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
