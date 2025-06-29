import { useState } from "react";
import "./userButton.css";
import Imager from "../image/imager";
import { Link, useNavigate } from "react-router";
import apiRequest from "../../../utils/apiRequest";
import useAuthStore from "../../../utils/authStore";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  // Importing the current user from the auth store
  // This allows us to check if a user is logged in or not

  const {currentUser, removeCurrentUser} = useAuthStore();

  console.log("Current User:", currentUser);

   const navigate = useNavigate();

  const handleLogout = async ()=>{

    try{
      await apiRequest.post("/users/auth/logout",{});
      removeCurrentUser();
      navigate("/auth");
    }catch(err){
      console.log(err);
    }
  }

  return currentUser ? (
    <div className="userButton">


      <Imager src={currentUser.img || "/general/noAvatar.png"} alt="User Avatar" />
      <div onClick={() => setOpen((prev) => !prev)}>
      <Imager
        src="/general/arrow.svg"
        alt="Toggle Menu"
        className="arrow"
        />
        </div>
      {open && (
        <div className="userOptions">
          <Link to={`/profile/${currentUser.username}`} className="userOption">Profile</Link>
          <Link to="/settings" className="userOption">Settings</Link>
          <div className="userOption" onClick={handleLogout}>Logout</div>
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
