import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Thumbnail from "../../Thumbnail";
import style from "./Row.module.scss";
import axios from "../../../axios";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow, onSelectContent }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchURL]);

  const handleClick = (id, title, description, mediaType) => {
    onSelectContent(id, title, description, mediaType);
    navigate("/individualMovie");
  };

  return (
    <div className={style.row}>
      <h2> {title}</h2>

      <div className={style.row__posters}>
        {movies.map((movie) => (
          <Thumbnail
            onClick={() =>
              handleClick(
                movie.id,
                movie.title ?? movie.name,
                movie.overview,
                movie.title ? "movie" : "tv"
              )
            }
            id={movie.id}
            key={movie.id}
            className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
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
