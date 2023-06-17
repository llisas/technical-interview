import React from "react";
import { Result } from "../modules/characters/domain/result";

interface CharacterSuggestionsProps {
  suggestions: Result;
}

const CharacterSuggestions = (props: CharacterSuggestionsProps) => {
  const { suggestions } = props;

  return (
    <div>
      <p>{suggestions.name}</p>
    </div>
  );
};

export default CharacterSuggestions;
