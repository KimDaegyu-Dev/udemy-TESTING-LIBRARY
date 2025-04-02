import { fireEvent, render, screen } from "@testing-library/react";
// import { logRoles } from "@testing-library/react";
import App from "./App";
test("button starts with correct label and color", () => {
  const { container } = render(<App />);
  // logRoles(container);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  // check initial button label
  expect(buttonElement).toHaveClass("red");
});

test("button has correct label and color after click", () => {
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
