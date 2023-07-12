import React from "react";
import { Character } from "src/modules/characters/domain/character";
import {Image,CircleImage,Description, Title} from "./CharacterDetail.styles";

interface CharacterDetailProps {
    character: Character
  }

const CharacterDetail : React.FunctionComponent<CharacterDetailProps> = ({character }) => {
    return (
            <>
            <Title>{character.name}</Title>
            <Image>
              <CircleImage src={character.image} alt="Imagen" />
            </Image>
            <Description>{`CREATED: ${character.created}`}</Description>
            <Description>{`EPISODES: ${character.episode.length}`}</Description>
            <Description>{`GENDER: ${character.gender}`}</Description>
            <Description>{`LOCATION: ${character.location.name}`}</Description>
            <Description>{`ORIGEN: ${character.origin.name}`}</Description>
            <Description>{`SPECIE: ${character.species}`}</Description>
            <Description>{`STATUS: ${character.status}`}</Description>
            <Description>{`TYPE: ${character.type}`}</Description>
            </>
      );
    };
export default CharacterDetail;
