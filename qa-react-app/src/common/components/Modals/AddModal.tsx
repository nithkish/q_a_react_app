import React, { useState } from "react";
import Checkbox from "../CheckBox/Checkbox";
import FormInput from "../TextInput/FormInput";
import TextArea from "../TextInput/TextArea";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  questionsData,
  addQuestion,
} from "../../../features/questionAnswers/questionAnswersSlice";
import ToolTip from "../ToolTip/ToolTip";
import PropTypes from "prop-types";

interface AddModalProps {
  handler: (flag: boolean) => void;
}

/**
 * Functional react component for Create new Q/A modal
 * @description used where new Question and Answer need to be created,
 * takes question and answer as input through the form, contains a checkbox to add delay.
 * @param {*} { handler } - to handle closing and opening of the modal
 * @return {*} JSX
 */

function AddModal({ handler }: AddModalProps) {
  const formInitialValue = {
    question: "",
    answer: "",
  };
  const [formData, setFormData] = useState(formInitialValue);
  const [isDelay, setIsDelay] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const questions = useAppSelector(questionsData);

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const addNewQuestion = () => {
    setShowError(false);
    if (formData["question"].length === 0 || formData["answer"].length === 0) {
      setShowError(true);
    } else {
      if (isDelay) {
        setTimeout(() => {
          dispatch(addQuestion({ ...formData, id: questions.length }));
        }, 5000);
        setFormData(formInitialValue);
        handler(false);
      } else {
        dispatch(addQuestion({ ...formData, id: questions.length }));
        setFormData(formInitialValue);
        handler(false);
      }
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <ToolTip
            data-testid="header"
            label={"Create Question & Answer"}
            text={"Here you can create new question and answer."}
          />
          <img
            data-testid="close-icon"
            src={`${process.env.PUBLIC_URL}assets/images/close-20.png`}
            alt="Close Icon"
            onClick={() => handler(false)}
          />
        </div>
        <div className="modal-body">
          <form>
            <FormInput
              label="Question"
              name="question"
              value={formData["question"]}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextArea
              label="Answer"
              name="answer"
              value={formData["answer"]}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <Checkbox
              label="Add Delay"
              name="delay"
              onChange={(e) => setIsDelay(e.target.checked)}
            />
          </form>
        </div>
        <div className="modal-footer">
          <button
            className="button button-secondary-bordered"
            onClick={() => handler(false)}
          >
            Cancel
          </button>
          <button className="button button-primary" onClick={addNewQuestion}>
            Create
          </button>
        </div>
        {showError && (
          <div data-testid="error-message" className="error-message">
            Question/Answer cannot be Empty!
          </div>
        )}
      </div>
      <div className="modal-backdrop"></div>
    </>
  );
}

AddModal.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default AddModal;
