import './singlecontent.css';
import { img_300, unavailable } from "../../config/config";

const SingleContent = ({ id, poster, title, date, media_type, vote_average}) => {
  return (
     <div>
       <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
       <b className="title">{title}</b>
       <span className="subtitle">
           {media_type === "tv" ? "TV Series" : "Movie"}
           <span className="subtitle">{date}</span>

       </span>
     </div>
  );
};

export default SingleContent;
