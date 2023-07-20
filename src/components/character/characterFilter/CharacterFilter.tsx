import { useState } from "react";
import React from "react";
import ToggleButton from "../../ui/toogleButton/ToggleButton";
import { CenteredDiv } from "./CharacterFilter.styles";

interface CharacterFilterProps {
  isOrderByName: boolean;
  isOrderBySpecie: boolean;
  handleOrderByName: () => void;
  handleOrderBySpecie: () => void;
}

const CharacterFilter: React.FunctionComponent<CharacterFilterProps> = ({
  isOrderByName,
  isOrderBySpecie,
  handleOrderByName,
  handleOrderBySpecie,
}) => {
  return (
    <CenteredDiv>
      <ToggleButton
        name="ORDER BY NAME"
        active={isOrderByName}
        onToggle={handleOrderByName}
      />
      <ToggleButton
        name="ORDER BY SPECIE"
        active={isOrderBySpecie}
        onToggle={handleOrderBySpecie}
      />
    </CenteredDiv>
  );
};

export default CharacterFilter;