import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
  
  

    return (
    <div className="px-4">
      <h1 className="text-3xl pb-2 text-white">{title}</h1>
    <div className="flex overflow-x-auto ">
        
        <div className="flex">
        
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))
        ) : (
          <p>No movies available</p>
        )}
        </div>
        
    </div>
    </div>
  )
}

export default MovieList