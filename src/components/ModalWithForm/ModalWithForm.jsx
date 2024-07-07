import "./ModalWithForm.css";
import close from "../../assets/close_icon.svg";

function ModalWithForm({ children, buttonText, title, onClose, isOpened }) {
  if (!isOpened) {
    return null;
  }

  return (
    <div className="modal modal_opened">
      <div className="modal__content">
        <h2 className="modal__title"> {title} </h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close button" className="modal__close-btn" />
        </button>

        <form className="modal__form">
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
