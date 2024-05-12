import styled from "styled-components";

export const BasicAvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-inline: auto;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
