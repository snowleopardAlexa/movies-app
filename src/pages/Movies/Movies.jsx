import { useState, useEffect } from 'react';
import './movies.css';
import axios from 'axios';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import Genres from "../../components/Genres/Genres";

const Movies = () => {

  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchMovies = async () => {
      const { data } = await axios.get (
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );

      setContent(data.results)
      setNumOfPages(data.total_pages);
  };

  useEffect(() => {
      fetchMovies();
       // eslint-disable-next-line
  }, [page]);

    return (
     <div>
         <span className="page-title">Movies</span>
         <Genres 
           type="movie"
           selectedGenres={selectedGenres}
           setSelectedGenres={setSelectedGenres}
           genres={genres}
           setGenres={setGenres}
           setPage={setPage}
         />
         <div className="movies">
         {content && content.map((content) => (
           <SingleContent 
             key={content.id} 
             id={content.id}
             poster={content.poster_path}
             title={content.title || content.name}
             date={content.first_air_date || content.release_date}
             media_type="movie"
             vote_average={content.vote_average}
          />
         ))}
       </div>
       {numOfPages > 1 && (
       <CustomPagination setPage={setPage} numOfPages={numOfPages} />
       )}
     </div>
    );
  };
  
  export default Movies;