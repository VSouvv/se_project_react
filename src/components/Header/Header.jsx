import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import Avatar from "../Avatar/Avatar";

function Header({
  handleAddClick,
  weatherData,
  handleLoginModal,
  handleRegisterModal,
  isLoggedIn,
}) {
  const { name, avatar, _id } = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__wrapper-left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="page logo" />{" "}
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__wrapper-right">
        <ToggleSwitch />

        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-button"
            >
              + Add clothes
            </button>

            <Link to="/profile">
              <div className="header__user-container">
                <p className="header__username">{name}</p>

                <Avatar sizeClass="avatar-small" />
              </div>
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={handleRegisterModal}
              type="button"
              className="header_signup-button"
            >
              Sign up
            </button>
            <button
              onClick={handleLoginModal}
              type="button"
              className="header_login-button"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}
export default Header;
