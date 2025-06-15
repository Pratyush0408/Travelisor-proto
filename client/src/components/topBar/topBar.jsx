import Imager from '../image/imager'
import UserButton from '../userButton/userButton'
import './topBar.css'

const TopBar = () => {
  return (
    <div className='topBar'>
      {/* Search bar */}
      <div className='search'>
        <Imager src="/general/search.svg" alt="" />
        <input type="text" placeholder='Search' />
      </div>
      {/* USER */}
      <UserButton/>   
    </div>
  )
}

export default TopBar