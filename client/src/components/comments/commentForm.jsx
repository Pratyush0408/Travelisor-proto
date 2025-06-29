import { useState } from "react"
import EmojiPicker from "emoji-picker-react"
import apiRequest from "../../../utils/apiRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";


const addComment = async(comment)=>{
  const res = await apiRequest.post("/comments", comment);
  return res.data;
}

const CommentForm = ({id}) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [desc, setDesc] = useState("");

  const handleEmojiClick = (emoji)=>{
    setDesc((prev) => prev + emoji.emoji);
    setShowEmoji(false);
  }

  const queryClient = useQueryClient();

   const mutation = useMutation({
    mutationFn: addComment, 
    onSuccess :()=>{
      queryClient.invalidateQueries({queryKey: ['comments', id]});
      setDesc("");
      setShowEmoji(false);
    }
  })

  const toggleEmoji = () => {
    setShowEmoji((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    mutation.mutate({
      description: desc,
      pin: id
    });
    
  }

  return (
    <div className=''>
      <form className='commentForm' onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a Comment' value={desc} onChange={(e) => setDesc(e.target.value)} />
        <div className="emoji" onClick={toggleEmoji}>
          <div>😀</div>
          {showEmoji && (
            <div className='emojiPicker'>
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
