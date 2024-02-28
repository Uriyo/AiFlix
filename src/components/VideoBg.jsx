import { useSelector } from "react-redux";

import useTrailer from "../hooks/useTrailer";

const VideoBg = ({movieId}) => {
  
  const trailerVid=useSelector(store=>store.movies?.trailerVideo);
  
  useTrailer(movieId);
  
    return (
    <div className="w-screen">
        { trailerVid &&(
        <iframe 
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailerVid.key}?&autoplay=1&mute=1&loop=1&playlist=${trailerVid.key}`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
        </iframe>
        )}
        
    </div>
  )
}

export default VideoBg