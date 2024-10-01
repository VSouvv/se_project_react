import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const DeleteConfirmModal = ({
  activeModal,
  closeActiveModal,
  onDeleteItem,
  handleDeleteConfirmModal,
}) => {
  return (
    <div
      className={`modal ${
        activeModal === "delete-confirmation" && "modal_opened"
      }`}
    >
      <div className="modal__content modal__content_type_delete">
        <button
          onClick={closeActiveModal}
          className="modal__close modal__close_type_grey"
          type="button"
        ></button>

        <button
          className={modalDeleteButtonClassName}
          onClick={(e) => onDeleteItem(card._id)}
          type="button"
        >
          Yes, delete item
        </button>
        <button className="modal__cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
