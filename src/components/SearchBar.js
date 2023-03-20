import style from "./SearchBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=7f9da03c80170cd7df2dbdfa5c492e89&language=en-US&page=1&include_adult=false&query=${value}`
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results.filter((el) => el.media_type !== "person");
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className={style.input_wrapper}>
      <SearchIcon className={style.search_icon} />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
