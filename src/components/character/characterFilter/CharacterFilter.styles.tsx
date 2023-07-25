import styled from "@emotion/styled";

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;