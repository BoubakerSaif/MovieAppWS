import MovieCard from "./MovieCard";

const MovieList = ({ data }) => {
  return (
    <div>
      {data.map((el) => (
        <MovieCard movie={el} key={el.id} />
      ))}
    </div>
  );
};

export default MovieList;
