import { getSearchTerm } from "../../infra/http/api";
import { Response } from "../../../models/response";
import PaginationAdapter from "../adapters/PaginationAdapter";

const updatePagination = async (searchTerm : string, paginationAdapter: PaginationAdapter) =>{
  const response: Response = await getSearchTerm(searchTerm);
  paginationAdapter.updatePaginator(response.info);
  paginationAdapter.setPaginationData(response);
}

const searchService = {
  handleSearchChange:  ( searchTerm: string, setIsSearching: (value: boolean) => void, paginationAdapter: PaginationAdapter ) => {
    if (searchTerm.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
    updatePagination(searchTerm,paginationAdapter);
  },
};

export default searchService;
