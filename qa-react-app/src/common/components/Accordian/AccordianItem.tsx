import React, { useState } from "react";
import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";
import PropTypes from "prop-types";

interface AccordianProps {
  id: number;
  question: string;
  answer: string;
}

/**
 * Re-usable Functional react component for AccordianItem
 * @description used to display the created question and answers along with respective edit and delete buttons
 * answer is dispalyed on click of the question
 * @param {*} { id, question, answer }
 * @return {*} JSX
 */

function AccordianItem({ id, question, answer }: AccordianProps) {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);

  /**
 * @function handleRemove
 * @description - triggeres the delete modal
 * @param {MouseEvent} e - Mouse event of HTML image element.
 * @returns {object} - void
 */

  const handleRemove = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setIsDeleteModal(!isDeleteModal);
  };

    /**
 * @function handleEdit
 * @description - triggeres the edit modal
 * @param {MouseEvent} e - Mouse event of HTML image element.
 * @returns {object} - void
 */

  const handleEdit = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setIsEditModal(!isEditModal);
  };

  return (
    <>
      <div className="ques-ans-box">
        <h4 data-testid="question" className="question" onClick={() => setCollapse(!collapse)}>
          {question}
          <img
            data-testid="edit-icon"
            className="edit"
            src={`${process.env.PUBLIC_URL}assets/images/edit-24.png`}
            alt="Edit Icon"
            onClick={handleEdit}
            />
          <img
            data-testid="delete-icon"
            className="delete"
            src={`${process.env.PUBLIC_URL}assets/images/trash-24.png`}
            alt="Delete Icon"
            onClick={handleRemove}
          />
        </h4>
        {collapse && <div data-testid="answer" className="answer">{answer}</div>}
        {isEditModal && <EditModal id={id} handler={setIsEditModal} />}
        {isDeleteModal && <DeleteModal id={id} handler={setIsDeleteModal} />}
      </div>
    </>
  );
}

AccordianItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};


export default AccordianItem;
