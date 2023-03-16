import requests from "../requests";
import axios from "../axios";
import { useEffect, useState } from "react";
import style from "./Banner.module.scss";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      //fetch the first element of all trending (current week)
      const request = await axios.get(requests[0].fetch);
      const res = request.data.results;

      //   console.log(res[0]);
      setBanner(res[0]);
      return request;
    };
    fetchData();
  }, []);

  return (
    <header
      className={style.banner}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={style.banner__contents}>
        <h1 className={style.banner__title}>
          {banner?.title || banner?.name || banner?.original_name}
        </h1>
        <div className={style.banner__buttons}>
          <button className={style.banner__button}>Play</button>
          <button className={style.banner__button}>More Info</button>
        </div>

        {/* <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1> */}
      </div>
      <div className={style.bannerFadeBottom}></div>
    </header>
  );
};

export default Banner;
