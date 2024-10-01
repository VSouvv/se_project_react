import "./ItemModal.css";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useContext } from "react";
function ItemModal({
  activeModal,
  onClose,
  card,
  onDeleteItem,
  handleDeleteConfirm,
}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;

  const modalDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "modal__delete-button_visible" : "modal__delete-button_hidden"
  }`;

  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          className="modal__close modal__close_type_white"
          type="button"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__left-section">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <div className="modal__right-section">
            <div
              className={`modal ${activeModal === "preview" && "modal_opened"}`}
            >
              <div className="modal__content modal__content_type_image">
                <button
                  onClick={onClose}
                  className="modal__close modal__close_type_white"
                  type="button"
                ></button>
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="modal__image"
                />
                <div className="modal__footer">
                  <div className="modal__left-section">
                    <h2 className="modal__caption">{card.name}</h2>
                    <p className="modal__weather">Weather: {card.weather}</p>
                  </div>
                  <div className="modal__right-section">
                    {isOwn && (
                      <button
                        className={modalDeleteButtonClassName}
                        onClick={(e) => onDeleteItem(card._id)}
                        type="button"
                      >
                        Delete item
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
