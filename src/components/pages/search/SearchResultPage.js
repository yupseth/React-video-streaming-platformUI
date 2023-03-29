import style from "./SearchResultPage.module.scss";
import GridLayout from "../../GridLayout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

const SearchResultPage = ({ results, onSelectContent }) => {
  return (
    <div className={style.search}>
      <button className={style.button__back}>
        <Link style={{ display: "flex", color: "#999" }} to="/">
          <ChevronLeftIcon />
        </Link>
      </button>
      <div className={style.search__container}>
        {results.length === 0 ? (
          <div className={style.noresults}>No results</div>
        ) : (
          <GridLayout elements={results} onSelectContent={onSelectContent} />
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;
