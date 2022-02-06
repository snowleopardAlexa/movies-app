import './singlecontent.css';
import { img_300, unavailable } from "../../config/config";

const SingleContent = ({ id, poster, title, date, media_type, vote_average}) => {
  return (
     <div>
       <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
     </div>
  );
};

export default SingleContent;
