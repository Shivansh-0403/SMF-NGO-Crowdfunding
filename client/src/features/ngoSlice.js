import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ngo: {
        name: "",
        owner: "",
        email: "",
        website: "",
        address: "",
        city: "",
        contact: "",
    },
    // userLoggedIn: false
};

const ngoSlice = createSlice({
    name: 'ngo',
    initialState,
    reducers: {
        setNgo: (state, action) => {
            state.ngo = action.payload;
        }
    }
});

export const { setNgo } = ngoSlice.actions;
export default ngoSlice.reducer;