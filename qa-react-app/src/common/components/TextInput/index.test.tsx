import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FormInput from "./FormInput";
import TextArea from "./TextArea";

describe("FormInput", () => {
  it("renders without crashing and shows the label correctly", () => {
    render(
      <FormInput
        label={"TestLabel"}
        name={"test"}
        value={"testValue"}
        onChange={jest.fn()}
      />
    );
    const label = screen.getByText("TestLabel");
    expect(label).toBeInTheDocument();
  });
  it("Value is rightly updated", () => {
    render(
      <FormInput
        label={"TestLabel"}
        name={"test"}
        value={"testvalue"}
        onChange={jest.fn()}
      />
    );
    const input = screen.getByTestId("form-input");
    expect(input).toHaveValue("testvalue");
  });
});

describe("Text Area", () => {
  it("renders without crashing and shows the label correctly", () => {
    render(
      <TextArea
        label={"TestLabel"}
        name={"test"}
        value={"testValue"}
        onChange={jest.fn()}
      />
    );
    const label = screen.getByText("TestLabel");
    expect(label).toBeInTheDocument();
  });
  it("Value is rightly updated", () => {
    render(
      <TextArea
        label={"TestLabel"}
        name={"test"}
        value={"testvalue"}
        onChange={jest.fn()}
      />
    );
    const input = screen.getByTestId("text-area");
    expect(input).toHaveValue("testvalue");
  });
});

