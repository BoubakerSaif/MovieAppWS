import { Card, Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.image.original} />
      <Card.Body>
        <Card.Title>{movie.name} </Card.Title>
        <Card.Text>{movie.summary}</Card.Text>
        <Rating
          name="read-only"
          value={movie.rating.average}
          readOnly
          max={10}
        />
        <Link to={`/movie/${movie.id}`}>
          <Button variant="primary">More Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
