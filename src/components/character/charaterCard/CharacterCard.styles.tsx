import styled from "@emotion/styled";

type StatusCircleProps = {
  status: "Alive" | "Dead";
};


export const CharacterCardContainer = styled.div`
  background-color: #e6e6e6;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center the flex items horizontally and vertically */
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
  margin-top: -50%;
`;

export const CharacterName = styled.h2`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: grey;
`;

export const StatusCircle = styled.span<StatusCircleProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: -5px;
  margin-right:5px;
  background-color: ${({ status }) => (status === "Alive" ? "green" : "red")};
`;