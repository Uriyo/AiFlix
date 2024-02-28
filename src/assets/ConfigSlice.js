import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en",
    },
    reducers:{
        changeLang:(state,action)=>{
            state.lang=action.payload;
        }
    }

})

export const {changeLang} =ConfigSlice.actions;

export default ConfigSlice.reducer;