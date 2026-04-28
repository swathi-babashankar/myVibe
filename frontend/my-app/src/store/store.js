import { configureStore } from "@reduxjs/toolkit";
import { userAuthSlice } from "../features/user/userAuthSlice";


export const store = configureStore({
    reducer:{
        userLogin: userAuthSlice
    }

})