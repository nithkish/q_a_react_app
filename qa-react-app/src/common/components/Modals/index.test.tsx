import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { Provider } from "react-redux";
import { store } from "../../../app/store";

describe("Add Modal", () => {
  it("renders without crashing and shows the header correctly", () => {
    render(
      <Provider store={store}>
        <AddModal handler={jest.fn()} />
      </Provider>
    );
    const label = screen.getByText("Create Question & Answer");
    expect(label).toBeInTheDocument();
  });
  it("Empty question answer shows error", () => {
    render(
      <Provider store={store}>
        <AddModal handler={jest.fn()} />
      </Provider>
    );
    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Create"));
    expect(screen.queryByTestId("error-message")).toBeInTheDocument();
  });
});

describe("Edit Modal", () => {
  it("renders without crashing and shows the header correctly", () => {
    render(
      <Provider store={store}>
        <EditModal id={1} handler={jest.fn()} />
      </Provider>
    );
    const label = screen.getByText("Edit Question & Answer");
    expect(label).toBeInTheDocument();
  });
  it("Empty question answer shows error", () => {
    render(
      <Provider store={store}>
        <EditModal id={1} handler={jest.fn()} />
      </Provider>
    );
    expect(screen.queryByTestId("error-message")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Save"));
    expect(screen.queryByTestId("error-message")).toBeInTheDocument();
  });
});

describe("Delete Modal", () => {
    it("renders without crashing and shows the header correctly", () => {
      render(
        <Provider store={store}>
          <DeleteModal id={1} handler={jest.fn()} />
        </Provider>
      );
      const label = screen.getByText("Delete Question & Answer");
      expect(label).toBeInTheDocument();
    });
})