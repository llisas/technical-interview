import { Info } from "../characters/domain/info";
import { Result } from "../characters/domain/result";

export type Response = { 
  info: Info;
  results: Result[];
}