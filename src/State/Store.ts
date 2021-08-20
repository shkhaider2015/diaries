import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import thunk from "redux-thunk";
import { RootReducers } from "./Slices/index";


export const Store = configureStore({
    reducer : RootReducers,
    middleware : new MiddlewareArray().concat(thunk)
})

export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()