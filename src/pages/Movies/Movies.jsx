import { useState, useEffect } from 'react';
import axios from 'axios';
import './movies.css';

const Movies = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchMovies = async () => {
      const { data } = await axios.get (
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );

      setContent(data.result)
      setNumOfPages(data.total_pages);
  };

  useEffect(() => {
      fetchMovies();
       // eslint-disable-next-line
  }, []);

    return (
     <div>
         <span className="page-title">Movies</span>
     </div>
    );
  };
  
  export default Movies;