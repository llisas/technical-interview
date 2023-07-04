import { Response } from "../../../models/response";
import {apiAdapter} from '../../application/adapters/apiAdapter'

export interface HttpClient {
    get(url: string): Promise<Response>;
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
}