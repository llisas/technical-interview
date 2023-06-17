import { useEffect, useState } from "react";
import { createApiCharacterRepository } from "../modules/characters/infra/ApiCharacterRepository";
import { getAllCharacters } from "src/modules/characters/application/get/getAllCharacters";
import { Character } from "../modules/characters/domain/Character";
import { Result } from "../modules/characters/domain/Result";

import CharacterModal from "./CharacterModal";
import CharacterCard from "@/components/CharacterCard";

export default function Home() {
  const characterRepository = createApiCharacterRepository();
  const getAllCharactersFn = getAllCharacters(characterRepository);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [characters, setCharacters] = useState<Result[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Result | null>(
    null
  );

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterResults: Character = await getAllCharactersFn();
      setCharacters(characterResults.results);
    };
    fetchCharacters();
  }, []);

  const handleOpenModal = (character: Result) => {
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
