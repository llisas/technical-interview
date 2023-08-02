import React, { useEffect } from "react";
import { useDarkModeContext } from "../../../context/darkMode/DarkModeContext";

import ToggleScreenMode from "../toogleScreenMode/ToggleScreenMode";

const DarkModeSelector = () => {
  const { isDarkModeContext, toggleDarkMode } = useDarkModeContext();

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      toggleDarkMode();
    }else{
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkModeContext.toString());
    document.body.classList.toggle("dark-mode", isDarkModeContext);
  }, [isDarkModeContext]);

  return (
    <ToggleScreenMode active={isDarkModeContext} onToggle={toggleDarkMode} />
  );
};

export default DarkModeSelector;
