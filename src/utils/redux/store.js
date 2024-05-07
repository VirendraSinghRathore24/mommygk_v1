import { configureStore } from "@reduxjs/toolkit";
import instaReducer from "./instaSlice";

const store = configureStore({
    reducer:{
        insta : instaReducer,
    }
})

export default store;