import { allSuggestionsMock } from "../__mockData__/ApiAllSuggestionMockData";
import { allCharactersMock } from "../__mockData__/ApiAllCharactersMockData";
import { allCharactersByUrl } from "../__mockData__/ApiAllCharactersByUrlMockData";
import { getSuggestions, getCharacter, getCharactersByUrl } from "./api";

describe("api testing", () => {
  it("Get suggestions obtein the correct data", () => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve(allSuggestionsMock),
        headers: new Headers(),
        ok: true,
        redirected: false,
        status: 200,
        statusText: "OK",
        type: "basic",
        url: "",
      } as Response);
    const response = getSuggestions("Rick");
    expect(response).resolves.toEqual(allSuggestionsMock);
  });

  it("Get characters obtein all the caracters in the page 1", () => {
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
      } as Response);
    const response = getCharacter(1);
    expect(response).resolves.toEqual(allCharactersMock);
  });

  it("Get characters by url", () => {
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
      } as Response);
    const response = getCharactersByUrl(
      "https://rickandmortyapi.com/api/character?page=2"
    );
    expect(response).resolves.toEqual(allCharactersByUrl);
  });
});
