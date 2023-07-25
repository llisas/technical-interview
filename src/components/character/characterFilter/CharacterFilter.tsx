import React from "react";
import ToggleButton from "../../ui/toogleButton/ToggleButton";
import { CenteredDiv } from "./CharacterFilter.styles";

interface CharacterFilterProps {
  isOrderByName: boolean;
  isOrderBySpecie: boolean;
  isOrderByStatus: boolean
  handleOrderByName: () => void;
  handleOrderBySpecie: () => void;
  handleOrderByStatus: () => void;
}

const CharacterFilter: React.FunctionComponent<CharacterFilterProps> = ({
  isOrderByName,
  isOrderBySpecie,
  isOrderByStatus,
  handleOrderByName,
  handleOrderBySpecie,
  handleOrderByStatus,
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
        <ToggleButton
        name="ORDER BY STATUS"
        active={isOrderByStatus}
        onToggle={handleOrderByStatus}
      />
    </CenteredDiv>
  );
};

export default CharacterFilter;