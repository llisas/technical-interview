import styled from "@emotion/styled";

interface SearchInputProps {
  isDarkMode: boolean;
}

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input<SearchInputProps>`
  background-color: ${(props) => (props.isDarkMode ? "#2d2d2d" : "#fafafa")};
  margin-top: 50px;
  width: 100%;
  max-width: 400px;
  border: none;
  border-bottom: 2px solid black;
  font-size: 20px;
  padding: 10px;
  color: ${(props) => (props.isDarkMode ? "lightgrey" : "black")};

  &:focus {
    outline: none;
    border-bottom-color: ${(props) => (props.isDarkMode ? "lightblue" : "lightblue")};
  }
`;
