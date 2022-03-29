import React from "react";
import { MovieContainer } from "./styles/MovieContainer";
import { motion } from "framer-motion";
import Tv from "./Tv";

const TvList = ({ tv }) => {
  return (
    <MovieContainer as={motion.div} layout>
      {tv.map((movie) => (
        <Tv movie={movie} key={movie.id} />
      ))}
    </MovieContainer>
  );
};

export default TvList;
