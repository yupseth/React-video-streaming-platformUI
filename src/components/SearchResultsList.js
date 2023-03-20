import style from "./SearchResultsList.module.scss";

const SearchResultsList = ({ results }) => {
  return (
    <div className={style.results_list}>
      {results.map((result, id) => {
        return <div key={id}>{result.name}</div>;
      })}
    </div>
  );
};

export default SearchResultsList;
