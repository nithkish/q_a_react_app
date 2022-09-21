import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";
import { JsxEmit } from "typescript";

describe("Tool Tip", () => {
  it("renders without crashing and shows the label correctly", () => {
    render(
      <Checkbox
        label={"Add Delay"}
        name={"checkbox"}
        onChange={jest.fn()}
      />
    );
    const label = screen.getByText("Add Delay");
    expect(label).toBeInTheDocument();
  });
  it("checkox value is rightly updated on Click", () => {
    render(
        <Checkbox
        label={"Add Delay"}
        name={"checkbox"}
        onChange={jest.fn()}
      />
    );
    const checkbox = screen.getByTestId("checkbox-div");
    fireEvent.click(checkbox);
    const checkboxInput = screen.getByTestId("checkbox");
    expect(checkboxInput).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkboxInput).not.toBeChecked();
  });
});

