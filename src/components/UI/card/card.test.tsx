/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";

import Card from ".";

const SRC = "https://flowbite.com/docs/images/blog/image-1.jpg";
const ALT = "Table with a computer";

describe("Card", () => {
  // Test 1
  it("Renders default card with children", () => {
    render(<Card>Sample card</Card>);

    const card = screen.getByTestId("card");

    expect(card).toBeInTheDocument();
    expect(card.textContent).toBe("Sample card");
  });
});
