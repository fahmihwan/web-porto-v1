import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        value: false,
    },
    reducers: {
        modalUpdate: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { modalUpdate } = modalSlice.actions;
export default modalSlice.reducer;
