import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Thumbnail from "../../Thumbnail";
import style from "./Row.module.scss";
import axios from "../../../axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow, onSelectContent }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const rowRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(
        request.data.results.filter((el) => el.backdrop_path || el.poster_path)
      );
      return request;
    }

    fetchData();
  }, [fetchURL]);

  const handleClick = (id, title, description, mediaType) => {
    onSelectContent(id, title, description, mediaType);
    navigate("/individualMovie");
  };

  const standardOffset = 290 * 2;
  const scrollRow = (direction) => {
    let increment = 80;

    const recursiveScroll = (remainingScroll) => {
      if (remainingScroll <= 0) return;
      setTimeout(() => {
        const currentScroll = rowRef.current.scrollLeft;
        increment = increment / 1.1;
        increment <= 10 && (increment = 10);
        increment >= remainingScroll && (increment = remainingScroll);
        rowRef.current.scroll(currentScroll + increment * direction, 0);
        recursiveScroll(remainingScroll - increment);
      }, 10);
    };
    recursiveScroll(standardOffset);
  };

  return (
    <div className={style.row}>
      <h2> {title}</h2>
      <div className={style.row__wrapper}>
        <div className={style.scroll__button} onClick={() => scrollRow(-1)}>
          <ArrowBackIosIcon />
        </div>
        <div className={style.row__posters} ref={rowRef}>
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
                isLargeRow
                  ? movie.poster_path || movie.backdrop_path
                  : movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className={style.scroll__button} onClick={() => scrollRow(1)}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Row;
