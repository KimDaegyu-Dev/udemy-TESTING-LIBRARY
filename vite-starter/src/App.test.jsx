import { fireEvent, render, screen } from "@testing-library/react";
// import { logRoles } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";
test("button starts with correct label and color", () => {
  const { container } = render(<App />);
  // logRoles(container);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  // check initial button label
  expect(buttonElement).toHaveClass("red");
});

test("button flow", () => {
  //render app
  render(<App />);
  //find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  //click the button
  fireEvent.click(buttonElement);
  // check the button label and color
  expect(buttonElement).toHaveTextContent(/red/i);
  expect(buttonElement).toHaveClass("blue");
});

test("checkbox flow before button click", () => {
  //render app
  render(<App />);
  // find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkBoxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });
  // check the initial state of the button
  expect(buttonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();
  // click the button
  // check the button is disabled
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("gray");
  // click the button again
  // check the button is enabled
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("red");
});

test("checkbox flow after button click", () => {
  //render app
  render(<App />);
  // find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkBoxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  // click the button
  fireEvent.click(buttonElement);
  fireEvent.click(checkBoxElement);
  // check the button is disabled
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("gray");
  // click the button again
  // check the button is enabled
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("blue");
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphens", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});

// test("App contains correct heading", () => {
//   render(<App />);
//   const headingElement = screen.getByText(/learn react/i);
//   expect(headingElement).toBeInTheDocument();
// });

// test("App contains correct heading by Role", () => {
//   render(<App />);
//   const headingElement = screen.getByRole("heading", { name: /learn react/i });
//   expect(headingElement).toBeInTheDocument();
// });

// test("empty test", () => {});

// test("test throws error explicitly", () => {
//   expect(() => {
//     throw new Error("test error");
//   }).toThrow("test error");
// });
