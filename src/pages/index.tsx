import { useEffect, useState } from "react";

import { CharacterService } from "../application/characterService";
import { Character, PageInfo } from "../domain/characterRepository";
import { RickAndMortyApi } from "../infrastructure/api/rickAndMortyApi";

import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAllCharacters();
  }, []);

  async function getAllCharacters() {
    const characterRepository = new RickAndMortyApi();
    const characterService = new CharacterService(characterRepository);

    try {
      const { characters, pageInfo } =
        await characterService.getCharactersWithPageInfo();
      setCharacters(characters);
      setPageInfo(pageInfo);
    } catch (error) {
      console.error("Error getting characters:", error);
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleOpenModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  return (
    <div>
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <SearchBar onSearch={handleSearch} />
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={() => handleOpenModal(character)} 
        />
      ))}
    </div>
  );
}
