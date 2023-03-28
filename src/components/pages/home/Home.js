import Banner from "./Banner";
import Rows from "./Rows";

const Home = ({ onSelectContent }) => {
  return (
    <>
      <Banner />
      <Rows onSelectContent={onSelectContent} />
    </>
  );
};

export default Home;
