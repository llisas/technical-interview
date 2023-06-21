import React from "react";
import CharacterList from "../components/characterList/CharacterList";
import SearchBar from "../components/searchBar/SearchBar";
import Paginator from "../components/paginator/Paginator";
import { homeUseCase } from "../modules/characters/application/useCase/useHomeUse";

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
