import React from 'react';
import { Result } from '../modules/characters/domain/result';

type CharacterCardProps = {
  character: Result;
  onClick: () => void;
}

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <div onClick={onClick}>
      <img src={character.image} alt={character.image} />
      <h2>{character.name}</h2>
    </div>
  );
};

export default CharacterCard;