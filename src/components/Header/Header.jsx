import React from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import headerLogo from "../../assets/logo.svg";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useContext } from "react";

const Header = ({
  weatherData,
  handleRegisterModal,
  handleLoginModal,
  onAddButtonClick,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__user-container-left">
        <Link to="/">
          <img className="header__logo" alt="WTWR Logo" src={headerLogo} />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__user-container-right">
        <ToggleSwitch />
        {currentUser ? (
          <div className="header__profile_loggedIn">
            <button
              className="header__add-clothing-button"
              onClick={onAddButtonClick}
            >
              + Add clothes
            </button>
            <Link to="/profile" className="profile__link">
              <div className="header__profile-container">
                <p className="header__profile-name">{currentUser.name}</p>
                {currentUser.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt={`${currentUser.name}'s avatar`}
                    className="header__profile-avatar"
                  />
                ) : (
                  <div className="header__profile-avatar_placeholder">
                    <p className="header__profile-avatar_placeholder-initial">
                      {currentUser.name}
                    </p>
                  </div>
                )}
              </div>
            </Link>
          </div>
        ) : (
          <div className="header__profile_loggedOut">
            <button
              className="header__sign-up-button"
              onClick={handleRegisterModal}
            >
              Sign Up
            </button>
            <button
              className="header__log-in-button"
              onClick={handleLoginModal}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
