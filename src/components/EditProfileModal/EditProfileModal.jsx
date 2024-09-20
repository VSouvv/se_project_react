import { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export const EditProfileModal = ({ onClose, isOpen, handleEditUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [data, setData] = useState({
    name: currentUser.name || "",
    avatar: currentUser.avatar || "",
  });

  useEffect(() => {
    if (isOpen) {
      setData({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    handleEditUser(data);
    onClose();
  };

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <label htmlFor="name" className="modal__label">
        Name*{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          required
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar*{" "}
        <input
          type="link"
          className="modal__input"
          id="avatar"
          required
          placeholder="Avatar URL"
          name="avatar"
          value={data.avatar}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="modal__edit-submit">
        Save changes
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
