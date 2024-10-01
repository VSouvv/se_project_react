import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({
  activeModal,
  onLogIn,
  closeActiveModal,
  handleRegisterModal,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogIn({ email, password });
  };

  return (
    <ModalWithForm
      titleText="Log in"
      buttonText="Log in"
      activeModal={activeModal}
      onClose={closeActiveModal}
      isOpen={activeModal === "login"}
      name={"login"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="loginmodal-email" className="modal__input_type_email">
        Email{" "}
        <input
          type="text"
          className="modal__input"
          id="loginmodal-email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label
        htmlFor="loginmodal-password"
        className="modal__input_type_password"
      >
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="loginmodal-password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <div className="modal__buttons-wrapper">
        <button type="submit" className="modal__submit">
          Log In
        </button>
        <button
          type="button"
          className="modal__or-signup-btn"
          onClick={handleRegisterModal}
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
};
export default LoginModal;
