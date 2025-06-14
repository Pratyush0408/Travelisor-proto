import './leftBar.css'

const LeftBar = () => {
  return (
    <div className='leftBar'>
        <div className="menuIcons">
            <a href="/" className='menuIcon'>
            <img src="/general/logo.png" alt="logo image" className="logo"/>
            </a>
            <a href="/" className='menuIcon'>
            <img src="/general/home.svg" alt="home icon" />
            </a>
            <a href="/" className='menuIcon'>
            <img src="/general/create.svg" alt="create icon" />
            </a>
            <a href="/" className='menuIcon'>
            <img src="/general/updates.svg" alt="update icon" />
            </a>
            <a href="/" className='menuIcon'>
            <img src="/general/messages.svg" alt="messages icon" />
            </a>
        </div>
        <a href="/" className='menuIcon'>
            <img src="/general/settings.svg" alt="settings image"  className="logo" />
            </a>
    </div>
  )
}

export default LeftBar