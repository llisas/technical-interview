import { Character } from "./Character";

export interface CharacterRepository{
    getAll : () => Promise<Character>;
    getSuggestions : (characterName : string) => Promise<Character>;
}