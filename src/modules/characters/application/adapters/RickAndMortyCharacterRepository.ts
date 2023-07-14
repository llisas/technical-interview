import  CharacterRepository from "../../domain/CharacterRepositiry"; // Asegúrate de importar la interfaz correctamente
import { Character } from "../../domain/character";

export class RickAndMortyCharacterRepository implements CharacterRepository {
    private characters: Character[];
  
    constructor(characters: Character[]) {
      this.characters = characters;
    }
  
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
        return characters;
        /*return this.characters.filter(
          (character) => character.species.toLowerCase().includes(name.toLowerCase())
        );*/
    }
  }
  
  