import React from "react";
import { Character } from "../../../modules/characters/domain/character";
import {
  StyledModal,
  CloseButton,
  ContentContainer,
  ImageContainer,
  InformationContainer,
} from "./CharacterModal.styles";
import router from "next/router";

type CharacterModalProps = {
  character: Character;
  isOpen: boolean;
  onClose: () => void;
};

const CharacterModal = ({
  character,
  isOpen,
  onClose,
}: CharacterModalProps) => {
  const onAllInfoClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    event.preventDefault();
    router.push(`/character-detail/${character.id}`);
  };

  return (
    <StyledModal
      data-testid="character-modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      isDarkMode={localStorage.getItem("darkMode") === "true"}
    >
      <CloseButton data-testid="close-button" onClick={onClose}>
        X
      </CloseButton>
      <ContentContainer>
        <ImageContainer>
          <img src={character.image} alt={character.name} />
        </ImageContainer>
        <InformationContainer>
          <div>{character.name.toLocaleUpperCase()}</div>
          <div>STATUS: {character.status}</div>
          <div>SPECIE: {character.species}</div>
          <div>TYPE: {character.type}</div>
          <div>ORIGIN: {character.origin.name}</div>
          <div>
            <a className="info-link" onClick={onAllInfoClick}>
              ALL INFO
            </a>
          </div>
        </InformationContainer>
      </ContentContainer>
    </StyledModal>
  );
};

export default CharacterModal;
