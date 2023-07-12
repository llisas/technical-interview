import React from 'react';
import { Container, Title, Image, CircleImage, Description} from './id.styles';
import BackRouteArrow from "../../components/backRouteArrow/BackRouteArrow"
import { Character } from 'src/modules/characters/domain/character';
import { getServerSideProps } from '../serverSideProps/getCharacterById';
import CharacterDetail from '@/components/characterDetail/CharacterDetail';
const Detail = ({ character }: { character: Character}) => {
  return (
    <Container>
        <BackRouteArrow text="BACK TO LIST" ></BackRouteArrow>
        <CharacterDetail character={character}></CharacterDetail>
    </Container>
  );
};

export default Detail;
export  {getServerSideProps};


