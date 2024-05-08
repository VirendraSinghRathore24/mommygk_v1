import { configureStore } from "@reduxjs/toolkit";
import instaReducer from "./instaSlice";
import loginReducer from "./loginSlice"

const store = configureStore({
    reducer:{
        insta : instaReducer,
        login : loginReducer
    }
})

export default store;