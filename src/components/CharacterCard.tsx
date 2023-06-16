import React from 'react';
import { Character } from '../domain/characterRepository';

type CharacterCardProps = {
  character: Character;
  onClick: () => void;
}

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <div onClick={onClick}>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
    </div>
  );
};

export default CharacterCard;