import { Card } from "./styles/Card";

const Movie = ({ movie }) => {
  return (
    <Card bg={movie.backdrop_path}>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt={movie.title || movie.name}
      />
      <h5>{movie.title || movie.name}</h5>
    </Card>
  );
};

export default Movie;
