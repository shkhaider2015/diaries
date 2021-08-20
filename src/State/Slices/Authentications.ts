import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    login : {
        loading : false,
        error : null,
        data : null
    },
    signup : {
        loading : false,
        error : null,
        isSignup : false
    }
}

export const Authentications = createSlice({
    name : 'authentications',
    initialState : initialState,
    reducers : {
        Login : (state, action) => {
            switch (action.payload.type) {
                case "request":
                    state.login.loading = true;
                    state.login.data = null;
                    state.login.error = null;
                    return state;
                case "success":
                    state.login.loading = false;
                    state.login.data = action.payload.payload;
                    state.login.error = null
                    return state;
                case "failuer":
                    state.login.loading = false;
                    state.login.error = action.payload.payload;
                    state.login.data = null
                    return state;
            
                default:
                    return state;
            }
        },
        Signup : (state, action) => {
            switch (action.payload.type) {
                case "request":
                    state.signup.loading = true;
                    state.signup.isSignup = false;
                    state.signup.error = null;
                    return state;
                case "success":
                   
                    state.signup.loading = false;
                    state.signup.isSignup = true;
                    state.signup.error = null
                    return state;
                case "failuer":
                    state.signup.loading = false;
                    state.signup.error = action.payload.payload;
                    state.signup.isSignup = false
                    return state;
            
                default:
                    return state;
            }
        },
    },
})

export const { Login , Signup  } = Authentications.actions;
export const AuthReducer = Authentications.reducer;
