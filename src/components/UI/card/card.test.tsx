/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Card from ".";

const SRC =
  "https://res.cloudinary.com/drive-mustang/vehicles/used/Dm5Z0gmlTQyKSq2J34Hm";
const ALT = "alt text";
const HREF = "http://localhost:3000/cars-for-sale/car/950117218";
const BTN_TITLE = "Button title";
const BTN_OUTLINE_TITLE = "Button outline title";
const CARD_TITLE = "Card title";

describe("Card", () => {
  it("Renders Card component with passed props", () => {
    render(
      <Card
        alt={ALT}
        src={SRC}
        href={HREF}
        btnTitle={BTN_TITLE}
        btnOutlineTitle={BTN_OUTLINE_TITLE}
        cardTitle={CARD_TITLE}
        price={0}
      />
    );

    const cardImg = screen.getByRole("img");
    const link = screen.getByRole("link");
    const cardPrice = screen.getByTestId("card-price");
    const cardTitle = screen.getByRole("heading", {
      name: CARD_TITLE,
    });

    expect(cardImg).toHaveAttribute("src", SRC);
    expect(cardImg).toHaveAttribute("alt", ALT);

    expect(link).toHaveAttribute("href", HREF);

    expect(cardPrice).toHaveTextContent("0");

    expect(cardTitle).toBeInTheDocument();
  });
});
