import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        authorised :false
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload.user;
            state.authorised = action.payload.authorised;
        },
        logoutUser: (state) => {
            state.authorised  = false
        }
    },
});

export const { loginUser, logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
