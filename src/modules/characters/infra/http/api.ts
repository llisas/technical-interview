import { HttpClient,  FetchHttpClient} from "./httpClient";
import { Response } from "../../../models/response";

const httpClient: HttpClient = new FetchHttpClient();

export async function getSuggestions(characterName: string): Promise<Response> {
  try {
   return await httpClient.get(
      `${process.env.NEXT_PUBLIC_API_URL_BASE}/character/?name=${characterName}`
    );
  } catch (error) {
    throw new Error("Error getting suggestions");
  }
}

export async function getCharacter(pageNumber: number): Promise<Response> {
  try {
    return await httpClient.get(
      `${process.env.NEXT_PUBLIC_API_URL_BASE}/character/?page=${pageNumber}`
    );
    
  } catch (error) {
    throw new Error("Error getting character");
  }
}

export async function getCharactersByUrl(url: string): Promise<Response> {
  try {
    return await httpClient.get(url);
  } catch (error) {
    throw new Error("Error getting character by url");
  }
}
