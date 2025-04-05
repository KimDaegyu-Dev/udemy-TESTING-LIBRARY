import { render, screen } from "@testing-library/react";

import { expect } from "vitest";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(3);

  /// confirm alt text of images
  const altText = scoopImages.map((el) => el.alt);
  expect(altText).toEqual([
    "Chocolate scoop",
    "Vanilla scoop",
    "Strawberry scoop",
  ]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  // find images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // confirm alt text of images
  const altText = toppingImages.map((el) => el.alt);
  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
