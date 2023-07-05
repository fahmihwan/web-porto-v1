import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/themeSlice";
import modalSlice from "../features/modalSlice";
import showImgSlice from "../features/showImgSlice";
export default configureStore({
    reducer: {
        theme: themeSlice,
        modal: modalSlice,
        showImg: showImgSlice,
    },
});
