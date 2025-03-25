import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Rating from "@mui/material/Rating";

const AddMovie = ({ movies, setMovies, addingMovie }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const onChangeHandler = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const confirmHandler = (e) => {
    e.preventDefault();
    // First Method
    addingMovie(newMovie);

    //Second Method
    // setMovies([...movies, newMovie]);
    handleClose();
  };
  // console.log(newMovie);
  // 2eme méthode
  //   const [title, setTitle] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [posterURL, setPosterURL] = useState("");
  //   const [rating, setRating] = useState("");

  //   const newMovie = {
  //     title: title,
  //     description: description,
  //     posterURL: posterURL,
  //     rating:rating
  //   };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                // onChange={(e)=>{setTitle(e.target.value) }}
                type="text"
                name="title"
                placeholder="Enter movie name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                // onChange={(e)=>{setDescription(e.target.value) }}
                type="text"
                name="description"
                placeholder="Enter movie description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control
                onChange={onChangeHandler}
                // onChange={(e)=>{setPosterURL(e.target.value) }}
                name="posterURL"
                type="text"
                placeholder="Enter movie image url"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ display: "block" }}>Movie Rating</Form.Label>
              <Rating
                name="rating"
                max={10}
                // onChange={(e)=>{setRating(e.target.value) }}
                onChange={onChangeHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={confirmHandler}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
