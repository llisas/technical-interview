import styled from "@emotion/styled";
import { FaArrowLeft } from "react-icons/fa";

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