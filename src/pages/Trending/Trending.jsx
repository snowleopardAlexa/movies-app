import { useState, useEffect } from 'react';
import './trending.css';
import axios from "axios";
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination';

const Trending = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );

      setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
     // eslint-disable-next-line
  }, [page]);

  return (
   <div>
       <span className="page-title">Trending</span>
       <div className="trending">
         {content && content.map((content) => (
           <SingleContent 
             key={content.id} 
             id={content.id}
             poster={content.poster_path}
             title={content.title || content.name}
             date={content.first_air_date || content.release_date}
             media_type={content.media_type}
             vote_average={content.vote_average}
          />
         ))}
       </div>
       <CustomPagination setPage={setPage} />
   </div>
  );
};

export default Trending;
