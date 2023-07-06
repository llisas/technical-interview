import { Info } from "./info";
import { Character } from "../characters/domain/character";

export type Response = { 
  info: Info;
  characters : Character[];
}