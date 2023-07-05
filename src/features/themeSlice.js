import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "darkmode",
    initialState: {
        value: "dark",
    },
    reducers: {
        themeUpdate: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { themeUpdate } = themeSlice.actions;
export default themeSlice.reducer;
