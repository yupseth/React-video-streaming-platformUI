import React from "react";
import style from "./Thumbnail.module.scss";

const Thumbnail = ({ id, onClick, className, src, alt }) => {
  const classes = className
    .split(" ")
    .map((cls) => style[cls])
    .join(" ");

  return <img onClick={onClick} className={classes} src={src} alt={alt} />;
};

export default Thumbnail;
