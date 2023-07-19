import { Response } from '../../../models/response'; 
import { Info } from "../../../models/info";
import PaginationAdapter from "./PaginationAdapter";
import { responseMock } from "./__mockData__/responseMockData";

describe("PaginationAdapter", () => {
  let setCharacters: jest.Mock;
  let setNextPageUrl: jest.Mock;
  let setPreviousPageUrl: jest.Mock;
  let setTotalPages: jest.Mock;
  let setCurrentPage: jest.Mock;
  let setPreOrderCharacters: jest.Mock;

  beforeEach(() => {
    setCharacters = jest.fn();
    setNextPageUrl = jest.fn();
    setPreviousPageUrl = jest.fn();
    setTotalPages = jest.fn();
    setCurrentPage = jest.fn();
    setPreOrderCharacters = jest.fn();
  });

  it("should set pagination data correctly", () => {
    const adapter = new PaginationAdapter(
      setCharacters,
      setPreOrderCharacters,
      setNextPageUrl,
      setPreviousPageUrl,
      setTotalPages,
      setCurrentPage
    );

    const response: Response = responseMock;
    adapter.setPaginationData(response);
    expect(setCharacters).toHaveBeenCalledWith(response.characters);
    expect(setNextPageUrl).toHaveBeenCalledWith(response.info.next);
    expect(setPreviousPageUrl).toHaveBeenCalledWith(response.info.prev);
  });

  it("should update paginator with valid data", () => {
    const adapter = new PaginationAdapter(
      setCharacters,
      setPreOrderCharacters,
      setNextPageUrl,
      setPreviousPageUrl,
      setTotalPages,
      setCurrentPage
    );
    const data: Info = responseMock.info;
    adapter.updatePaginator(data);
    expect(setTotalPages).toHaveBeenCalledWith(data.pages);
    expect(setCurrentPage).toHaveBeenCalledWith(1);
  });

  it("should update current page correctly", () => {
    const adapter = new PaginationAdapter(
      setCharacters,
      setPreOrderCharacters,
      setNextPageUrl,
      setPreviousPageUrl,
      setTotalPages,
      setCurrentPage
    );

    const pageNumber = 3;
    adapter.updateCurrentPage(pageNumber);
    expect(setCurrentPage).toHaveBeenCalledWith(pageNumber);
  });
});
