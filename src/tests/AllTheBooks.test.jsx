import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import AllTheBooks from "../components/AllTheBooks";

test("render card for each book", () => {
  render(<AllTheBooks />);
  const cards = screen.getAllByTestId("book-card");
  expect(cards).toHaveLength(91);
});
