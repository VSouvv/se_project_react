import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ handleEditProfileClick, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt="Default avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <button
        onClick={handleEditProfileClick}
        type="button"
        className="sidebar__edit-profile"
      >
        Change profile data
      </button>
      <button onClick={handleSignOut} type="button" className="sidebar__logout">
        Log out
      </button>
    </div>
  );
}

export default SideBar;
