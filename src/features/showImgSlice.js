import { createSlice } from "@reduxjs/toolkit";

export const showImgSlice = createSlice({
    name: "showImg",
    initialState: {
        value: null,
    },
    reducers: {
        showImgUpdate: (state, action) => {
            state.value = action.payload;
        },
        // resizeUpdate: (state, action) => {
        //     state.value = action.payload;
        // },
    },
});

export const { showImgUpdate } = showImgSlice.actions;
export default showImgSlice.reducer;
