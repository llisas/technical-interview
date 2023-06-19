import { Character } from '../../domain/character';
import { CharacterRepository } from '../../domain/characterRepository';

export function getPage(characterRepository: CharacterRepository) {
	return async (page:number): Promise<Character> => {
		const response  = await characterRepository.getPage(page);
		return response;
	};
}
