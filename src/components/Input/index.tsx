import React from "react";
import { BasicInput, Container } from "./style";

interface InputProps {
  readonly value?: null | string;
  readonly type?: string;
  readonly placeholder?: string;
  readonly label?: string;
  onChange?: (value: string) => void;
}

const Input = ({
  type = "text",
  value = "",
  placeholder = "",
  label = "",
  onChange,
}: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange && onChange(value);
  };

  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <BasicInput
        id={label}
        {...(value && { value: value })}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        aria-label="search repo"
      />
    </Container>
  );
};

export default Input;
