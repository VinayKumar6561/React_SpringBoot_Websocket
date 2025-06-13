import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice'
import counterReducer from './counterSlice'
export const store=configureStore({
    reducer:{
        toggle_visible:toggleReducer,// key for toggle slice
        counter:counterReducer      // key for counter slice
    }
});
