import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ngo: {
        _id: "",
        name: "",
        owner: "",
        email: "",
        website: "",
        address: "",
        city: "",
        contact: "",
    },
};

const ngoSlice = createSlice({
    name: 'ngo',
    initialState,
    reducers: {
        setNgoDetails: (state, action) => {
            state.ngo = action.payload;
        }
    }
});

export const { setNgoDetails } = ngoSlice.actions;
export default ngoSlice.reducer;