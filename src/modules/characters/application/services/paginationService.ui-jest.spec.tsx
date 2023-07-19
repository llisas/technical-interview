import paginationService from "./paginationService";
import { getCharactersByUrl } from "../../infra/http/api";
import PaginationAdapter from "../adapters/PaginationAdapter";
import { responseMock } from "./__mockData__/responseMockData";

jest.mock("../../infra/http/api");

describe("paginationService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should handle next page correctly", async () => {
    const nextPageUrl = "https://api.example.com/characters?page=3";
    const currentPage = 2;

    const setCharacters = jest.fn();
    const setPreOrderCharacters = jest.fn();
    const setNextPageUrl = jest.fn();
    const setPreviousPageUrl = jest.fn();
    const setTotalPages = jest.fn();
    const setCurrentPage = jest.fn();

    const paginationAdapter = new PaginationAdapter(
      setCharacters,
      setPreOrderCharacters,
      setNextPageUrl,
      setPreviousPageUrl,
      setTotalPages,
      setCurrentPage
    );

    await paginationService.handleNext(
      nextPageUrl,
      currentPage,
      paginationAdapter
    );

    expect(getCharactersByUrl).toHaveBeenCalledWith(nextPageUrl);
    expect(setCurrentPage).toHaveBeenCalledWith(currentPage + 1);
  });

  it("should handle previous page correctly", async () => {
    const previousPageUrl = "https://api.example.com/characters?page=1";
    const currentPage = 2;

    const setCharacters = jest.fn();
    const setPreOrderCharacters = jest.fn();
    const setNextPageUrl = jest.fn();
    const setPreviousPageUrl = jest.fn();
    const setTotalPages = jest.fn();
    const setCurrentPage = jest.fn();

    const paginationAdapter = new PaginationAdapter(
      setCharacters,
      setPreOrderCharacters,
      setNextPageUrl,
      setPreviousPageUrl,
      setTotalPages,
      setCurrentPage
    );

    await paginationService.handlePrevious(
      previousPageUrl,
      currentPage,
      paginationAdapter
    );
    expect(getCharactersByUrl).toHaveBeenCalledWith(previousPageUrl);
    expect(setCurrentPage).toHaveBeenCalledWith(currentPage - 1);
  });
});
