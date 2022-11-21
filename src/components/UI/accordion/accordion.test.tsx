/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Accordion from ".";

describe("Accordion", () => {
  it("Renders Accordion component with caret symbol button", () => {
    render(<Accordion title="" content={<></>}></Accordion>);

    const accordion = screen.getByTestId("accordion");
    const btn = screen.getByRole("img");

    expect(accordion).toBeInTheDocument();
    expect(btn).toHaveAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Feather-arrows-chevron-up.svg"
    );
  });

  it("Renders Accordion with passed title", () => {
    render(<Accordion title="Sample Title" content={<></>}></Accordion>);

    const accordionTitle = screen.getByRole("heading", {
      name: /Sample Title/i,
    });

    expect(accordionTitle).toBeInTheDocument();
  });
});
