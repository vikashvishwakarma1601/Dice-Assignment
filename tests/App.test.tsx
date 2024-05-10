import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom";

describe("App Component Tests", () => {
  it("renders with correct text", () => {
    render(<App />);
    const textElement = screen.getByText("Dice Assignment");
    expect(textElement).toBeInTheDocument();
  });
});
