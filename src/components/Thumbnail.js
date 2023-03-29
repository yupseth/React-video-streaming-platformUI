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

  return (
    <div
      onClick={onClick}
      className={classes}
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
};

export default Thumbnail;
