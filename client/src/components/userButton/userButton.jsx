import { useState } from 'react'
import './userButton.css'
import Imager from '../image/imager';

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
    <a href='/' className='loginLink'>
      Login / SignUp
    </a>
  );
};

export default UserButton;
