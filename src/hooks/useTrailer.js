import { useDispatch } from "react-redux";
import { addTrailer } from "../assets/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../assets/constans";

const useTrailer=(movieId)=>{

    const dispatch=useDispatch();

    const getMovieVideo=async()=>{
        const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_Options)
        const json=await data.json();
    
        const filterData=json.results.filter(video=>video.type==="Trailer")
        const trailer=filterData.length ? filterData[1]:json.results[0];
        dispatch(addTrailer(trailer));
        
      }
      useEffect(()=>{
        getMovieVideo();
      },[])
}
export default useTrailer;