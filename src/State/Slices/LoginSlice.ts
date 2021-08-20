import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading : false,
    error : null,
    data : []
}

export const LoginSlice = createSlice({
    name : 'LoginReducer',
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

export const { Success, Request, Failure  } = LoginSlice.actions;
export const LoginReducer = LoginSlice.reducer;
