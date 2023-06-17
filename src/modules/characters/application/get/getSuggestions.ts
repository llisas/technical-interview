import { Character } from '../../domain/Character';
import { CharacterRepository } from '../../domain/CharacterRepository';

export function getSuggestions(characterRepository: CharacterRepository) {
	return async (characterName:string): Promise<Character> => {
		return await characterRepository.getSuggestions(characterName);
	};
}
