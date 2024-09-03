import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: "",
        email: "",
    },
    userLoggedIn: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoginStatus: (state, action) => {
            state.userLoggedIn = action.payload;
        }
    }
});

export const { setUser, setLoginStatus } = userSlice.actions;
export default userSlice.reducer;