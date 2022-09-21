import React from "react";
import { useDispatch } from "react-redux";
import { deleteQuestion } from "../../../features/questionAnswers/questionAnswersSlice";
import ToolTip from "../ToolTip/ToolTip";

interface DeleteModalProps {
  id: number;
  handler: (flag: boolean) => void;
}
function DeleteModal({ id, handler }: DeleteModalProps) {
  const dispatch = useDispatch();

  const removeQuestion = () => {
    dispatch(deleteQuestion({ id: id }));
    handler(false);
  };

  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <ToolTip
            label={"Delete Question & Answer"}
            text={"Here you can delete question and answer."}
          />
          <img
            src={`${process.env.PUBLIC_URL}assets/images/close-20.png`}
            alt="Close Icon"
            onClick={() => handler(false)}
          />
        </div>
        <div className="modal-body">
          Are you sure you want to delete this Question and Answer?
        </div>
        <div className="modal-footer">
          <button
            className="button button-secondary-bordered"
            onClick={() => handler(false)}
          >
            Cancel
          </button>
          <button className="button button-primary" onClick={removeQuestion}>
            Delete
          </button>
        </div>
      </div>
      <div className="modal-backdrop"></div>
    </>
  );
}

export default DeleteModal;
