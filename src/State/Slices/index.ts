import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./Authentications";
import { SignupReducer, LoginReducer } from "./AuthSlice";


export const RootReducers = combineReducers({
    SignupReducer,
    LoginReducer
})