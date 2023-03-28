import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Thumbnail.module.scss";

const Thumbnail = ({ onClick, className, src, alt }) => {
  const navigate = useNavigate();
  onClick = onClick ?? navigate.bind(this, "/individualMovie");
  const classes = className
    .split(" ")
    .map((cls) => style[cls])
    .join(" ");

  return <img onClick={onClick} className={classes} src={src} alt={alt} />;
};

export default Thumbnail;
