import { useState } from "react"
import EmojiPicker from "emoji-picker-react"

const CommentForm = () => {
  const [showEmoji, setShowEmoji] = useState(false);

  const toggleEmoji = () => {
    setShowEmoji((prev) => !prev);
  };

  return (
    <div className=''>
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
  );
};

export default CommentForm;
