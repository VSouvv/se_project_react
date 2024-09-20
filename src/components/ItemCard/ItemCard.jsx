import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function ItemCard({ item, onCardClick, onItemLike }) {
  const { currentUser, isAuthenticated } = useContext(CurrentUserContext);
  const isLiked = item.likes.some((userId) => {
    return currentUser?._id === userId;
  });
  return (
    <li className="card">
      <div className="card__title-container">
        <h2 className="card__name">{item.name} </h2>
        {isAuthenticated && (
          <button
            className={`card__like-button ${
              isLiked ? "card__like-button_active" : ""
            }`}
            onClick={() => onItemLike({ itemId: item._id, isLiked: isLiked })}
          ></button>
        )}
      </div>
      <img
        onClick={() => {
          onCardClick(item);
        }}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
