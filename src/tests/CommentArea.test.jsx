import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import CommentArea from "../components/CommentArea";

describe("CommentArea testing", () => {
  it("mounts correctly in the page", () => {
    render(<CommentArea />);
    const viewCommentArea = screen.getByTestId("forViewCommentArea");
    expect(viewCommentArea).toBeInTheDocument();
  });
});
