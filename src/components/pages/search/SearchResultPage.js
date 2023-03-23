import style from "./SearchResultPage.module.scss";
import GridLayout from "../../GridLayout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

const SearchResultPage = ({ results }) => {
  return (
    <div className={style.search}>
      <Link to="/">
        <button className={style.button__back}>
          <ChevronLeftIcon />
        </button>
      </Link>
      <div className={style.search__container}>
        {results.length === 0 ? (
          <div className={style.noresults}>No results</div>
        ) : (
          <GridLayout elements={results} />
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;
