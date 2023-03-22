import { useState, useEffect } from "react";
import style from "./Movies.module.scss";
import axios from "../../../axios";
import requests from "../../../requests";
import GridLayout from "../../GridLayout";

const Movies = () => {
  const [popMovies, setPopMovies] = useState([]);

  const fetchMovies = async () => {
    const filter = requests.find((req) => req.place === "movies");
    const fetchURL = filter.fetch;
    const request = await axios.get(fetchURL);
    setPopMovies(request.data.results);
    return request;
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  //   useEffect(() => {
  //     fetchURLfn();
  //     async function fetchData() {
  //       const request = await axios.get(fetchURL);
  //       setPopMovies(request.data.results);
  //       return request;
  //     }
  //     fetchData();
  //   }, [fetchURL]);

  return (
    <div className={style.movies_screen}>
      <div className={style.movies_container}>
        <GridLayout elements={popMovies} />
      </div>
    </div>
  );
};

export default Movies;
