import { HttpClient,  FetchHttpClient} from "./httpClient";
import { Response } from "../../../models/response";
import { Character } from "../../domain/character";

const httpClient: HttpClient = new FetchHttpClient();

export async function getSearchTerm(searTerm: string): Promise<Response> {
  try {
   return await httpClient.get(
      `${process.env.NEXT_PUBLIC_API_URL_BASE}/character/?name=${searTerm}`
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


export async function getCharacterById(id: string ): Promise<Character> {
  try {
    return await httpClient.getById(`${process.env.NEXT_PUBLIC_API_URL_BASE}/character/${id}`);
  } catch (error) {
    throw new Error("Error getting character by id");
  }
}


export async function getAllCharacters(): Promise<Response> {
  try {
    return await httpClient.get(`${process.env.NEXT_PUBLIC_API_URL_BASE}/character`);
  } catch (error) {
    throw new Error("Error getting all characters ");
  }
}

