import Header from "./Header"
import useNowPlaying from "../hooks/useNowPlaying.js";

import SecondaryContainer from "./SecondaryContainer.jsx";
import Hero from "./Hero.jsx";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopMovies from "../hooks/useTopMovies.js";
import useUpcoming from "../hooks/useUpcoming.js";
import GptSearch from "./GPTSearch.jsx";
import { useSelector } from "react-redux";


const Browse = () => {
  //fetch data from tmdb api and update store
 const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
 
  useNowPlaying();
 usePopularMovies();
 useTopMovies();
 useUpcoming();
  return (
    <div>
      <Header/>
      {
        showGptSearch ?<GptSearch/> : (
       <>
          <Hero/>
          <SecondaryContainer/>
        </>
        )
      }
      
    </div>
  )
}

export default Browse