import styled from "@emotion/styled";
import { FaArrowLeft } from "react-icons/fa";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-bottom: 45px;
`;

export const Title = styled.h1`
  font-size: 90px;
  margin-bottom: 16px;
  color: grey;
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Image = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.p`
  margin-bottom: -10px;
  font-size: 18px;
  text-align: left;
  color: grey;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BackButton = styled.div`

  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  justify-content: flex-start;
`;

export const ArrowIcon = styled(FaArrowLeft)`
  font-size: 24px;
  margin-right: 8px;
`;

export const BackText = styled.span`
  font-size: 16px;
`;


export const NavContainer = styled.span`
width: 100%;
padding:20px;
`;
