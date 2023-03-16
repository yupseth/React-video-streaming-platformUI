import { useEffect, useState } from "react";
import style from "./Row.module.scss";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchURL]);

  return (
    <div className={style.row}>
      <h2> {title}</h2>

      <div className={style.row__posters}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`${style.row__poster} ${
              isLargeRow && style.row__posterLarge
            }`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
