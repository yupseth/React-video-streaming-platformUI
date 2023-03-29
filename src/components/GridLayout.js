import Thumbnail from "./Thumbnail";
import style from "./GridLayout.module.scss";
import { useNavigate } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

const GridLayout = ({ elements, onSelectContent }) => {
  const navigate = useNavigate();
  const handleClick = (id, title, description, mediaType) => {
    onSelectContent(id, title, description, mediaType);
    navigate("/individualMovie");
  };

  return (
    <div className={style.grid_container}>
      {elements.map(
        (movie) =>
          movie.poster_path && (
            <Thumbnail
              onClick={() =>
                handleClick(
                  movie.id,
                  movie.title ?? movie.name,
                  movie.overview,
                  movie.title ? "movie" : "tv"
                )
              }
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

export default GridLayout;
