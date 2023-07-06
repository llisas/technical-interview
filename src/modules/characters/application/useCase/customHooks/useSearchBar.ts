import { useState, useEffect, useRef} from "react";

const useSearchBar = ( onChange: (searchTerm: string) => void) => {
  const [searchTerm, setSearchTerm] = useState('');
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (searchTerm !== '') {
    timerRef.current = setTimeout(() => {
      onChange(searchTerm);
    }, 400);
    return () => {
      clearTimeout(timerRef.current);
    };}
    else{
      onChange('')
    }
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
