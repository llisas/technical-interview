import { getCharactersByUrl } from "../../infra/http/api";
import { Response } from "../../../models/response";
import PaginationAdapter from "../adapters/PaginationAdapter";

const paginationService = {
  handleNext: async (
    nextPageUrl: string,
    currentPage: number,
    paginationAdapter: PaginationAdapter
  ) => {
   
    const response: Response = await getCharactersByUrl(nextPageUrl);
    await delay(2000); //∫
    paginationAdapter.updateCurrentPage(currentPage + 1);
    paginationAdapter.setPaginationData(response);
    
  },

  handlePrevious: async (
    previousPageUrl: string,
    currentPage: number,
    paginationAdapter: PaginationAdapter
  ) => {
    await delay(2000); //
    const response: Response = await getCharactersByUrl(previousPageUrl);
    paginationAdapter.updateCurrentPage(currentPage - 1);
    paginationAdapter.setPaginationData(response);
  },
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default paginationService;
