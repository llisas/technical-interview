import React from "react";
import { Character } from "../../../modules/characters/domain/character";
import {
  CharacterCardContainer,
  CharacterImageWrapper,
  CharacterImage,
  CharacterName,
  StatusCircle
} from "./CharacterCard.styles";

type CharacterCardProps = {
  character: Character;
  onClick: () => void;
};

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <CharacterCardContainer onClick={onClick}>
      <CharacterImageWrapper>
        <CharacterImage src={character.image} alt={character.image} />
      </CharacterImageWrapper>
      <CharacterName>{character.name.toUpperCase()}</CharacterName>
      <span>{character.species.toUpperCase()}</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StatusCircle status={character.status} />
        <span>{character.status.toUpperCase()}</span>
      </div>
     
    </CharacterCardContainer>
  );
};
export default CharacterCard;
