import { useEffect, useState, useContext } from "react";
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";
import TvList from "../components/TvList";

import {
  Button,
  ButtonContainer,
  FilteredButton,
} from "../components/styles/Button";
import StoreContext from "../store/store";

const TVPopular = () => {
  const { fetchMovies, nextPage, prevPage, scrollUp } =
    useContext(StoreContext);

  const [TVPopular, setTVPopular] = useState([]);
  const [page, setPage] = useState(1);

  const [activeGenre, setActiveGenre] = useState(0);
  const [filtered, setFiltered] = useState([]);

  const API = `https://api.themoviedb.org/3/tv/popular?api_key=dfc885da3f1c1dd786963c8547cbf25d&language=en-US&page=${page}`;

  useEffect(() => {
    fetchMovies(API).then((movies) => {
      setTVPopular(movies.results);
      setFiltered(movies.results);
    });
  }, [page]);

  // useEffect  for filtering

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(TVPopular);
      return;
    }
    const filter = TVPopular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filter);
  }, [activeGenre]);

  // functions

  const nextPageHandler = () => {
    nextPage(setPage);
    setActiveGenre(0);
    scrollUp();
  };
  const prevPageHandler = () => {
    prevPage(page, setPage);
    setActiveGenre(0);
    scrollUp();
  };

  return (
    <div>
      <h1 style={{ margin: "2rem 0", textAlign: "center" }}>
        Popular TV-shows
      </h1>

      <ButtonContainer>
        <FilteredButton onClick={() => setActiveGenre(0)}>All</FilteredButton>
        <FilteredButton onClick={() => setActiveGenre(10759)}>
          Action
        </FilteredButton>
        <FilteredButton onClick={() => setActiveGenre(16)}>
          Animation
        </FilteredButton>
        <FilteredButton onClick={() => setActiveGenre(35)}>
          Comedy
        </FilteredButton>
      </ButtonContainer>

      <TvList tv={filtered} />

      <ButtonContainer>
        <Button onClick={prevPageHandler}>
          <span>
            <MdNavigateBefore style={{ color: "wheat" }} /> Prev
          </span>
        </Button>
        <Button onClick={nextPageHandler}>
          <span>
            Next <MdOutlineNavigateNext style={{ color: "wheat" }} />{" "}
          </span>
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default TVPopular;
