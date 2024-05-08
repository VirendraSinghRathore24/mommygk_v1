import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name : "login",
    initialState : {
        status : "Not Logged In"
    },
    reducers : {
        addLogin : (state, action) => {
            state.status = action.payload;
        }
    }
})


export const {addLogin} = loginSlice.actions;
export default loginSlice.reducer;