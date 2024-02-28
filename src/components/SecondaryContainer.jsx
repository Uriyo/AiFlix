import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);

  console.log(movies.nowPlaying);
  return (
    movies.nowPlaying &&(
    <div className=" bg-black">
      <div className="-mt-56 relative z-20 pl-12">
      <MovieList title={"Now Playing"} movies={movies.nowPlaying}/>
      <MovieList title={"Top Rated"} movies={movies.TopMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcommingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer