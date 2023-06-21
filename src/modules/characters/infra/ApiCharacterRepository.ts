import { Character } from "../domain/character";
import { CharacterRepository } from "../domain/characterRepository";

export function createApiCharacterRepository(): CharacterRepository {
  return {
    getSuggestions,
    getCharacter,
  };
}

async function getSuggestions(characterName: string): Promise<Character> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_BASE}/character/?name=${characterName}`
    );
    return await response.json();
  } catch (error) {
    throw new Error("Error getting suggestions");
  }
}

async function getCharacter(page: number): Promise<Character> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_BASE}/character/?page=${page}`
    );
    return await response.json();
  } catch (error) {
    throw new Error("Error getting page");
  }
}
