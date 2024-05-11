import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "../components";

describe("Input Component Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Input with label and placeholder", () => {
    render(<Input label="Test Input" placeholder="Enter value" />);
    const labelElement = screen.getByLabelText("Test Input");
    expect(labelElement).toBeInTheDocument();
    const inputElement = screen.getByPlaceholderText("Enter value");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onChange callback when input value changes", () => {
    const onChangeMock = jest.fn();
    render(<Input label="Test Input" onChange={onChangeMock} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "new value" },
    });
    expect(onChangeMock).toHaveBeenCalledWith("new value");
  });

  it("renders Input without onChange callback", () => {
    render(<Input label="Test Input" />);
    const labelElement = screen.getByLabelText("Test Input");
    expect(labelElement).toBeInTheDocument();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "new value" },
    });
  });

  it("renders Input with no initial value", () => {
    render(<Input label="Test Input" />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.value).toBe("");
  });

  it("renders Input with different input types", () => {
    render(<Input label="Test Input" type="email" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");
  });
});
