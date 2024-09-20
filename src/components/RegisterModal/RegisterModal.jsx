import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import LoginModal from "../LoginModal/LoginModal";

const RegisterModal = ({ onSignUp, isOpen, onClose, handleLoginModal }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatarUrl] = useState("");

  useEffect(() => {
    if (isOpen === true) {
      setUserEmail("");
      setUserPassword("");
      setUserName("");
      setAvatarUrl("");
    }
  }, [isOpen]);

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAvatarUrlChange = (event) => {
    setAvatarUrl(event.target.value);
  };

  const newUser = {
    email: userEmail,
    password: userPassword,
    name: userName,
    avatar: avatar,
  };

  function handleSubmit(event) {
    event.preventDefault();
    onSignUp(newUser);
  }

  return (
    <ModalWithForm
      title="Sign Up"
      name="register-user"
      buttonText="Submit"
      onClose={onClose}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      <fieldset className="modal__inputs">
        <label className="modal__label">
          Email*
          <input
            className="modal__input"
            type="email"
            name="email"
            placeholder="Email"
            value={userEmail}
            minLength="1"
            maxLength="50"
            onChange={handleEmailChange}
          />
        </label>
        <label className="modal__label">
          Password*
          <input
            className="modal__input"
            type="password"
            name="password"
            placeholder="Password"
            value={userPassword}
            minLength="1"
            maxLength="1000"
            onChange={handlePasswordChange}
          />
        </label>
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
            onChange={handleAvatarUrlChange}
          />
        </label>
      </fieldset>
      <div className="modal__button-container">
        <button type="submit" className="modal__submit" onSubmit={handleSubmit}>
          {" "}
          submit
        </button>
        <button
          type="button"
          className="modal__login"
          onClick={handleLoginModal}
        >
          {" "}
          or Login
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
