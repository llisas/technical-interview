export interface CharacterSuggestionRepository {
  getSuggestion(name: string): Promise<{ suggestions: Suggestion[] }>;
}

export interface Suggestion {
  id: number;
  characterName: string;
}

