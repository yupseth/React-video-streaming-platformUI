import Banner from "./Banner";
// import Footer from "./Footer";
import Rows from "./Rows";
// import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Nav /> */}
      {/* //de aici incepe routing */}
      <Banner />
      <Rows />
      {/* //aici se termina */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
