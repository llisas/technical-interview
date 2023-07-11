import { Response } from "../../../models/response";
import {apiAdapter} from '../../application/adapters/apiAdapter'
import { Character } from "../../domain/character";

export interface HttpClient {
    get(url: string): Promise<Response>;
    getById(url: string): Promise<Character>;
    //post,put or wahtever we need
}

export class FetchHttpClient implements HttpClient {
    async get(url: string): Promise<Response> {
      try {
        const response = await fetch(url);
        const responseJson =  await response.json();
        return apiAdapter(responseJson);
      } catch (error) {
        throw new Error(`Request error on ${url}`);
      }
    }

    async getById(url: string): Promise<Character> {
      try {
        const response = await fetch(url);
        return await response.json();
      } catch (error) {
        throw new Error(`Request error on ${url}`);
      }
    }

    async getApiTest(url: string): Promise<Response> {
      try {
        const response = await fetch(url);
      return  await response.json();
      } catch (error) {
        throw new Error(`Request error on ${url}`);
      }
    }
}

