import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title} </Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Rating name="read-only" value={movie.rating} readOnly max={10} />
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
