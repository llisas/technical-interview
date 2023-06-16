import { CharacterSuggestionRepository, Suggestion } from '../domain/characterSuggestionRepository';

export class SuggestionService {
  constructor(private suggestionRepository: CharacterSuggestionRepository) {}
  async getSuggestions(name: string): Promise<{ suggestions: Suggestion[] }> {
    const suggestions: { suggestions: Suggestion[] } = await this.suggestionRepository.getSuggestion(name);
    
    return suggestions;
  }
}
