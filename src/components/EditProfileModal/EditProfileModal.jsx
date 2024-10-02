import React, { useState, useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";
import CurrentUserContext from "../../context/CurrentUserContext";

const EditProfileModal = ({ activeModal, closeActiveModal, onEditProfile }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const [avatarUrl, setAvatarUrl] = useState("");
  const handleAvatarUrlChange = (e) => {
    setAvatarUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    onEditProfile({ name, avatarUrl });
  };

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAvatarUrl(currentUser.avatar);
    }
  }, [currentUser]);

  return (
    <ModalWithForm
      titleText="Change profile data"
      buttonText="Save changes"
      activeModal={activeModal}
      onClose={closeActiveModal}
      isOpen={activeModal === "editprofile"}
      name={"editprofile"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="editprofilemodal-name" className="modal__input_type_name">
        Name *{" "}
        <input
          type="text"
          className="modal__input"
          id="editprofilemodal-name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label
        htmlFor="editprofilemodal-avatarUrl"
        className="modal__input_type_avatarurl"
      >
        Avatar *{" "}
        <input
          type="url"
          className="modal__input"
          id="editprofilemodal-avatarurl"
          placeholder="Avatar URL"
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
        />
      </label>
      <button type="submit" className="modal__submit">
        Save changes
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
