import React from "react";
import { ToggleButtonStyled, ToggleButtonLabel} from "./ToogleButton.styles";

interface ToggleButtonProps {
  name: string;
  active: boolean;
  onToggle: () => void;
}

function ToggleButton({ name, active, onToggle }: ToggleButtonProps) {
  return (
    <>
    <ToggleButtonLabel>{name}</ToggleButtonLabel>
    <ToggleButtonStyled active={active} onClick={onToggle}>
    </ToggleButtonStyled>
    </>
  );
}

export default ToggleButton;
