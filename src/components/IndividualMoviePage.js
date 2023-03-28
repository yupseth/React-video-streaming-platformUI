import style from "./IndividualMoviePage.module.scss";
import YouTube from "react-youtube";

const IndividualMoviePage = () => {
  const options = {
    width: "300",
  };
  return (
    <div className={style.individual_page}>
      <div className={style.individual_page__content}>
        <header className={style.banner}>
          <h1>this is the banner</h1>
        </header>

        <div className={style.movieInfo}>
          <h3>this is some content about the movie</h3>
        </div>

        <div className={style.trailer_area}>
          <h3>here is the trailer</h3>

          <YouTube
            videoId={"DuWEEKeJLMI"}
            className={style.video}
            opts={options}
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualMoviePage;
