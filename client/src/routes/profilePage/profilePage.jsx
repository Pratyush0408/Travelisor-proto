import './profilePage.css'
import Imager from '../../components/image/imager'
import { useState } from 'react'
import Boards from '../../components/boards/boards';
import Gallery from '../../components/gallery/gallery';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import apiRequest from '../../../utils/apiRequest';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Created");

  const {username} = useParams();

  const {isPending, error, data} = useQuery({
    queryKey: ['profile', username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong...";
  if (!data) return "User not found";

  console.log(data);

  return (
    <div className='profilePage'>
      <Imager className="profileImg" src={data.img || "/general/noAvatar.png"} alt=""/>
      <h1 className='profileName'>{data.displayName}</h1>
      <span className='profileUsername'>@{data.username}</span>
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
      {activeTab==="Created"? <Gallery userId={data._id}/> : <Boards userId={data._id}/>}
    </div>
  )
}

export default ProfilePage
