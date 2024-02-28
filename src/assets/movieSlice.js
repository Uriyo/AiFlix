import { createSlice } from "@reduxjs/toolkit"

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.nowPlaying=action.payload;
        },
        addPopular:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTop:(state,action)=>{
            state.TopMovies=action.payload;
        },
        addUpcoming:(state,action)=>{
            state.upcommingMovies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})

export const {addNowPlaying,addTrailer,addPopular,addTop,addUpcoming}=movieSlice.actions;
export default movieSlice.reducer;