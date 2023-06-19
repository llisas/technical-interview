import styled from "@emotion/styled";
export const Container = styled.div`
  border-radius: 25px;
  width: 350px;
  position: fixed;
  background-color: #fff;
  border: 1px solid #ccc;
  list-style-type: none;
  margin-top: 100px;
`;

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  font-size: 18px;
  padding: 10px;
  &:hover {
    background-color: #f9f9f9;
  }
`;
