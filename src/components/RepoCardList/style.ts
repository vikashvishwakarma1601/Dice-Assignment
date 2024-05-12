import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e3d5ca;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-auto-flow: row;
  grid-gap: 1rem;
  overflow-y: auto;
  position: relative;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TextWrapper = styled.p`
  width: 100%;
  max-height: 45px;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
`;
