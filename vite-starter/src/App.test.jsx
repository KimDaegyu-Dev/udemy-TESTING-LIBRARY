import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  expect(headingElement).toBeInTheDocument();
});

test("App contains correct heading by Role", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", { name: /learn react/i });
  expect(headingElement).toBeInTheDocument();
});

test("empty test", () => {});

test("test throws error explicitly", () => {
  expect(() => {
    throw new Error("test error");
  }).toThrow("test error");
});
