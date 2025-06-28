import { Link } from 'react-router'; 
import Imager from '../image/imager';
import './boards.css';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../../utils/apiRequest';
import { format } from "timeago.js";

const Boards = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['boards', userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong...";

  return (
    <div className='collections'>
      {data?.map((board) => (
        <Link to={`/search?boardId=${board._id}`} className="collection" key={board._id}>
          <Imager src={board.firstPin?.media || "/general/noImage.png"} alt="" />
          <div className="collectionInfo">
            <h1>{board.title}</h1>
            <span>{board.pinCount} Pins . {format(board.createdAt)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boards;
