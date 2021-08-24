import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../DataTypes/user";

export const SignupAction = createAsyncThunk<any, {user:User}>("signup-slice/signupaction", async (data) => {
    let PostRequest = {
        method: "POST",
        body: JSON.stringify({
            username : data.user.username,
            email : data.user.email,
            password : data.user.password,
            diaryIds : data.user.diaryIds
        })
    }
    return axios.post("/api/user/signup", PostRequest).then(res => {
        return res.data.user
    })
})

export const LoginAction = createAsyncThunk<any, {email:string, password : string}>("login-slice/loginaction", async (data) => {
    let PostRequest = {
        method: "POST",
        body: JSON.stringify({
            email : data.email,
            password : data.password
        })
    }
    return axios.post("/api/user/login", PostRequest).then(res => {
        return res.data})
})
