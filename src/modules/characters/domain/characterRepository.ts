import { Character } from "./character";

export interface CharacterRepository{
    getAll : () => Promise<Character>;
    getSuggestions : (characterName : string) => Promise<Character>;
}