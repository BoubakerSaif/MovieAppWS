import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [shows, setShows] = useState([]);
  const getShows = async () => {
    const { data } = await axios.get("https://api.tvmaze.com/shows");
    setShows(data);
  };

  useEffect(() => {
    getShows();
  }, []);

  const { id } = useParams();
  let specificMovie = shows.filter((el) => el.id == id);
  console.log(specificMovie);

  return (
    <div>
      {specificMovie.map((el) => (
        <Card style={{ width: "800px", margin: "auto" }} key={el.id}>
          <Card.Img variant="top" height={"600px"} src={el.image.original} />

          {/* <iframe height={"400px"} src={el.movieTrailer}></iframe> */}
          <Card.Body>
            <Card.Title>{el.name} </Card.Title>
            <Card.Text>{el.summary}</Card.Text>
            <Link to={"/"}>
              <Button variant="warning">Back Home</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MovieDetails;
