import './profilePage.css'
import Imager from '../../components/image/imager'
import { useState } from 'react'
import Collections from '../../components/collections/collections';
import Gallery from '../../components/gallery/gallery';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Created");

  return (
    <div className='profilePage'>
      <Imager className="profileImg" src="/general/noAvatar.png" alt=""/>
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUsername'>@Testcase1</span>
      <div className="followCounts">10 followers . 20 following</div>

      <div className='profileInteractions'>
        <Imager src="/general/share.svg" alt=""/>
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Imager src="/general/more.svg" alt=""/>
      </div>

      <div className="profileOptions">
        <span
          className={activeTab === "Created" ? "active" : ""}
          onClick={() => setActiveTab("Created")}
        >
          Created
        </span>
        <span
          className={activeTab === "Saved" ? "active" : ""}
          onClick={() => setActiveTab("Saved")}
        >
          Saved
        </span>
      </div>
      {activeTab==="Created"? <Gallery/> : <Collections/>}
    </div>
  )
}

export default ProfilePage
