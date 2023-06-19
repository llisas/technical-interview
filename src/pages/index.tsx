import React from "react";
import CharacterList from "../components/CharacterList";
import SearchBar from "../components/SearchBar";
import Paginator from "../components/Paginator";
import { homeUseCase } from "../modules/characters/application/useCase/homeUseCase";

const Home = () => {
  const {
    isModalOpen,
    selectedCharacter,
    handleOpenModal,
    handleCloseModal,
    characters,
    currentPage,
    totalPages,
    onPageChange,
  } = homeUseCase();

  return (
    <>
      <SearchBar />
      <CharacterList
        characters={characters}
        isModalOpen={isModalOpen}
        selectedCharacter={selectedCharacter}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Home;
