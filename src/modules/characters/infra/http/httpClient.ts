import { Response } from "../../domain/response";

export interface HttpClient {
    get(url: string): Promise<Response>;
    //post,put or wahtever we need
}

export class FetchHttpClient implements HttpClient {
    async get(url: string): Promise<Response> {
      try {
        const response = await fetch(url);
        return await response.json();
      } catch (error) {
        throw new Error(`Request error on ${url}`);
      }
    }
}