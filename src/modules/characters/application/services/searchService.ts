import { getSearchTerm } from "../../infra/http/api";
import { Response } from "../../../models/response";
import PaginationAdapter from "../adapters/PaginationAdapter";

const searchService = {
  handleSearchChange: async (
    searchTerm: string,
    setIsSearching: (value: boolean) => void,
    paginationAdapter: PaginationAdapter
  ) => {
    if (searchTerm.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
    const response: Response = await getSearchTerm(searchTerm);
    paginationAdapter.updatePaginator(response.info);
    paginationAdapter.setPaginationData(response);
  },
};

export default searchService;
