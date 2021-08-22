import { createSlice } from "@reduxjs/toolkit"
import { stat } from "fs";
import { SignupAction } from "../Actions/Actions";

const initialState = {
    loading : false,
    error : null,
    item : null
}

export const SignupSlice = createSlice({
    name : 'signup-slice',
    initialState : initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(SignupAction.pending, (state, action) => {
            state.loading = true;
            state.error = null;
            state.item = null 
        })
        builder.addCase(SignupAction.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.item = null;
        })
        builder.addCase(SignupAction.rejected, (state, action) => {
            state.loading = false;
            state.error = null;
            state.item = null;
        })
    }
})

// export const { Login , Signup  } = Authentications.actions;
export const SignupReducer = SignupSlice.reducer;
