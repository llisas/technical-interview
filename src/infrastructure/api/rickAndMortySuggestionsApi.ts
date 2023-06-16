import {
  CharacterSuggestionRepository,
  Suggestion,
} from "../../domain/characterSuggestionRepository";

export class RickAndMortySuggestionApi implements CharacterSuggestionRepository {
  async getSuggestion(name: string): Promise<{
    suggestions: Suggestion[]
  }> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BASE}/character/?name=${name}`);
      const data = await response.json();
      
      return {
        suggestions: data.results,
        
      };




    } catch (error) {
      throw new Error("Error getting characters from API");
    }
  }
}
