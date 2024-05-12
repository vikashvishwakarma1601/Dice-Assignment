import React from "react";
import { BasicDropdown, Container, Option } from "./style";

interface DropdownProps {
  readonly label: string;
  readonly options?: {
    label: string;
    value: string | number;
  }[];
  readonly selected?: string | number;
  onSelect?: (val: string) => void;
}

const Dropdown = ({
  label,
  options = [],
  selected = "",
  onSelect,
}: DropdownProps) => {
  const selecthandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onSelect && onSelect(value);
  };

  const renderOptions = () => {
    return React.Children.toArray(
      options.map((opt) => {
        return <Option value={opt.value}>{opt.label}</Option>;
      })
    );
  };

  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <BasicDropdown
        value={selected}
        name={label}
        id={label}
        onChange={selecthandler}
      >
        {!!options.length && <Option value="">Please choose an option</Option>}
        {renderOptions()}
      </BasicDropdown>
    </Container>
  );
};

export default Dropdown;
