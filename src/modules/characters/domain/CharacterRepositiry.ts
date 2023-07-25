import {Character} from "./character"

 export default interface CharacterRepository {
    orderCharactersByName(characters: Character[]): Character[];
    orderCharactersBySpecies(characters: Character[]): Character[];
    orderCharactersByNameAndSpecie(characters: Character[]): Character[];
    orderCharactersByStatus(characters: Character[]): Character[];
  }