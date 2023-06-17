import { Character } from '../../domain/Character';
import { CharacterRepository } from '../../domain/CharacterRepository';

export function getAllCharacters(characterRepository: CharacterRepository) {
	return async (): Promise<Character> => {
		return await characterRepository.getAll();
	};
}
