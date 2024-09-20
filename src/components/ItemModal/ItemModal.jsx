import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  const handleDeleteCardClick = () => {
    console.log("Delete button clicked, card ID:", card._id);
    onDelete(card._id);
  };

  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__delete-btn ${
    isOwn ? "modal__delete-btn_visible" : "modal__delete-btn_hidden"
  }`;

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-description">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          {isOwn ? (
            <button
              type="button"
              className={itemDeleteButtonClassName}
              onClick={handleDeleteCardClick}
            >
              Delete item
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
