import './comments.css'
import Imager from '../image/imager'
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'

const Comments = () => {
  const [showEmoji, setShowEmoji] = useState(false)

  const toggleEmoji = () => {
    setShowEmoji(prev => !prev)
  }

  return (
    <div className='comments'>
      <div className="commentList">
        <span className="commentCount">
          5 comments
          {/* Comment */}
          <div className="comment">
            <Imager src="/general/noAvatar.png" alt=""/>
            <div className="commentContent">
              <span className='commentUsername'>John Doe</span>
              <p className='commentText'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
              <span className='commentTime'> 1hr</span>
            </div>
          </div>
        </span>
      </div>

      <form className='commentForm'>
        <input type="text" placeholder='Add a Comment' />
        <div className="emoji" onClick={toggleEmoji}>
          <div>😀</div>
          {showEmoji && (
            <div className='emojiPicker'>
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Comments
