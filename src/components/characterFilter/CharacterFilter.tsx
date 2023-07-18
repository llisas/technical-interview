import { useState } from "react";
import React from "react";
import ToggleButton from "../toogleButton/ToggleButton";
import { CenteredDiv } from "./characterFilter.styles";

const CharacterFilter = () => {
  const [isOrderByName, setisOrderByName] = useState(false);
  const [isOrderBySpecie, setIsOrderBySpecie] = useState(false);

  const handleOrderByName = () => {
    setisOrderByName(!isOrderByName);
  };

  const handleOrderBySpecie = () => {
    setIsOrderBySpecie(!isOrderBySpecie);
  };

  return (
    <CenteredDiv>
      <ToggleButton
        name="Order by name"
        active={isOrderByName}
        onToggle={handleOrderByName}
      />
      <ToggleButton
        name="Order by specie"
        active={isOrderBySpecie}
        onToggle={handleOrderBySpecie}
      />
    </CenteredDiv>
  );
};

export default CharacterFilter;
