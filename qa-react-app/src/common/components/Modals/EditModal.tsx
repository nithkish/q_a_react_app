import React, { useState } from "react";
import FormInput from "../TextInput/FormInput";
import TextArea from "../TextInput/TextArea";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  questionsData,
  saveQuestion,
} from "../../../features/questionAnswers/questionAnswersSlice";
import ToolTip from "../ToolTip/ToolTip";

interface EditModalProps {
  id: number;
  handler: (flag: boolean) => void;
}
function EditModal({ id, handler }: EditModalProps) {
  const dispatch = useAppDispatch();
  const questions = useAppSelector(questionsData);
  const question = questions.find((question) => question.id == id);
  const formInitialValue = {
    question: question ? question.question : "",
    answer: question ? question.answer : "",
  };
  const [formData, setFormData] = useState(formInitialValue);

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const editQuestion = () => {
    dispatch(saveQuestion({ ...formData, id: id }));
    setFormData(formInitialValue);
    handler(false);
  };

  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <ToolTip
            label={"Edit Question & Answer"}
            text={"Here you can edit question and answer."}
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
          </form>
        </div>
        <div className="modal-footer">
          <button
            className="button button-secondary-bordered"
            onClick={() => handler(false)}
          >
            Cancel
          </button>
          <button className="button button-primary" onClick={editQuestion}>
            Save
          </button>
        </div>
      </div>
      <div className="modal-backdrop"></div>
    </>
  );
}

export default EditModal;