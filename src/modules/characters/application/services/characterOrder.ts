import { Character } from "../../domain/character";
import { RickAndMortyCharacterRepository } from "../adapters/RickAndMortyCharacterRepository";
const characterOrderRepository = new RickAndMortyCharacterRepository();


export function orderCharacters(
    preOrderCharacters: Character[],
    characters: Character[],
    isOrderBySpecie: boolean,
    isOrderByName: boolean,
    isOrderByStatus: boolean
  ) {
    switch (true) {
      case isOrderBySpecie && isOrderByName && isOrderByStatus:
        const pornombre = characterOrderRepository.orderCharactersByName(characters);
        return characterOrderRepository.orderCharactersBySpecieAndStatus(
            pornombre
          )
      case isOrderBySpecie && isOrderByName:
        return characterOrderRepository.orderCharactersByNameAndSpecie(characters);
      case isOrderBySpecie && isOrderByStatus:
        return characterOrderRepository.orderCharactersBySpecieAndStatus(
          characters
        );
      case isOrderByName && isOrderByStatus:
        return characterOrderRepository.orderCharactersByNameAndStatus(characters);
      case isOrderBySpecie:
        return characterOrderRepository.orderCharactersBySpecies(characters);
      case isOrderByName:
        return characterOrderRepository.orderCharactersByName(characters);
      case isOrderByStatus:
        return characterOrderRepository.orderCharactersByStatus(characters);
      default:
        return preOrderCharacters;
    }
  }