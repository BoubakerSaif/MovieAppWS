import { useEffect, useState } from "react";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import data from "./data";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
const App = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const getShows = async () => {
    const { data } = await axios.get("https://api.tvmaze.com/shows");
    setShows(data);
    setLoading(false);
  };

  useEffect(() => {
    getShows();
  }, []);
  const [movies, setMovies] = useState(data);
  // const [search, setSearch] = useState("");
  //First Method
  const addingMovie = (x) => {
    setMovies([...movies, x]);
  };

  // Second Method
  // Send the state and the setState Methode(SetMovies) as props
  return (
    <div>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "350px" }}
      >
        <AddMovie addingMovie={addingMovie} />
        {/* <input
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        /> */}
      </div>

      {/* First Method */}

      {/* Second Method */}
      {/* <AddMovie movies={movies} setMovies={setMovies} /> */}
      {loading ? (
        <>
          <h2>Loading ........</h2>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading......</span>
          </Spinner>
        </>
      ) : (
        <MovieList data={shows} />
      )}
    </div>
  );
};

export default App;
