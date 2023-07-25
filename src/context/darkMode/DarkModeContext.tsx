import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

type DarkModeContextType = {
  isDarkModeContext: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkModeContext: false,
  toggleDarkMode: () => {},
});

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkModeContext, setIsDarkModeContext] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkModeContext((prev) => !prev);
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setIsDarkModeContext(true);
    } else {
      setIsDarkModeContext(false);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkModeContext, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
