import React from "react";
import Movie from "./Movie";
import { MovieContainer } from "./styles/MovieContainer";
import { motion } from "framer-motion";

const MovieList = ({ movies }) => {
  return (
    <MovieContainer as={motion.div} layout>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </MovieContainer>
  );
};

export default MovieList;
