import React from "react";
import { BasicAvatarContainer } from "./style";

interface AvatarProps {
  readonly src: string;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <BasicAvatarContainer>
      <img src={src} alt="avatar" />
    </BasicAvatarContainer>
  );
};

export default Avatar;
