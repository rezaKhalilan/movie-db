import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { Button, ButtonContainer } from "../components/styles/Button";

const UpComing = ({ fetchMovies, nextPage, prevPage }) => {
  const [upcoming, setUpcoming] = useState([]);
  const [page, setPage] = useState(1);
  const API = `https://api.themoviedb.org/3/movie/upcoming?api_key=dfc885da3f1c1dd786963c8547cbf25d&language=en-US&page=${page}`;

  useEffect(() => {
    fetchMovies(API).then((movies) => {
      setUpcoming(movies.results);
    });
  }, [page]);

  return (
    <div>
      <h1 style={{ margin: "2rem 0", textAlign: "center" }}>Upcoming Movies</h1>
      <MovieList movies={upcoming} />
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

export default UpComing;
