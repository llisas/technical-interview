import React from "react";
import { Result } from "../modules/characters/domain/result";
import {
  Container,
  List,
  ListItem,
} from "../styles/CharacterSuggestions.styles";
interface CharacterSuggestionsProps {
  suggestions: Result[];
}

const CharacterSuggestions = ({ suggestions }: CharacterSuggestionsProps) => {
  if (suggestions?.length === 0) {
    return null; // No hay sugerencias, no se renderiza la capa
  }

  return (
    <Container>
      <List data-testid="suggestion-list">
        {suggestions?.map((character) => (
          <ListItem key={character.id}>{character.name}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CharacterSuggestions;
