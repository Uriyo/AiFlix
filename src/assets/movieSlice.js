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
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})

export const {addNowPlaying,addTrailer}=movieSlice.actions;
export default movieSlice.reducer;