import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Rows from "./components/Rows";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Rows />
      <Footer />
    </div>
  );
}

export default App;
