import { Character } from '../../domain/character';
import { CharacterRepository } from '../../domain/characterRepository';

export function getSuggestions(characterRepository: CharacterRepository) {
	return async (characterName:string): Promise<Character> => {
		const response  = await characterRepository.getSuggestions(characterName);
		console.log("Character Suggestions =>",response );
		return response;
	};
}
