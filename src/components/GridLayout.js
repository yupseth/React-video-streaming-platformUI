import Thumbnail from "./Thumbnail";
import style from "./GridLayout.module.scss";

const base_url = "https://image.tmdb.org/t/p/original/";

const GridLayout = ({ elements }) => {
  return (
    <div className={style.grid_container}>
      {elements.map(
        (movie) =>
          movie.poster_path && (
            <Thumbnail
              key={movie.id}
              className="row__poster--variant"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          )
      )}
    </div>
  );
};

/**
 * <img
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

export default GridLayout;

// : movie.backdrop_path
