import React from "react";
import { useDispatch } from "react-redux";
import { deleteQuestion } from "../../../features/questionAnswers/questionAnswersSlice";
import ToolTip from "../ToolTip/ToolTip";
import PropTypes from "prop-types";

interface DeleteModalProps {
  id: number;
  handler: (flag: boolean) => void;
}

/**
 * Functional react component for Deleting specific questions
 * @description used as a confirmation prompt before deleting a particular Q/A, taking
 * the modal handler and id of Q/A object as the input props.
 * @param {*} { handler, id }
 * @return {*} JSX
 */

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

DeleteModal.propTypes = {
  handler: PropTypes.func.isRequired,
  id:PropTypes.number.isRequired
};
export default DeleteModal;
