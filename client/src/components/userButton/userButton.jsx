import { useState } from "react";
import "./userButton.css";
import Imager from "../image/imager";
import { Link } from "react-router";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  // TEMP
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <Imager src="/general/noAvatar.png" alt="User Avatar" />
      <Imager
        onClick={() => setOpen((prev) => !prev)}
        src="/general/arrow.svg"
        alt="Toggle Menu"
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Settings</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className="loginLink">
      Login / Sign Up
    </Link>
  );
};

export default UserButton;
