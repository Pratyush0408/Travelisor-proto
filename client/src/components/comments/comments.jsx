import './comments.css'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import apiRequest from '../../../utils/apiRequest'
import Comment from './comment'
import CommentForm from './commentForm'


const Comments = ({id}) => {
  const [open , setOpen] = useState(false);

  const toggleEmoji = () => {
    setShowEmoji(prev => !prev)
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong...";

  console.log(data);

  return (
    <div className='comments'>
      <div className="commentList">
  <span className="commentCount">
    {data.length === 0 ? "No Comments" : data.length + " Comments"}
  </span>
  {/* Comment */}
  {data.map((comment) => (
    <Comment key={comment._id} comment={comment} />
  ))}
</div>


    <CommentForm id={id} />
    </div>
  )
}

export default Comments
