import { Character } from "./character";

export interface CharacterRepository{
    getSuggestions : (characterName : string) => Promise<Character>;
    getPage: (page : number) => Promise<Character>;
}