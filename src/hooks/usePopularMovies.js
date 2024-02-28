import { useEffect } from "react";
import { API_Options } from "../assets/constans";
import { useDispatch } from "react-redux";
import { addPopular } from "../assets/movieSlice";

const usePopularMovies=()=>{
    const dispatch=useDispatch();

    const getPopularmovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
       API_Options
      );
      const json=await data.json();
      
      dispatch(addPopular(json.results));
    }
  
    useEffect(()=>{
      getPopularmovies();
    },[])
}

export default usePopularMovies;