import { createSlice } from "@reduxjs/toolkit";

const instaSlice = createSlice({
    name : "insta",
    initialState : {
        instaVideos : []
    },
    reducers: {
        addInstaVideo : (state, action) => {
            state.instaVideos = action.payload;
        },
        removeInstaVideo : (state) => {
            state.instaVideos = []
        }
    }
})


export const {addInstaVideo, removeInstaVideo} = instaSlice.actions;

export default instaSlice.reducer;