import { Character } from '../../domain/Character';
import { CharacterRepository } from '../../domain/CharacterRepository';

export function getSuggestions(characterRepository: CharacterRepository) {
	return async (characterName:string): Promise<Character> => {
		const response  = await characterRepository.getSuggestions(characterName);
		console.log("Character Suggestions =>",response );
		return response;
	};
}
