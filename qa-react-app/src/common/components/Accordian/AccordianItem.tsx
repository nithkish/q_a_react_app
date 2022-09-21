import React, { useState } from "react";
import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";

interface AccordianProps {
  id: number;
  question: string;
  answer: string;
}

function AccordianItem({ id, question, answer }: AccordianProps) {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);

  const handleRemove = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setIsDeleteModal(!isDeleteModal);
  };

  const handleEdit = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setIsModal(!isModal);
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
        {isModal && <EditModal id={id} handler={setIsModal} />}
        {isDeleteModal && <DeleteModal id={id} handler={setIsDeleteModal} />}
      </div>
    </>
  );
}

export default AccordianItem;
