import "./Header.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleLoginClick,
  handleSignUpClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__logo-and-date">
        <Link to="/">
          <img className="header__logo" alt="logo" src={logo} />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__switch-and-user">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className={`header__button ${
            !isLoggedIn ? "header__button_hidden" : ""
          }`}
        >
          + Add clothes
        </button>
        {isLoggedIn ? (
          <Link to="/profile" className="header__link">
            <div className="header__user-container">
              <p className="header__username">{currentUser.name}</p>
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="header__avatar"
              />
            </div>
          </Link>
        ) : (
          <div className="header__buttons-container">
            <button
              className="header__signup-button"
              type="button"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
            <button
              className="header__login-button"
              type="button"
              onClick={handleLoginClick}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
