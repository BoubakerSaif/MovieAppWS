import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import data from "./data";

const App = () => {
  return (
    <div>
      <AddMovie />
      <MovieList data={data} />
    </div>
  );
};

export default App;
