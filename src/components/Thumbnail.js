import React from "react";
import style from "./Thumbnail.module.scss";

const Thumbnail = ({ onClick, className, src, alt }) => {
  const classes = className
    .split(" ")
    .map((cls) => style[cls])
    .join(" ");

  return <img onClick={onClick} className={classes} src={src} alt={alt} />;
};

/**
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
*/
export default Thumbnail;
