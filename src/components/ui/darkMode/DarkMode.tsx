import React, { useEffect, useState } from "react";
import {IconSun, IconMoon} from "./DarkMode.styles"

import ToggleScreenMode from "../toogleScreenMode/ToggleScreenMode";

const DarkMode =  () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    useEffect(() => {
      const storedMode = localStorage.getItem('darkMode');
      if (storedMode) {
        setIsDarkMode(storedMode === 'true');
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('darkMode', isDarkMode.toString());
      document.body.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);
  
    return (
        <ToggleScreenMode active={isDarkMode}  onToggle={toggleMode}></ToggleScreenMode>
    );
  };

export default DarkMode;