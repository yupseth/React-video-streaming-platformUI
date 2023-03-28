import { useState, useEffect } from "react";
import style from "./Series.module.scss";
import requests from "../../../requests";
import axios from "../../../axios";
import GridLayout from "../../GridLayout";

const Series = ({ onSelectContent }) => {
  const [popSeries, setPopSeries] = useState([]);

  const fetchSeries = async () => {
    const filter = requests.find((req) => req.place === "series");
    const fetchURL = filter.fetch;
    const request = await axios.get(fetchURL);
    setPopSeries(request.data.results);
    return request;
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  return (
    <div className={style.series_screen}>
      <div className={style.series__container}>
        <GridLayout elements={popSeries} onSelectContent={onSelectContent} />
      </div>
    </div>
  );
};

export default Series;
