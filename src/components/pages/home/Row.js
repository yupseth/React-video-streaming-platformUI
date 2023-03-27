import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Row.module.scss";
import axios from "../../../axios";
// import InfoBox from "../../InfoBox";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  // const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchURL]);

  // const displayDescription = () => {
  //   setShowInfo(!showInfo);
  // };

  return (
    <div className={style.row}>
      <h2> {title}</h2>

      <div className={style.row__posters}>
        {movies.map((movie) => (
          <img
            onClick={() => navigate("/individualMovie")}
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
