import { Link } from "react-router"; // <-- FIXED
import "./galleryItem.css";
import Imager from "../image/imager";

const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;

  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* Link is now proper and clickable */}
      <Link to={`/pin/${item.id}`} className="overLay">
        <Imager src={item.media} alt="" w={372} h={optimizedHeight} />
      </Link>

      <button className="saveButton">Save</button>

      <div className="overlayIcons">
        <button>
          <Imager src="/general/share.svg" alt="" />
        </button>
        <button>
          <Imager src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
