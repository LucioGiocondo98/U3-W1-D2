import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";

describe("Welcome testing", () => {
  it("mounts correctly the Welcome", () => {
    render(<Welcome />);
    const welcome = screen.getByText(/buy whatever u want/i);
    expect(welcome).toBeInTheDocument();
  });
});
