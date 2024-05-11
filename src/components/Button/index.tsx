import React from "react";
import { BasicButton } from "./style";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (args?: any) => void;
}
const Button = ({ children, onClick }: ButtonProps) => {
  const clickHandler = () => {
    onClick?.();
  };

  return <BasicButton onClick={clickHandler}>{children}</BasicButton>;
};

export default Button;
