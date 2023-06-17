import ReactModal from "react-modal";
import React, { ReactNode } from 'react';
import { Result } from "../modules/characters/domain/result";

type CharacterModalProps =  {
  character: Result;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterModal = ({ character, isOpen, onClose }: CharacterModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      <button onClick={onClose}>Cerrar</button>
      <p></p>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.type}</h2>
      <h2>{character.origin.name}</h2>
    </ReactModal>
  );
};

export default CharacterModal;
