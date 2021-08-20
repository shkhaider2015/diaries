import { combineReducers, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading : false,
    error : null,
    isSignup : false
}

export const SignupSlice = createSlice({
    name : 'SignupReducer',
    initialState : initialState,
    reducers : {
        Request : (state) => {
            console.log("Called Signup")
            state.loading = false
            return state
        },
        Success : (state, action) => {
            console.log("Called Logins")
            state.loading = true
        },
        Failure : (state, action) => {
            state.loading = false
            return state
        }
    },
})

export const { Success, Request, Failure  } = SignupSlice.actions;
export const SignupReducer = SignupSlice.reducer;
