import { allSuggestionsMock } from "../__mockData__/ApiAllSuggestionMockData";
import { allSuggestionsMockResponse } from "../__mockData__/ApiAllSuggestionMockDataResponse";
import { allCharactersMock } from "../__mockData__/ApiAllCharactersMockData";
import { allCharactersByUrl } from "../__mockData__/ApiAllCharactersByUrlMockData";
import { getSearchTerm, getCharacter, getCharactersByUrl } from "./api";
import { Response } from "../../../models/response";

describe("api testing", () => {
  
  it("Get suggestions obtein the correct data", async () => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve(allSuggestionsMockResponse),
        headers: new Headers(),
        ok: true,
        redirected: false,
        status: 200,
        statusText: "OK",
        type: "basic",
        url: "",
      } as any);
    const response = await getSearchTerm("asm");
    expect(response.info).toEqual(allSuggestionsMockResponse.info);
  });

  it("Get characters obtein all the caracters in the page 1", async () => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve(allCharactersMock),
        headers: new Headers(),
        ok: true,
        redirected: false,
        status: 200,
        statusText: "OK",
        type: "basic",
        url: "",
      } as any);
    const response = await getCharacter(1);
    expect(response.info).toEqual(allCharactersMock.info);
  });

  
  it("Get characters by url", async () => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve(allCharactersByUrl),
        headers: new Headers(),
        ok: true,
        redirected: false,
        status: 200,
        statusText: "OK",
        type: "basic",
        url: "",
      } as any);
    const response = await getCharactersByUrl(
      "https://rickandmortyapi.com/api/character?page=2"
    );
    expect(response.info).toEqual(allCharactersByUrl.info);
  });
  
});   


