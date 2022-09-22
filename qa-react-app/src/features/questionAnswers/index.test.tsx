import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { QuestionAnswers } from "./QuestionAnswers";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("Question Answers", () => {
  it("renders without crashing and shows the header correctly", () => {
    render(
      <Provider store={store}>
        <QuestionAnswers  />
      </Provider>
    );
    const label = screen.getByText("Awesome Q/A Tool");
    expect(label).toBeInTheDocument();
  });
  it("create question button works as expected", () => {
    render(
      <Provider store={store}>
        <QuestionAnswers />
      </Provider>
    );
    expect(screen.queryByText("Create Question & Answer")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("create-button"));
    expect(screen.queryByText("Create Question & Answer")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("form-input"),{target:{value:"How are you?"}});
    expect(screen.queryByDisplayValue("How are you?")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("text-area"),{target:{value:"I am Fine"}});
    expect(screen.queryByDisplayValue("I am Fine")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Create"));
    expect(screen.queryByText("Create Question & Answer")).not.toBeInTheDocument();
    expect(screen.queryByText("How are you?")).toBeInTheDocument();
    expect(screen.queryByText("I am Fine")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("How are you?"));
    expect(screen.queryByText("I am Fine")).toBeInTheDocument();
  });
  it("remove all button works as expected", () => {
    render(
      <Provider store={store}>
        <QuestionAnswers />
      </Provider>
    );
    const remove = screen.getByText("Remove All");
    expect(remove).toBeInTheDocument();
    expect(screen.queryByText("All Questions Removed!!!")).not.toBeInTheDocument();
    fireEvent.click(remove);
    expect(screen.queryByText("All Questions Removed!!!")).toBeInTheDocument();
  });
  it("delete button works as expected", () => {
    render(
      <Provider store={store}>
        <QuestionAnswers />
      </Provider>
    );
    expect(screen.queryByText("All Questions Removed!!!")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("delete-icon"));
    expect(screen.queryByText("Delete Question & Answer")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Delete"));
    expect(screen.queryByText("Delete Question & Answer")).not.toBeInTheDocument();
    expect(screen.queryByText("All Questions Removed!!!")).toBeInTheDocument();
  });
  it("edit button works as expected", () => {
    render(
      <Provider store={store}>
        <QuestionAnswers />
      </Provider>
    );
    expect(screen.queryByText("How are you?")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("edit-icon"));
    expect(screen.queryByText("Edit Question & Answer")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("form-input"),{target:{value:"How are you?"}});
    expect(screen.queryByDisplayValue("How are you?")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Save"));
    expect(screen.queryByText("Edit Question & Answer")).not.toBeInTheDocument();
    expect(screen.queryByText("How are you?")).toBeInTheDocument();
  });
  it("sort button works as expected", () => {
    render(
      <Provider store={store}>
        <QuestionAnswers />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("create-button"));
    fireEvent.change(screen.getByTestId("form-input"),{target:{value:"ABCD How are you?"}});
    fireEvent.change(screen.getByTestId("text-area"),{target:{value:"I am Fine"}});
    fireEvent.click(screen.getByText("Create"));
    let questions= screen.getAllByTestId("question");
    expect(questions[0]).toHaveTextContent("How to add a question?");
    fireEvent.click(screen.getByText("Sort"));
    questions= screen.getAllByTestId("question");
    expect(questions[0]).toHaveTextContent("ABCD How are you?");
  });
})



