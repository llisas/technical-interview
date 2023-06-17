/*import {
  CharacterRepository,
  Character,
} from "../../domain/characterRepository";
//import { PageInfo } from "../../domain/characterRepository";

export class RickAndMortyApi implements CharacterRepository {
  async getCharacters(): Promise<{
    characters: Character[];
    pageInfo: PageInfo;
  }> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BASE}/character`);
      const data = await response.json();
      return {
        characters: data.results,
        pageInfo: {
          count: data.info.count,
          pages: data.info.pages,
          next: data.info.next,
          prev: data.info.prev,
        },
      };
    } catch (error) {
      throw new Error("Error getting characters from api");
    }
  }
}
*/