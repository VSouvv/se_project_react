import "./DeleteConfirmModal.css";

function DeleteConfirmModal({
  activeModal,
  closeActiveModal,
  handleCardDelete,
  isOpen,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal_content_type_delete">
        <button
          onClick={closeActiveModal}
          className="modal__close"
          type="button"
        ></button>
        <p className="modal__heading-delete">
          Are you sure, you want to delete this item?
        </p>
        <button
          onClick={handleCardDelete}
          className="modal__delete-confirm"
          type="submit"
        >
          Yes, delete item
        </button>
        <button
          onClick={closeActiveModal}
          type="submit"
          className="modal__delete-cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
export default DeleteConfirmModal;
