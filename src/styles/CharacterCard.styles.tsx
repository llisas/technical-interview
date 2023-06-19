import styled from "@emotion/styled";

export const CharacterCardContainer = styled.div`
  background-color: #f9faf7;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid gray;
  margin-top: 10vh;
  padding: 1vh;
`;

export const CharacterImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CharacterImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-top: -50%; /* Para solapar el borde superior */
`;

export const CharacterName = styled.h2`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: grey;
`;
