import { Result } from "../modules/characters/domain/result";
import {
  StyledModal,
  CloseButton,
  ContentContainer,
  ImageContainer,
  InformationContainer,
} from "../styles/CharacterModal.styles";
type CharacterModalProps = {
  character: Result;
  isOpen: boolean;
  onClose: () => void;
};

const CharacterModal = ({
  character,
  isOpen,
  onClose,
}: CharacterModalProps) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
    >
      <CloseButton onClick={onClose}>X</CloseButton>
      <ContentContainer>
        <ImageContainer>
          <img src={character.image} alt={character.name} />
        </ImageContainer>
        <InformationContainer>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Type: {character.type}</p>
          <p>Origin: {character.origin.name}</p>
        </InformationContainer>
      </ContentContainer>
    </StyledModal>
  );
};

export default CharacterModal;
