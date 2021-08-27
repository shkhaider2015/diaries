import { combineReducers } from "@reduxjs/toolkit";
import { SignupReducer, LoginReducer } from "./AuthSlice";
import { DiaryReducer } from "./DiarySlice";


export const RootReducers = combineReducers({
    SignupReducer,
    LoginReducer,
    DiaryReducer
})