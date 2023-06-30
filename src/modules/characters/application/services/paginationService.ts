import { getCharactersByUrl } from "../../infra/http/api";
import { Response } from "../../domain/response";
import PaginationAdapter from "../adapters/PaginationAdapter";

const paginationService = {
  handleNext: async (
    nextPageUrl: string,
    currentPage: number,
    paginationAdapter: PaginationAdapter
  ) => {
    const response: Response = await getCharactersByUrl(nextPageUrl);
    paginationAdapter.updateCurrentPage(currentPage + 1);
    paginationAdapter.setPaginationData(response);
  },

  handlePrevious: async (
    previousPageUrl: string,
    currentPage: number,
    paginationAdapter: PaginationAdapter
  ) => {
    const response: Response = await getCharactersByUrl(previousPageUrl);
    paginationAdapter.updateCurrentPage(currentPage - 1);
    paginationAdapter.setPaginationData(response);
  },
};

export default paginationService;
