import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
            window.localStorage.setItem("user", state.user);
        },
        logoutUser: (state) => {
            state.authorised  = false
        }
    },
});

export const { loginUser, logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
