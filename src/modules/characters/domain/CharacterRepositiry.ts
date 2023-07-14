import {Character} from "./character"

 export default interface CharacterRepository {
    orderCharactersByName(characters: Character[]): Character[];
    orderCharactersBySpecies(characters: Character[]): Character[];
    // we can add more filters
  }