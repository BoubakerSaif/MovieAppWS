import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import data from "./data";

const App = () => {
  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState("");
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
        <input
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      {/* First Method */}

      {/* Second Method */}
      {/* <AddMovie movies={movies} setMovies={setMovies} /> */}
      <MovieList
        data={movies.filter((el) =>
          el.title.toLowerCase().includes(search.toLowerCase())
        )}
      />
    </div>
  );
};

export default App;
