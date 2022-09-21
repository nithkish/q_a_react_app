import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AccordianItem from "./AccordianItem";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

describe("Accordian Item", () => {
  it("renders without crashing and shows the question correctly", () => {
    render(
      <AccordianItem id={1} question={"How are you?"} answer={"I am fine"} />
    );
    const label = screen.getByText("How are you?");
    expect(label).toBeInTheDocument();
  });
  it("Answer displayed only on Clicking Question", () => {
    render(
      <AccordianItem id={1} question={"How are you?"} answer={"I am fine"} />
    );
    expect(screen.queryByText("I am fine")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("How are you?"));
    expect(screen.queryByText("I am fine")).toBeInTheDocument();
  });
  it("Clicking Edit button opens Modal for Editing", () => {
    render(
      <Provider store={store}>
        <AccordianItem id={1} question={"How are you?"} answer={"I am fine"} />
      </Provider>
    );
    expect(
      screen.queryByText("Edit Question & Answer")
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("edit-icon"));
    expect(screen.queryByText("Edit Question & Answer")).toBeInTheDocument();
  });
  it("Clicking Delete button opens Modal for Delete", () => {
    render(
      <Provider store={store}>
        <AccordianItem id={1} question={"How are you?"} answer={"I am fine"} />
      </Provider>
    );
    expect(
      screen.queryByText("Delete Question & Answer")
    ).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("delete-icon"));
    expect(screen.queryByText("Delete Question & Answer")).toBeInTheDocument();
  });
});
