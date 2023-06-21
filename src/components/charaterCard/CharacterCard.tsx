import React from "react";
import { Result } from "../../modules/characters/domain/result";
import {
  CharacterCardContainer,
  CharacterImageWrapper,
  CharacterImage,
  CharacterName,
} from "./CharacterCard.styles";

type CharacterCardProps = {
  character: Result;
  onClick: () => void;
};

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <CharacterCardContainer onClick={onClick}>
      <CharacterImageWrapper>
        <CharacterImage src={character.image} alt={character.image} />
      </CharacterImageWrapper>
      <CharacterName>{character.name}</CharacterName>
      <span>{character.species}</span>
    </CharacterCardContainer>
  );
};
export default CharacterCard;
