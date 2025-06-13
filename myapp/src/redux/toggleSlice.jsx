import {createSlice} from '@reduxjs/toolkit'

const toggleSlice = createSlice({

    name:"toggle_visible",
    initialState:{
        visible:true
    },
    reducers:{
        toggleVisible:(state)=>{
            state.visible=!state.visible;
        }
    }
});

export const {toggleVisible}=toggleSlice.actions;
export default toggleSlice.reducer;