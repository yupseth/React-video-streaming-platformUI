import style from "./GridLayout.module.scss";

const base_url = "https://image.tmdb.org/t/p/original/";

const GridLayout = ({ elements }) => {
  return (
    <div className={style.grid_container}>
      {elements.map(
        (movie) =>
          movie.poster_path && (
            <img
              key={movie.id}
              className={style.row__poster}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          )
      )}
    </div>
  );
};

export default GridLayout;

// : movie.backdrop_path