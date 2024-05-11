import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "../components";

const options = [
  { label: "Option 1", value: "value1" },
  { label: "Option 2", value: "value2" },
];

describe("Dropdown Component Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Dropdown with label and options", () => {
    const options = [
      { label: "Option 1", value: "value1" },
      { label: "Option 2", value: "value2" },
    ];
    render(
      <Dropdown label="Test Dropdown" options={options} onSelect={() => {}} />
    );
    const labelElement = screen.getByLabelText("Test Dropdown");
    expect(labelElement).toBeInTheDocument();
    options.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });

  it("calls onSelect callback when an option is selected", () => {
    const onSelectMock = jest.fn();

    render(
      <Dropdown
        label="Test Dropdown"
        options={options}
        onSelect={onSelectMock}
      />
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "value1" },
    });
    expect(onSelectMock).toHaveBeenCalledWith("value1");
  });

  it("renders Dropdown with no options", () => {
    render(<Dropdown label="Test Dropdown" onSelect={() => {}} />);
    const labelElement = screen.getByLabelText("Test Dropdown");
    expect(labelElement).toBeInTheDocument();
    expect(screen.queryByRole("option")).toBeNull();
  });

  it("renders Dropdown without onSelect callback", () => {
    const options = [{ label: "Option 1", value: "value1" }];
    render(<Dropdown label="Test Dropdown" options={options} />);
    const labelElement = screen.getByLabelText("Test Dropdown");
    expect(labelElement).toBeInTheDocument();
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "value1" },
    });
    // No error should occur
  });
});
