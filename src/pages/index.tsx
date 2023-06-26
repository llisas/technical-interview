import CharacterList from "../components/characterList/CharacterList";
import Paginator from "../components/paginator/Paginator";
import SearchBar from "@/components/searchBar/SearchBar";
import useHome from "src/modules/characters/application/useCase/useHome";

const Home = () => {
  const {
    characters,
    isModalOpen,
    selectedCharacter,
    currentPage,
    totalPages,
    searchTerm,
    handleSearchChange,
    handleOpenModal,
    handleCloseModal,
    onPageChange,
  } = useHome();

  return (
    <>
      <SearchBar searchTerm={searchTerm} onChange={handleSearchChange} />
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
