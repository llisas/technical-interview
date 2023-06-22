import { useState, useEffect, useRef} from "react";

const useSearchBar = (initialSearchTerm: string, onChange: (searchTerm: string) => void) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onChange(searchTerm);
    }, 400);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timerRef.current);
    setSearchTerm(event.target.value);
  };

  return {
    searchTerm,
    handleInputChange,
  };
};

export default useSearchBar;
