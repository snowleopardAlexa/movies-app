import { useState, useEffect } from 'react';
import axios from 'axios';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import Genres from "../../components/Genres/Genres";
import useGenre from "../../hooks/useGenre";

const Series = () => {

    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]); 
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenre(selectedGenres);
  
    const fetchMovies = async () => {
        const { data } = await axios.get (
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
  
        setContent(data.results)
        setNumOfPages(data.total_pages);
    };
  
    useEffect(() => {
        fetchMovies();
         // eslint-disable-next-line
    }, [genreforURL, page]);


    return (
     <div>
         <span className="page-title">TV Series</span>
         <Genres  
           type="tv"
           selectedGenres={selectedGenres}
           setSelectedGenres={setSelectedGenres}
           genres={genres}
           setGenres={setGenres}
           setPage={setPage}
         />
         <div className="trending">
         {content && content.map((content) => (
           <SingleContent 
             key={content.id} 
             id={content.id}
             poster={content.poster_path}
             title={content.title || content.name}
             date={content.first_air_date || content.release_date}
             media_type="tv"
             vote_average={content.vote_average}
          />
         ))}
       </div>
       <CustomPagination setPage={setPage} numOfPages={numOfPages} />
     </div>
    );
  };
  
  export default Series;