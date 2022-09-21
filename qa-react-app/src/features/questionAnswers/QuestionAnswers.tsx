import React from "react";
import { useEffect, useState } from "react";
import AccordianItem from "../../common/components/Accordian/AccordianItem";
import AddModal from "../../common/components/Modals/AddModal";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  addSorting,
  isSortActive,
  questionsData,
  resetAll,
} from "./questionAnswersSlice";
import ToolTip from "../../common/components/ToolTip/ToolTip";
import "./index.css";

export function QuestionAnswers() {
  const [isModal, setIsModal] = useState(false);

  const dispatch = useAppDispatch();
  const questions = useAppSelector(questionsData);
  const isSort = useAppSelector(isSortActive);
  console.log(questions);

  useEffect(() => {
    console.log("formData", isSort, questions);
  }, [isSort, questions]);

  return (
    <div>
      <div className="container">
        <header>
          <h1>Awesome Q/A Tool</h1>
        </header>
        <div className="wrapper">
          <aside>
            <div>
              <p>
                Here you can find{" "}
                <b>{questions.length > 0 ? questions.length : "no"}</b>{" "}
                question. Feel free to create your own question!
              </p>
            </div>
          </aside>
          <main>
            <div className="form-header">
              <ToolTip
                label={"Questions & Answers"}
                text={
                  "Here you can find the created questions and their answers."
                }
              />
              <div className="form-header-buttons">
                <button
                  className="button button-small"
                  onClick={() => dispatch(addSorting(!isSort))}
                >
                  Sort
                  <img
                    src={`${process.env.PUBLIC_URL}assets/images/arrow-${
                      isSort ? "up" : "down"
                    }.png`}
                    alt="Sort Icon"
                  />
                </button>
                <button
                  className="button button-small"
                  onClick={() => dispatch(resetAll())}
                >
                  Remove All
                  <img
                    src={`${process.env.PUBLIC_URL}assets/images/trash-24.png`}
                    alt="Trash Icon"
                  />
                </button>
                <button
                  className="button button-small button-primary"
                  onClick={() => setIsModal(true)}
                >
                  + Create Question
                </button>
              </div>
            </div>
            <div className="form-body">
              {questions.length > 0 ? (
                questions.map(
                  ({ id, question, answer }, index) =>
                    question && (
                      <AccordianItem
                        key={index}
                        id={id}
                        question={question}
                        answer={answer}
                      />
                    )
                )
              ) : (
                <div className="ques-ans-error-box">
                  All Questions Removed!!!
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      {isModal && <AddModal handler={setIsModal} />}
    </div>
  );
}
