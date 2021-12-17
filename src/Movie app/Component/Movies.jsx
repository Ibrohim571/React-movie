import Movie from "./Movie";

export default function movies(props) {
  let {imdID, movies = []} = props;
  return (
    <div className="movies">
      {movies.length ? movies.map(movie => (
        <Movie key={movie.imdID} {...movie} />
      )): 
        <h3>Not found</h3>
      }
      {movies.map(movie => (
        <Movie key={movie.imdID} {...movie} />
      ))}
    </div>
  )
}