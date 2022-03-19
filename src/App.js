import "./App.css";
//components
import Layout from "./ui/Layout";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import TVPopular from "./pages/TVPopular";
import TVOnTheAir from "./pages/TVOnTheAir";
import TVTopRated from "./pages/TVTopRated";
//router
import { Route, Routes } from "react-router-dom";
//styled components
import { ThemeProvider } from "styled-components";
import { theme } from "./ui/theme";
import GlobalStyles from "./ui/Global";

function App() {
  //helper functions
  const fetchMovies = async (url) => {
    const data = await fetch(url);
    const movies = await data.json();
    return movies;
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const nextPage = (func) => {
    func((prevState) => prevState + 1);
    scrollToTop();
  };

  const prevPage = (func, state) => {
    if (state === 1) {
      func(1);
    } else {
      func((prevState) => prevState - 1);
      scrollToTop();
    }
  };

  //first loaded content
  let content = (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1 style={{ fontWeight: "bold" }}>Welcome to Movie Data Base</h1>
      <h4>Please choose your category from above</h4>
    </div>
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={content} />

          <Route
            path="/popular"
            element={
              <Popular
                fetchMovies={fetchMovies}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            }
          />
          <Route
            path="/top-rated"
            element={
              <TopRated
                fetchMovies={fetchMovies}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <UpComing
                fetchMovies={fetchMovies}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            }
          />
          <Route
            path="/tv-toprated"
            element={
              <TVTopRated
                fetchMovies={fetchMovies}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            }
          />
          <Route
            path="/tv-popular"
            element={
              <TVPopular
                fetchMovies={fetchMovies}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            }
          />
          <Route
            path="/tv-on-air"
            element={
              <TVOnTheAir
                fetchMovies={fetchMovies}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            }
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
