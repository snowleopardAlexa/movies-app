import './genres.css';

const Genres = ({ selectedGenres, setSelectedGenres, setGenres, type, setPage}) => {

  const fetchGenres =  async () => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
  }

  useEffect(() => {
      fetchGenres();

      return () => {
          setGenres({});
       }
  }, []);

  return (
    <div>Genres</div>
  );
};

export default Genres;
