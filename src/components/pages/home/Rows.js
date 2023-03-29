import Row from "./Row";
import requests from "../../../requests";
import style from "./Rows.module.scss";

// generator function for Row IDs
const Rows = ({ onSelectContent }) => {
  function* idGenerator() {
    let id = 0;
    while (true) {
      ++id;
      yield id;
    }
  }

  const gen = idGenerator();

  return (
    <div className={style.rows}>
      {requests.map(
        (req) =>
          req.place === "home" && (
            <Row
              onSelectContent={onSelectContent}
              key={gen.next().value}
              title={req.name}
              fetchURL={req.fetch}
              isLargeRow={req.isLarge}
            />
          )
      )}
    </div>
  );
};

export default Rows;
