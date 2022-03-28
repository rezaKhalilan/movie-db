import { Card } from "./styles/Card";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <Card as={motion.div} layout bg={movie.backdrop_path}>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt={movie.title || movie.name}
      />
      <h5>{movie.title || movie.name}</h5>
    </Card>
  );
};

export default Movie;
