import { getAllCharacters} from "../../modules/characters/infra/http/api";
import { Response } from "../../modules/models/response";

import { GetServerSideProps } from "next";
export const getServerSideProps: GetServerSideProps = async () => {
  let response: Response;
    response = await getAllCharacters();
  return {
    props: {
      response
    },
  };
};