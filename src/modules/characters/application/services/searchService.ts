import { getSuggestions } from "../../infra/http/api";
import { Response } from "../../domain/response";
import PaginationAdapter from "../adapters/PaginationAdapter";


const searchService = {
  handleSearchChange: async (
    event: string,
    setIsSearching: (value: boolean) => void,
    paginationAdapter: PaginationAdapter
  ) => {
    if (event.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
    const response: Response = await getSuggestions(event);
    paginationAdapter.updatePaginator(response.info);
    paginationAdapter.setPaginationData(response);
  },
};

export default searchService;
