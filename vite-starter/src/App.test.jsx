import { render, screen } from "@testing-library/react";
import App from "./App";

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

test("button starts with correct color", () => {
  const { container } = render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

test("button has correct color after click", () => {});
test("button has correct text after click", () => {});
