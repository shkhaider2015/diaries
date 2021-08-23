import { combineReducers } from "@reduxjs/toolkit";
import { SignupReducer, LoginReducer } from "./AuthSlice";


export const RootReducers = combineReducers({
    SignupReducer,
    LoginReducer
})