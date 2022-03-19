import React from "react";
import Movie from "./Movie";
import { MovieContainer } from "./styles/MovieContainer";

const MovieList = ({ movies }) => {
  return (
    <MovieContainer>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </MovieContainer>
  );
};

export default MovieList;
