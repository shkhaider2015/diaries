import { combineReducers } from "@reduxjs/toolkit";
import { SignupReducer, LoginReducer } from "./AuthSlice";
import { DiaryReducer } from "./DiarySlice";
import { EntryReducer } from "./EntrySlice";


export const RootReducers = combineReducers({
    SignupReducer,
    LoginReducer,
    DiaryReducer,
    EntryReducer
})