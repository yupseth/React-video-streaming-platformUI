import style from "./SearchResultPage.module.scss";
import GridLayout from "../../GridLayout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";

const SearchResultPage = ({ results, onSelectContent }) => {
  const navigate = useNavigate();
  return (
    <div className={style.search}>
      <button className={style.button__back} onClick={() => navigate(-1)}>
        <ChevronLeftIcon />
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
