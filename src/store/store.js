import { createContext } from "react";

const StoreContext = createContext({
  page: () => {},
  fetchMovies: (url) => {},
  nextPage: () => {},
  prevPage: () => {},
  scrollUp: () => {},
});

export function StoreContextProvider({ children }) {
  const fetchMoviesHandler = async (url) => {
    const data = await fetch(url);
    const movies = await data.json();
    return movies;
  };

  function nextPageHandler(func) {
    func((prevState) => {
      return prevState + 1;
    });
  }

  function prevPageHandler(state, func) {
    if (state === 1) {
      func(1);
    } else {
      func((prevState) => {
        return prevState - 1;
      });
    }
  }

  function scrollUpHandler() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const context = {
    fetchMovies: fetchMoviesHandler,
    nextPage: nextPageHandler,
    prevPage: prevPageHandler,
    scrollUp: scrollUpHandler,
  };

  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  );
}

export default StoreContext;
