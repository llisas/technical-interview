import { Character } from '../../domain/character';
import { CharacterRepository } from '../../domain/characterRepository';

export function getAllCharacters(characterRepository: CharacterRepository) {
	return async (): Promise<Character> => {
		return await characterRepository.getAll();
	};
}
