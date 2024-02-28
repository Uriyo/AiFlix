import { useEffect } from "react";
import { API_Options } from "../assets/constans";
import { useDispatch } from "react-redux";
import { addTop } from "../assets/movieSlice";

const useTopMovies=()=>{
    const dispatch=useDispatch();

    const getTopMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
       API_Options
      );
      const json=await data.json();
      
      dispatch(addTop(json.results));
    }
  
    useEffect(()=>{
        getTopMovies();
    },[])
}

export default useTopMovies;