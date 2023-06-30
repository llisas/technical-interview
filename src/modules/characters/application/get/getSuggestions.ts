import { Character } from '../../domain/response';
import { CharacterRepository } from '../../domain/characterRepository';

export function getSuggestions(characterRepository: CharacterRepository) {
	return async (characterName:string): Promise<Character> => {
		const response  = await characterRepository.getSuggestions(characterName);
		return response;
	};
}
