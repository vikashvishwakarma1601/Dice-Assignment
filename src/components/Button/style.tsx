import styled from "styled-components";

export const BasicButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 0 2rem;
  border: none;
  font-size: 14px;
  color: #ffffff;
  background-color: #262525;
  border-radius: 3px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    background-color: #000000;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;
