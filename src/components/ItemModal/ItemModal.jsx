import "./ItemModal.css";
import close from "../../assets/close_icon-white.svg";

function ItemModal({ activeModal, onClose, card, handleDeleteItem }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="close button" className="modal__close-btn" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption"> {card.name} </h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            className="modal__delete-btn"
            onClick={() => handleDeleteItem(card) && onClose}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
