import { GetServerSideProps } from 'next';
import { Character } from "src/modules/characters/domain/character";
import { getCharacterById} from "../../modules/characters/infra/http/api";

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const {id}= query;
    const character: Character  = await getCharacterById(id as string);
  return {
    props: {
      character
    },
  };
};