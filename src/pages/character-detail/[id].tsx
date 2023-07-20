import React, { useEffect, useState } from "react";
import { Container, Title, Image, CircleImage, Description } from "./id.styles";
import BackRouteArrow from "../../components/ui/backRouteArrow/BackRouteArrow";
import { Character } from "src/modules/characters/domain/character";
import { getServerSideProps } from "../serverSideProps/getCharacterById";
import CharacterDetail from "@/components/character/characterDetail/CharacterDetail";
import CharacterDetailSkeleton from "../../components/character/characterDetailSketeton/CharacterDetailSkeleton";

const Detail = ({ character }: { character: Character }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // delay in order to see the skeleton
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <CharacterDetailSkeleton />
      ) : (
        <Container>
          <BackRouteArrow text="BACK TO LIST" />
          <CharacterDetail character={character} />
        </Container>
      )}
    </>
  );
};

export default Detail;
export { getServerSideProps };
