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

function App() {
  const [results, setResults] = useState([]);
  const [currentContent, setCurrentContent] = useState({});
  const onSelectContent = (id, title, description, mediaType) => {
    setCurrentContent((prevState) => {
      return {
        ...prevState,
        id,
        title,
        description,
        mediaType,
      };
    });
  };
  return (
    <Router>
      <div className="app">
        <Nav results={results} setResults={setResults} />
        <Routes>
          <Route
            path="/"
            element={<Home onSelectContent={onSelectContent} />}
          />
          <Route
            path="/movies"
            element={<Movies onSelectContent={onSelectContent} />}
          />
          <Route
            path="/series"
            element={<Series onSelectContent={onSelectContent} />}
          />
          <Route
            path="/search"
            element={
              <SearchResultPage
                results={results}
                setResults={setResults}
                onSelectContent={onSelectContent}
              />
            }
          />
          <Route
            path="/individualMovie"
            element={<IndividualMoviePage selectedContent={currentContent} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
