import "./App.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Movies from "./components/pages/movies/Movies";
import Series from "./components/pages/series/Series";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SearchResultPage from "./components/pages/search/SearchResultPage";
import IndividualMoviePage from "../src/components/IndividualMoviePage";

//////attempt

/////////////

function App() {
  const [results, setResults] = useState([]);
  return (
    <Router>
      <div className="app">
        <Nav results={results} setResults={setResults} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route
            path="/search"
            element={
              <SearchResultPage results={results} setResults={setResults} />
            }
          />
          <Route path="/individualMovie" element={<IndividualMoviePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
