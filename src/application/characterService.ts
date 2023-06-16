import { CharacterRepository, Character, PageInfo } from '../domain/characterRepository';

export class CharacterService {
    constructor(private characterRepository: CharacterRepository) {}
    async getCharactersWithPageInfo(): Promise<{ characters: Character[]; pageInfo: PageInfo }> {
      return this.characterRepository.getCharacters();
    }
  }
  