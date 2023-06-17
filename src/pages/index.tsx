import React, { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  return (
    <>
     <SearchBar onSearch={handleSearch} />
     <CharacterList></CharacterList>
    </>
  );
}
