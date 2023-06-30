import { FetchHttpClient } from "./httpClient";
import { allCharactersMock } from "../__mockData__/ApiAllCharactersMockData";

describe("FetchHttpClient", () => {
  it("should fetch data successfully", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(allCharactersMock),
      headers: new Headers(),
      ok: true,
      redirected: false,
      status: 200,
      statusText: "OK",
      type: "basic",
      url: "",
    });
    const httpClient = new FetchHttpClient();
    await expect(
      httpClient.get("https://rickandmortyapi.com/api/character?page=2")
    ).resolves.toEqual(allCharactersMock);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/character?page=2"
    );
  });

  it("should throw an error on request failure", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Request failed"));
    const httpClient = new FetchHttpClient();
    await expect(
      httpClient.get("https://rickandmortyapi.com/api/character?page=2")
    ).rejects.toThrowError(
      "Request error on https://rickandmortyapi.com/api/character?page=2"
    );
  });
});
