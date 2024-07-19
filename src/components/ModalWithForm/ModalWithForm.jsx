import "./ModalWithForm.css";
import closeBtn from "../../assets/close_icon.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  isOpen,
  onSubmit,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal modal_opened">
      <div className="modal__content">
        <h2 className="modal__title"> {title} </h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeBtn} alt="close button" className="modal__close-btn" />
        </button>

        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
