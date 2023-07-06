import { Response } from "../../../models/response";

export function apiAdapter(apiResponse: any): Response {
  const adaptedResponse: Response = {
    info: apiResponse.info,
    characters: apiResponse.results
  };

  return adaptedResponse;
}