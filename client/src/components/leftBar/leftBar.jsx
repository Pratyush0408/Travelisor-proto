import { Link } from 'react-router'
import Imager from '../image/imager'
import './leftBar.css'

const LeftBar = () => {
  return (
    <div className='leftBar'>
        <div className="menuIcons">
            <Link to="/" className='menuIcon'>
            <Imager src="/general/logo.png" alt="logo image" className="logo"/>
            </Link>
            <Link to="/" className='menuIcon'>
            <Imager src="/general/home.svg" alt="home icon" />
            </Link>
            <Link to="/create" className='menuIcon'>
            <Imager src="/general/create.svg" alt="create icon" />
            </Link>
            <Link to="/" className='menuIcon'>
            <Imager src="/general/updates.svg" alt="update icon" />
            </Link>
            <Link to="/" className='menuIcon'>
            <Imager src="/general/messages.svg" alt="messages icon" />
            </Link>
        </div>
        <a href="/" className='menuIcon'>
            <Imager src="/general/settings.svg" alt="settings image"  className="logo" />
            </a>
    </div>
  )
}

export default LeftBar