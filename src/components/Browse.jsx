import Header from "./Header"
import useNowPlaying from "../hooks/useNowPlaying.js";

import SecondaryContainer from "./SecondaryContainer.jsx";
import Hero from "./Hero.jsx";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopMovies from "../hooks/useTopMovies.js";
import useUpcoming from "../hooks/useUpcoming.js";


const Browse = () => {
  //fetch data from tmdb api and update store
 useNowPlaying();
 usePopularMovies();
 useTopMovies();
 useUpcoming();
  return (
    <div>
      <Header/>
      <Hero/>
      <SecondaryContainer/>
      {/* 
        maincontainer
          videocontainer
          title
        secondary container
          list
           cards
      */}
    </div>
  )
}

export default Browse