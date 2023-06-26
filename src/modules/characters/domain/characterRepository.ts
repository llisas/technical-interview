import { Character } from "./character";

export interface CharacterRepository{
    getSuggestions : (characterName : string) => Promise<Character>;
    getCharacter: (page : number) => Promise<Character>;
    getCharactersByUrl : (url : string ) => Promise<Character>;
}