import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToolTip from "./ToolTip";

describe("Tool Tip", () => {
  it("renders without crashing and shows the label correctly", () => {
    render(
      <ToolTip
        label={"Tool tip label"}
        text={"Tool tip text."}
      />
    );
    const label = screen.getByText("Tool tip label");
    expect(label).toBeInTheDocument();
  });
  it("Value is rightly updated", () => {
    render(
        <ToolTip
        label={"Tool tip label"}
        text={"Tool tip text."}
      />
    );
    const input = screen.getByTestId("tool-tip-text");
    expect(input).toHaveTextContent("Tool tip text.");
  });
});

