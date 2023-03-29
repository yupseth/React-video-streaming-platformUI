import requests from "../../../requests";
import axios from "../../../axios";
import { useEffect, useState } from "react";
import style from "./Banner.module.scss";
import InfoBox from "../../InfoBox";
import { useNavigate } from "react-router-dom";

const Banner = ({ onSelectContent }) => {
  const navigate = useNavigate();
  const [banner, setBanner] = useState([]);
  const [isVisibleInfo, setIsVisibleInfo] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      //fetch the first element of all trending (current week)
      const request = await axios.get(requests[0].fetch);
      const res = request.data.results;

      setBanner(res[0]);
      return request;
    };
    fetchData();
  }, []);

  const toggleVisibilityInfo = () => {
    setIsVisibleInfo(!isVisibleInfo);
  };

  const handleClick = (id, title, description, mediaType) => {
    onSelectContent(id, title, description, mediaType);
    navigate("/individualMovie");
  };

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

        <div className={style.info_container}>
          {isVisibleInfo && <InfoBox text={banner.overview} />}
        </div>
        <div className={style.banner__buttons}>
          {/* ///////////////// */}
          <button
            className={style.banner__button}
            onClick={() =>
              handleClick(
                banner.id,
                banner.title ?? banner.name,
                banner.overview,
                banner.media_type
              )
            }
          >
            Play
          </button>
          {/* /////////////////// */}
          <button
            className={style.banner__button}
            onClick={toggleVisibilityInfo}
          >
            {!isVisibleInfo ? "More Info" : "Less Info"}
          </button>
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
