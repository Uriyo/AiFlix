import { useEffect } from "react";
import { API_Options } from "../assets/constans";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../assets/movieSlice";

const useUpcoming=()=>{
    const dispatch=useDispatch();

    const getUpcomingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
       API_Options
      );
      const json=await data.json();
      
      dispatch(addUpcoming(json.results));
    }
  
    useEffect(()=>{
        getUpcomingMovies();
    },[])
}

export default useUpcoming;