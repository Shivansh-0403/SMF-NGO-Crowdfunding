// src/redux/scrollSlice.js
import { createSlice } from '@reduxjs/toolkit';

const scrollSlice = createSlice({
    name: 'scroll',
    initialState: {
        targetSection: null
    },
    reducers: {
        setScrollTarget: (state, action) => {
            state.targetSection = action.payload;
        },
        clearScrollTarget: (state) => {
            state.targetSection = null;
        }
    }
});

export const { setScrollTarget, clearScrollTarget } = scrollSlice.actions;
export default scrollSlice.reducer;
