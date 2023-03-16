import Row from "./Row";
import requests from "../requests";

//generator function for Row IDs
const Rows = () => {
  function* idGenerator() {
    let id = 0;
    while (true) {
      ++id;
      yield id;
    }
  }

  const gen = idGenerator();

  return (
    <div>
      {requests.map((req) => (
        <Row
          key={gen.next().value}
          title={req.name}
          fetchURL={req.fetch}
          isLargeRow={req.isLarge}
        />
      ))}
    </div>
  );
};

export default Rows;
