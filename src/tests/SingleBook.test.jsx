import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, vi } from "vitest";

import BookList from "../components/BookList";

describe("testing card", () => {
  it("changes border from grey to red when clicked", () => {
    render(<BookList />);

    const grayBorderCard = screen.getByTestId("greyCard");
    expect(grayBorderCard).toHaveStyle("border: 1px solid gray");
    fireEvent.click(grayBorderCard);
    expect(grayBorderCard).toHaveStyle("border:5px solid red");
  });
});
