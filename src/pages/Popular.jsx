import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { Spinner } from "react-bootstrap";
import { Button, ButtonContainer } from "../components/styles/Button";

const Popular = ({ fetchMovies, nextPage, prevPage }) => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const API = `https://api.themoviedb.org/3/movie/popular?api_key=dfc885da3f1c1dd786963c8547cbf25d&language=en-US&page=${page}`;

  useEffect(() => {
    fetchMovies(API).then((movies) => {
      setPopular(movies.results);
      setLoading(false);
    });
  }, [page]);

  if (loading) {
    <Spinner animation="grow" />;
  }

  return (
    <div>
      <h1 style={{ margin: "2rem 0", textAlign: "center" }}>Popular Movies</h1>
      <MovieList movies={popular} />
      <ButtonContainer>
        <Button onClick={() => prevPage(setPage, page)}>
          <span>Prev</span>
        </Button>
        <Button onClick={() => nextPage(setPage)}>
          <span>Next</span>
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default Popular;
