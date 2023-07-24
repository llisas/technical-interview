import styled from "@emotion/styled";
import ToggleButton from "../toogleButton/ToggleButton";

export const IconSun = styled.span`
font-size: 24px;
margin: 0 10px;
`;

export const IconMoon = styled.span`
font-size: 24px;
margin: 0 10px;
`;


interface ToggleButtonProps {
  active: boolean;
}

export const ToggleButtonStyled = styled.button<ToggleButtonProps>`
  /* Estilos del componente base ToggleButtonStyled */
  position: relative;
  width: 60px;
  height: 30px;
  border: none;
  background-color: ${(props) => (props.active ? "#4CAF50" : "#ccc")};
  border-radius: 15px;
  cursor: pointer;

  /* Estilos del pseudoelemento &:after */
  &:after {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: #fff;
    border-radius: 50%;
    top: 2px;
    left: ${(props) => (props.active ? "calc(100% - 28px)" : "2px")};
    transition: left 0.2s ease-in-out;
  }
`;

export const ToggleButtonLabel = styled.span`
  font-size: 12px;
  margin: 8px;
`;

export const SmallToggleButton = styled(ToggleButtonStyled)`
  /* Estilos adicionales del SmallToggleButton */
  width: 30px;
  height: 15px;
  font-size: 8px;
  padding: 2px 4px;
  /* Anulamos las propiedades que no queremos heredar del componente base */
  background-color: ${(props) => (props.active ? "#4CAF50" : "#ccc")};
  border-radius: 10px;

  /* Estilos del pseudoelemento &:after para el SmallToggleButton */
  &:after {
    width: 12px;
    height: 12px;
    top: 1px;
    left: ${(props) => (props.active ? "calc(100% - 14px)" : "1px")};
  }
`;
