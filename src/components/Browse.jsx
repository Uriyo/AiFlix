import Header from "./Header"
import useNowPlaying from "../hooks/useNowPlaying.js";

import SecondaryContainer from "./SecondaryContainer.jsx";
import Hero from "./Hero.jsx";


const Browse = () => {
  //fetch data from tmdb api and update store
 useNowPlaying();

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