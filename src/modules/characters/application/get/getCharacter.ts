import { Character } from '../../domain/response';
import { CharacterRepository } from '../../domain/characterRepository';

export function getCharacter(characterRepository: CharacterRepository) {
	return async (page:number): Promise<Character> => {
		const response  = await characterRepository.getCharacter(page);
		return response;
	};
}
