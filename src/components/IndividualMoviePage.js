import { useEffect, useRef, useState } from "react";
import style from "./IndividualMoviePage.module.scss";
import YouTube, { YouTubeProps } from "react-youtube";

const IndividualMoviePage = ({ selectedContent }) => {
  const videoContainer = useRef(null);
  const [videoContainerWidth, setVideoContainerWidth] = useState(0);
  const updateWidth = () => {
    if (videoContainer.current) {
      const width = videoContainer.current.getBoundingClientRect().width;
      setVideoContainerWidth(width);
    }
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    console.log("width:", videoContainerWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [videoContainerWidth]);

  const _onReady = (event) => {
    console.log(event.target);
    event.target.unMute();
  };

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

  console.log(selectedContent);

  return (
    <div className={style.individual_page} ref={videoContainer}>
      <div className={style.individual_page__content}>
        <div className={style.trailer_area}>
          {videoContainerWidth !== 0 ? (
            <YouTube
              videoId={"DuWEEKeJLMI"}
              className={style.video}
              containerClassName={style.trailer_area}
              opts={options}
              onReady={_onReady}
            />
          ) : (
            <h3>LOADING</h3>
          )}
        </div>

        <div className={style.movieInfo}>
          <h3>this is some content about the movie</h3>
        </div>
      </div>
    </div>
  );
};

export default IndividualMoviePage;
