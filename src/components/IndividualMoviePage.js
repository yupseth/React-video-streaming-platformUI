import { useEffect, useRef, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import style from "./IndividualMoviePage.module.scss";
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const IndividualMoviePage = ({ selectedContent }) => {
  const videoContainer = useRef(null);
  const [videoContainerWidth, setVideoContainerWidth] = useState(0);
  const [foundTrailer, setFoundTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState(
    JSON.parse(localStorage.getItem("lastContent"))?.key
  );

  const navigate = useNavigate();

  selectedContent.id =
    selectedContent.id ?? JSON.parse(localStorage.getItem("lastContent"))?.id;

  selectedContent.title =
    selectedContent.title ??
    JSON.parse(localStorage.getItem("lastContent"))?.title;

  selectedContent.description =
    selectedContent.description ??
    JSON.parse(localStorage.getItem("lastContent"))?.description;

  selectedContent.mediaType =
    selectedContent.mediaType ??
    JSON.parse(localStorage.getItem("lastContent"))?.mediaType;

  const updateWidth = () => {
    if (videoContainer.current) {
      const width = videoContainer.current.getBoundingClientRect().width;
      setVideoContainerWidth(width);
    }
  };
  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [videoContainerWidth]);

  const _onReady = (event) => {
    event.target.unMute();
  };

  useEffect(() => {
    const trailerReq = requests
      .find((req) => req.name === "Trailer")
      .fetch.replace("{movie_id}", selectedContent.id)
      .replace("{media_type}", selectedContent.mediaType);

    const fetchData = async () => {
      //fetch the first element of all trending (current week)
      const request = await axios.get(trailerReq);
      const res = request.data.results.find((res) => res.type === "Trailer");
      setFoundTrailer(!!res);
      setTrailerKey(() => res?.key);
      const saveLastContent = (key) => {
        localStorage.setItem(
          "lastContent",
          JSON.stringify({
            key,
            id: selectedContent.id,
            title: selectedContent.title,
            description: selectedContent.description,
            mediaType: selectedContent.mediaType,
          })
        );
      };
      saveLastContent(res?.key);

      return request;
    };
    fetchData();
  }, [selectedContent.id, selectedContent.mediaType]);

  const widthRatio = 9 / 16;
  const options = {
    width: videoContainerWidth,
    height: videoContainerWidth * widthRatio,
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      showinfo: 1,
      modestbranding: 1,
    },
  };

  return (
    <div className={style.individual_page} ref={videoContainer}>
      <div className={style.individual_page__content}>
        <button className={style.button__back} onClick={() => navigate(-1)}>
          <ChevronLeftIcon />
        </button>
        <div className={style.trailer_area}>
          {videoContainerWidth !== 0 && trailerKey && foundTrailer ? (
            <YouTube
              videoId={trailerKey}
              className={style.video}
              containerClassName={style.trailer_area}
              opts={options}
              onReady={_onReady}
            />
          ) : (
            <h3 className={style.errorMessage}>
              Unfortunately, the content you've chosen doesn't have a trailer :(
            </h3>
          )}
        </div>

        <div className={style.movieInfo}>
          <h1>{selectedContent.title}</h1>
          <h3>{selectedContent.description}</h3>
        </div>
      </div>
    </div>
  );
};

export default IndividualMoviePage;
