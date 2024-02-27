import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";


const Hero = () => {

  const movies=useSelector(store=>store.movies?.nowPlaying);
  
  if(movies===null) return;
  const mainMovie=movies[0];
  
  const {
    original_title,
    overview,
    id
  }=mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id}/>
      
      mainContainer
    </div>
  )
}

export default Hero;