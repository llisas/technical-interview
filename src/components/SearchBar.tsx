import React, { useState } from "react";


import { SuggestionService } from "../application/suggestionService";
import { Suggestion } from "../domain/characterSuggestionRepository";
import { RickAndMortySuggestionApi } from "../infrastructure/api/rickAndMortySuggestionsApi";


import CharacterSuggestions from "./CharacterSuggestions";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar = (onSearch : SearchBarProps) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const suggestionRepository = new RickAndMortySuggestionApi();
  const suggestionService = new SuggestionService(suggestionRepository);

  const handleChange = async (event:  React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
    const suggestions =  await suggestionService.getSuggestions(event.currentTarget.value) ;
    console.log("suggestions=>", suggestions);
  };

  return (
      <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <br></br>
      <CharacterSuggestions></CharacterSuggestions>
      </>
      )
};

export default SearchBar;
