import React from "react";
import {
  ToggleButtonStyled,
  IconSun,
  IconMoon,
  Container
} from "./ToogleScreenMode.styles";

interface ToggleButtonProps {
  active: boolean;
  onToggle: () => void;
}

function ToggleScreenMode({ active, onToggle }: ToggleButtonProps) {
  return (
    <Container>
      <IconSun role="img" >
        ☼
      </IconSun>
      <ToggleButtonStyled
        active={active}
        onClick={onToggle}
      ></ToggleButtonStyled>
      <IconMoon role="img" >
        ☽
      </IconMoon>
    </Container>
  );
}

export default ToggleScreenMode;
