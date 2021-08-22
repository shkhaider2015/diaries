import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SignupAction = createAsyncThunk<any, {email:string, password : string}>("signup-slice/signupaction", async (data) => {
    console.log("email : ", data)
    // console.log("password : ", password)
    let PostRequest = {
        method: "POST",
        body: JSON.stringify({
            email : data.email,
            password : data.password
        })
    }
    return axios.post("/api/user/signup", PostRequest).then(res => res.data)
})