import { Character } from '../../domain/response';
import { CharacterRepository } from '../../domain/characterRepository';

export function getCharactersByUrl(characterRepository: CharacterRepository) {
	return async (url:string): Promise<Character> => {
		const response  = await characterRepository.getCharactersByUrl(url);
		return response;
	};
}
