import { createSlice } from "@reduxjs/toolkit"
import { SignupAction, LoginAction } from "../Actions/Actions";
import { ILoginState, ISignupState } from "../DataTypes/user";

const signupState:ISignupState = {
    loading : false,
    error : null,
    isSignup : false
}
const loginState:ILoginState = {
    loading : false,
    error : null,
    items : null
}

export const SignupSlice = createSlice({
    name : 'signup-slice',
    initialState : signupState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(SignupAction.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(SignupAction.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.isSignup = true;
        })
        builder.addCase(SignupAction.rejected, (state, action) => {
            state.loading = false;
            state.error = null;
            state.isSignup = false;
        })
    }
})
export const LoginSlice = createSlice({
    name : 'login-slice',
    initialState : loginState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(LoginAction.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(LoginAction.fulfilled, (state, action) => {
            console.log("Payload Login : ", action.payload)
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        builder.addCase(LoginAction.rejected, (state, action) => {
            state.loading = false;
            state.error = "Somtheing is wrong !!";
            state.items = null;
        })
    }
})
// export const { Login , Signup  } = Authentications.actions;
export const SignupReducer = SignupSlice.reducer;
export const LoginReducer = LoginSlice.reducer;