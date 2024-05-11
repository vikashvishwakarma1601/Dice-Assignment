import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "../components";

describe("Avataar Component Tests", () => {
  it("renders Avatar with correct source", () => {
    render(<Avatar src="test.jpg" />);
    const avatarImg = screen.getByAltText("avatar");
    expect(avatarImg).toHaveAttribute("src", "test.jpg");
  });

  it("renders Avatar with correct alt text", () => {
    render(<Avatar src="test.jpg" />);
    const avatarImg = screen.getByAltText("avatar");
    expect(avatarImg).toBeInTheDocument();
  });
});
