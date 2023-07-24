import styled from "@emotion/styled";
import ReactModal from "react-modal";

interface StyledModalProps {
  isDarkMode: boolean;
}

export const StyledModal = styled(ReactModal)<StyledModalProps>`
  width: 500px;
  width: 500px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => (props.isDarkMode ? "#BFBFBF" : "#F9FAF7")};
  border-radius: 15px;
  &.modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 65%;
    height: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  margin-right: 20px;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 15px;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const InformationContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color:grey;

  div {
    text-align: left;
    padding:5px;∫
  }

  div:first-of-type {
    margin: 0;
    text-align: center;
    font-size: 24px;
    text-transform: uppercase;
  }

  a.info-link {
    cursor: pointer;
    color: #999999;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: #777777; 
    }
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;
