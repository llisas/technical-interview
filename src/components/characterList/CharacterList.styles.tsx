import styled from "@emotion/styled";

export const CharacterListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  font-size:35px;
  margin-top:2em;
  & img {
    border-radius: 50%;
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
  & p {
  
    color: #888888;
  }
`;
