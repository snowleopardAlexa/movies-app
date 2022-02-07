import { useState, useEffect } from "react";
import "./genres.css";
import axios from "axios";
import { Chip } from "@material-ui/core";

const Genres = ({
  genres,
  selectedGenres,
  setSelectedGenres,
  setGenres,
  type,
  setPage,
}) => {

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((genre) => genre.id !== genre.id));
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="genre">
      {selectedGenres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            clickable
            size="small"
            color="primary"
            key={genre.id}
          />
        ))}
        {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            clickable
            size="small"
            key={genre.id}
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
