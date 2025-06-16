import Imager from '../image/imager'
import './postInteractions.css'

const PostInteractions = () => {
  return (
    <div className='postInteractions'>
      <div className="iconGroup">
        <Imager src="/general/react.svg" alt=""/>
        273
        <Imager src="/general/share.svg" alt=""/>
        <Imager src="/general/more.svg" alt=""/>
      </div>
      <button className="saveBtn">Save</button>
    </div>
  )
}

export default PostInteractions
