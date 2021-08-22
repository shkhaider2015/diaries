import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./Authentications";
import { SignupReducer } from "./AuthSlice";


export const RootReducers = combineReducers({
    SignupReducer
})