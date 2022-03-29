import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DetaiContainer } from "./styles/DetailContainer";
import { Card } from "./styles/Card";

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dfc885da3f1c1dd786963c8547cbf25d&language=en-US`
    );
    const detail = await data.json();
    setDetails(detail);
  };

  return (
    <>
      <h1 style={{ margin: "2rem 0", textAlign: "center" }}>{details.title}</h1>
      <DetaiContainer>
        <Card>
          <div>
            <h5>Language: {details.original_language}</h5>
            <h5>Release Date: {details.release_date}</h5>
            <h5>Vote: {details.vote_average}</h5>
            <p>{details.overview}</p>
          </div>
          <div>
            <img
              src={
                "https://image.tmdb.org/t/p/w500/" + details.backdrop_path ||
                null
              }
              alt={details.title}
            />
          </div>
        </Card>
      </DetaiContainer>
    </>
  );
};

export default DetailsPage;
