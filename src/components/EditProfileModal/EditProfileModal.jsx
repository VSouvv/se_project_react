import React, { useState, useEffect, useContext } from "react";
import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const EditProfileModal = ({ onSubmit, isOpen, onClose, buttonText }) => {
  // Use context safely
  const { currentUser } = useContext(CurrentUserContext);

  // Initialize state with safe access to currentUser
  const [userName, setUserName] = useState(currentUser?.name || "");
  const [avatar, setAvatarUrl] = useState(currentUser?.avatar || "");

  useEffect(() => {
    // Update state when the modal is opened and currentUser is not null
    if (isOpen && currentUser) {
      setUserName(currentUser.name || "");
      setAvatarUrl(currentUser.avatar || "");
    }
  }, [isOpen, currentUser]);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAvatarUrl = (event) => {
    setAvatarUrl(event.target.value);
  };

  const newUserData = {
    name: userName,
    avatar: avatar,
  };

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(newUserData);
  }

  return (
    <ModalWithForm
      title="Change profile data"
      name="edit-profile"
      buttonText="submit"
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <fieldset className="modal__inputs">
        <label className="modal__label">
          Name*
          <input
            className="modal__input"
            type="text"
            name="name"
            placeholder="Name"
            value={userName}
            minLength="1"
            maxLength="30"
            onChange={handleNameChange}
          />
        </label>
        <label className="modal__label">
          Avatar URL*
          <input
            className="modal__input"
            type="url"
            name="link"
            placeholder="Avatar URL"
            value={avatar}
            minLength="1"
            maxLength="1000"
            onChange={handleAvatarUrl}
          />
        </label>
      </fieldset>
      <button type="submit" className="modal__submit">
        submit
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
