import ReactModal from "react-modal";
import React, { ReactNode } from 'react';
import { Character } from "../domain/characterRepository";

type CharacterModalProps =  {
  character: Character;
  isOpen: boolean;
  onClose: () => void;
}

const CharacterModal = ({ character, isOpen, onClose }: CharacterModalProps) => {
  // Resto de la lógica del componente
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

/*

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  character: Character;
};

function CharacterModal({ children, isOpen, onClose, character }: Props) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose}>
      <button onClick={onClose}>Cerrar</button>
      <p>{children}</p>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.type}</h2>
      <h2>{character.origin.name}</h2>
    </ReactModal>
  );
}

export default CharacterModal;
*/