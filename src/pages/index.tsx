import React, { useState } from "react";
import CharacterList from "../components/characterList/CharacterList";
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
