/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("Renders Button component with passed title", () => {
    render(<Button title="Button title" />);

    const button = screen.getByRole("button", {
      name: /Button title/i,
    });

    expect(button).toBeInTheDocument();
  });
});
