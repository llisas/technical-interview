import React from "react";
import { ToggleButtonStyled, ToggleButtonLabel} from "./ToogleButton.styles";
import { useDarkModeContext } from "../../../context/darkMode/DarkModeContext";
interface ToggleButtonProps {
  name: string;
  active: boolean;
  onToggle: () => void;
}

function ToggleButton({ name, active, onToggle }: ToggleButtonProps) {
  const { isDarkModeContext } = useDarkModeContext();
  
  return (
    <>
    <ToggleButtonStyled active={active} onClick={onToggle}>
    </ToggleButtonStyled>
    <ToggleButtonLabel style={{ color: isDarkModeContext ? "white" : "grey" }}>
        {name}
      </ToggleButtonLabel>
    </>
  );
}

export default ToggleButton;
