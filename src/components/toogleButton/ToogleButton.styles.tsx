import styled from "@emotion/styled";

interface ToggleButtonProps {
  active: boolean;
}

export const ToggleButtonStyled = styled.button<ToggleButtonProps>`
position: relative;
width: 60px;
height: 30px;
border: none;
background-color: ${(props) => (props.active ? "#4CAF50" : "#ccc")};
border-radius: 15px;
cursor: pointer;
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
  padding : 15px
`;
