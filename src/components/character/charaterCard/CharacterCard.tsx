import React from "react";
import { Character } from "../../../modules/characters/domain/character";
import { useDarkModeContext } from "src/context/darkMode/DarkModeContext";
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
  const { isDarkModeContext } = useDarkModeContext();

  return (
    <CharacterCardContainer
      darkMode={isDarkModeContext}
      onClick={onClick}
      
    >
      <CharacterImageWrapper>
        <CharacterImage src={character.image} alt={character.image} />
      </CharacterImageWrapper>
      <CharacterName
        darkMode={isDarkModeContext}
      >
        {character.name.toUpperCase()}
      </CharacterName>
      <span>{character.species.toUpperCase()}</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StatusCircle status={character.status} />
        <span>{character.status.toUpperCase()}</span>
      </div>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
