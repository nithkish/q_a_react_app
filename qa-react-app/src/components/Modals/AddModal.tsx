import React, { useState } from "react";
import Checkbox from "../Checkbox";
import FormInput from "../FormInput";
import TextArea from "../TextArea";
import { useDispatch, useSelector } from "react-redux";
import {
  questionsData,
  addQuestion,
} from "../../features/questionAnswers/questionAnswersSlice";
import ToolTip from "../ToolTip";

interface AddModalProps {
  handler: (flag: boolean) => void;
}
function AddModal({ handler }: AddModalProps) {
  const formInitialValue = {
    question: "",
    answer: "",
  };
  const [formData, setFormData] = useState(formInitialValue);
  const [isDelay, setIsDelay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const questions = useSelector(questionsData);

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const addNewQuestion = () => {
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
  };

  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <ToolTip
            label={"Create Question & Answer"}
            text={"Here you can create new question and answer."}
          />
          <img
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
      </div>
      <div className="modal-backdrop"></div>
    </>
  );
}

export default AddModal;
