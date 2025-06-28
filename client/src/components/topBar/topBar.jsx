import { useNavigate } from 'react-router'
import Imager from '../image/imager'
import UserButton from '../userButton/userButton'
import './topBar.css'

const TopBar = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`);
  }
  return (
    <div className='topBar'>
      {/* Search bar */}
      <form onSubmit={handleSubmit} className='search'>
        <Imager src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </form>
      {/* USER */}
      <UserButton/>   
    </div>
  )
}

export default TopBar