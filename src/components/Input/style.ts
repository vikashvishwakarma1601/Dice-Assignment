import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const BasicInput = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  padding: 0.5rem 1rem;
  letter-spacing: 1px;
`;
