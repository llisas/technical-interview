import CharacterRepository from "../../domain/CharacterRepositiry";
import { Character } from "../../domain/character";

export class RickAndMortyCharacterRepository implements CharacterRepository {
  
  orderCharactersByName(characters: Character[]): Character[] {
    return characters.slice().sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  orderCharactersBySpecies(characters: Character[]): Character[] {
    const sorted = characters.slice().sort((a, b) => {
      if (a.species < b.species) {
        return -1;
      } else if (a.species > b.species) {
        return 1;
      }
      return 0;
    });
    return sorted;
  }

  orderCharactersByStatus(characters: Character[]): Character[] {
    const alive: Character[] = [];
    const dead: Character[] = [];
    const unknown: Character[] = [];
  
    characters.forEach((character) => {
      if (character.status === "Alive") {
        alive.push(character);
      } else if (character.status === "Dead") {
        dead.push(character);
      } else {
        unknown.push(character);
      }
    });
  
    return [...alive, ...dead, ...unknown];
  }
  
  orderCharactersByNameAndSpecie(characters: Character[]): Character[] {
    const groupedCharacters: { [key: string]: Character[] } = characters.reduce((obj: { [key: string]: Character[] }, character) => {
      if (!obj[character.species]) {
        obj[character.species] = [];
      }
      obj[character.species].push(character);
      return obj;
    }, {});
    for (const species in groupedCharacters) {
      groupedCharacters[species].sort((a, b) => a.name.localeCompare(b.name));
    }
    const sortedCharacters: Character[] = Object.values(groupedCharacters).flat();
    return sortedCharacters;
  }
 
 

}
