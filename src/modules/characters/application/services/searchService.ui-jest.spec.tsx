import { Character } from "../../domain/character";
import PaginationAdapter from "../adapters/PaginationAdapter";
import searchService from "./searchService";
import { allSuggestionsMockResponse } from "./__mockData__/ApiAllSuggestionMockDataResponse";

jest.mock('../adapters/PaginationAdapter', () =>
  jest.fn().mockImplementation(() => ({
    updatePaginator: jest.fn(),
    setPaginationData: jest.fn(),
  }))
);

jest.mock('../../infra/http/api', () => ({
    getSearchTerm: jest.fn((searchTerm) => {
        allSuggestionsMockResponse
        return Promise.resolve(allSuggestionsMockResponse);
      }),
}));

describe("searchService", () => {

  it("should call `getSearchTerm` with the given search term", async () => {
    const searchTerm = "ric";
    const setIsSearching = jest.fn();
    const paginationAdapter = new PaginationAdapter(
      (characters: Character[]) => {},
      (characters: Character[]) => {},
      (nextPageUrl: string | null) => {},
      (previousPageUrl: string | null) => {},
      (totalPages: number) => {},
      (currentPage: number) => {}
    );
    searchService.handleSearchChange(searchTerm, setIsSearching, paginationAdapter);
    expect(setIsSearching).toBeCalledWith(true);
  });

  it("should call `getSearchTerm` with the given search term", async () => {
    const searchTerm = "";
    const setIsSearching = jest.fn();
    const paginationAdapter = new PaginationAdapter(
      (characters: Character[]) => {},
      (characters: Character[]) => {},
      (nextPageUrl: string | null) => {},
      (previousPageUrl: string | null) => {},
      (totalPages: number) => {},
      (currentPage: number) => {}
    );
    searchService.handleSearchChange(searchTerm, setIsSearching, paginationAdapter);
    expect(setIsSearching).toBeCalledWith(false);
  });

});
