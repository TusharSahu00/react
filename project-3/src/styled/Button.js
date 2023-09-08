import { styled } from "styled-components";
export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.4s ease-in;

  
  &:hover {
    background-color: transparent;
    border: 1px solid black;
    color: black;
    transition: background-color 0.4s ease-in;
  }
`;

export const OutlineButton = styled(Button)``;