import styled from "@emotion/styled";

interface ToggleButtonProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const IconSun = styled.span`
  font-size: 18px;
  margin: 10px 5px ;
`;

export const IconMoon = styled.span`
  font-size: 18px;
  margin:10px 5px;
`;

export const ToggleButtonStyled = styled.button<ToggleButtonProps>`
  position: relative;
  width: 30px;
  height: 15px;
  border: none;
  background-color: ${(props) => (props.active ? "#4CAF50" : "#ccc")};
  border-radius: 15px;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    width: 13px;
    height: 13px;
    background-color: #fff;
    border-radius: 50%;
    top: 1px;
    left: ${(props) => (props.active ? "calc(100% - 14px)" : "1px")};
    transition: left 0.2s ease-in-out;
  }
`;

export const ToggleButtonLabel = styled.span`
  font-size: 8px;
  margin: 4px;
`;
