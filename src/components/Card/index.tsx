import React from "react";
import { BasicCard, CardContent, CardFooter, CardHeader } from "./style";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <BasicCard>{children}</BasicCard>;
};

const Header = ({ children }: CardProps) => {
  return <CardHeader>{children}</CardHeader>;
};

const Content = ({ children }: CardProps) => {
  return <CardContent>{children}</CardContent>;
};

const Footer = ({ children }: CardProps) => {
  return <CardFooter>{children}</CardFooter>;
};

Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;

export default Card;
