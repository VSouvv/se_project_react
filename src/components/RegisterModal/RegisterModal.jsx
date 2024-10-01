import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({
  activeModal,
  closeActiveModal,
  onSignUp,
  handleLoginModal = { handleLoginModal },
}) {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [avatarUrl, setAvatarUrl] = useState("");
  const handleAvatarUrlChange = (e) => {
    setAvatarUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSignUp({ email, password, name, avatarUrl });
  };

  return (
    <ModalWithForm
      titleText="Sign Up"
      buttonText="Sign Up"
      activeModal={activeModal}
      onClose={closeActiveModal}
      isOpen={activeModal === "signup"}
      name={"signup"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="registermodal-email" className="modal__input_type_name">
        Email*{" "}
        <input
          type="text"
          className="modal__input"
          id="registermodal-email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label
        htmlFor="registermodal-password"
        className="modal__input_type_password"
      >
        Password*{" "}
        <input
          type="password"
          className="modal__input"
          id="registermodal-password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label htmlFor="registermodal-name" className="modal__input_type_name">
        Name*{" "}
        <input
          type="text"
          className="modal__input"
          id="registermodal-name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label
        htmlFor="registermodal-avatarurl"
        className="modal__input_type_avatarurl"
      >
        Avatar URL{" "}
        <input
          type="url"
          className="modal__input"
          id="registermodal-avatarurl"
          placeholder="Avatar URL"
          value={avatarUrl}
          onChange={handleAvatarUrlChange}
        />
      </label>
      <div className="modal__buttons-wrapper">
        <button type="submit" className="modal__submit">
          Sign Up
        </button>

        <button
          type="button"
          className="modal__or-login-btn"
          onClick={handleLoginModal}
        >
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
}
export default RegisterModal;
