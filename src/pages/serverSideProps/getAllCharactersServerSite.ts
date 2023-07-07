import { getAllCharacters, getSearchTerm} from "../../modules/characters/infra/http/api";
import { Response } from "../../modules/models/response";

import { GetServerSideProps } from "next";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { searchTerm } = context.query;
  let response: Response;

  if (searchTerm) {
    response = await getSearchTerm(searchTerm as string);
  } else {
    response = await getAllCharacters();
  }

  return {
    props: {
      response
    },
  };
};

