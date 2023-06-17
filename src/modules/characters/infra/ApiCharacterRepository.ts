import { Character } from "../domain/character";
import { CharacterRepository } from "../domain/characterRepository";

export function createApiCharacterRepository(): CharacterRepository {
  return {
    getAll,
    getSuggestions,
  };
}

async function getAll(): Promise<Character> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_BASE}/character`
    );
    return await response.json();
  } catch (error) {
    throw new Error("Error getting characters");
  }
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
