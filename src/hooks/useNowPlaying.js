import { useEffect } from "react";
import { API_Options } from "../assets/constans";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../assets/movieSlice";

const useNowPlaying=()=>{
    const dispatch=useDispatch();
    const getNowPlay=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
       API_Options
      );
      const json=await data.json();
      
      dispatch(addNowPlaying(json.results));
    }
  
    useEffect(()=>{
      getNowPlay();
    },[])
}

export default useNowPlaying;