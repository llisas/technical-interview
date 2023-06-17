import { useState, useEffect } from "react";
import CharacterModal from "./CharacterModal";
import CharacterCard from "@/components/CharacterCard";
import { Result } from "../modules/characters/domain/Result";

interface CharacterListProps {
  characters: Result[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Result | null>(null);

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
