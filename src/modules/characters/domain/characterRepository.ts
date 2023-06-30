import { Response } from "./response";

export interface CharacterRepository{
    getSuggestions : (characterName : string) => Promise<Response>;
    getCharacter: (page : number) => Promise<Response>;
    getCharactersByUrl : (url : string ) => Promise<Response>;
}