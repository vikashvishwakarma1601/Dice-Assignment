import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: #edede9;
  border-radius: 3px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const FilterWrapper = styled.div<{
  $align?: string;
}>`
  width: 100%;
  display: flex;

  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-content: flex-start;
  align-items: ${(props) => props?.$align || "center"};
  gap: 1rem;
`;
