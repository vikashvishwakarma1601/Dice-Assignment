import styled from "styled-components";

export const BasicCard = styled.div`
  width: 220px;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const CardHeader = styled.div`
  width: 100%;
  min-height: 100px;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100px;
  padding: 0.5rem 0;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  overflow-y: scroll;
`;

export const CardFooter = styled.div`
  width: 100%;
`;
