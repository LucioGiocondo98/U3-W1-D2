import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import SingleBook from "../components/SingleBook";

describe("testing card", () => {
  it("changes border from grey to red when clicked", () => {
    render(<SingleBook />);
    const grayBorderCard = screen.getBYTestId("grayCard");
    expect(grayBorderCard).toHaveStyle("border: 1px solid gray");
    fireEvent.click(grayBorderCard);
    expect(grayBorderCard).toHaveStyle("border:5px solid red");
  });
});
