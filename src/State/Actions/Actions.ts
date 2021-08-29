import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Diary } from "../DataTypes/diary";
import { Entry } from "../DataTypes/entry";
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

export const DiaryAction = createAsyncThunk<any, {userid : string| undefined}>("diary-slice/diaryaction", async (data) => {
    
    if(!data.userid)
    {
        return
    }

    return axios.get(`/api/user/${data.userid}/diaries`).then(res => {
        return res.data.diaries})
})

export const EntryAction = createAsyncThunk<any, {diaryId : string}>("entry-slice/entryaction", async (data) => {
    
    return axios.get(`/api/user/${data.diaryId}/entries`).then(res => {
        return res.data.entries})
})

export const AddDiaryAction = createAsyncThunk<any, {diary : Diary}>("diary-slice/diaryaction", async (data) => {
    
    let postReq = {
        method : "POST",
        body : JSON.stringify(data.diary)
    }

    return axios.post("/api/user/diary/create", postReq).then(res => {
        return res.data.diaries})
})

export const AddEntryAction = createAsyncThunk<any, {entry : Entry}>("entry-slice/entryaction", async (data) => {
    
    let postReq = {
        method : "POST",
        body : JSON.stringify(data.entry)
    }

    return axios.post("/api/user/entry/create", postReq).then(res => {
        return res.data.entries})
})

export const UpdateEntryAction = createAsyncThunk<any, {req : any}>("entry-slice/entryaction", async (data) => {
    let postReq = {
        method : "POST",
        body : JSON.stringify(data.req)
    }
    
    return axios.post("/api/user/entry/update", postReq).then(res => {
        return res.data.entries
    })

})

export const DeleteEntryAction = createAsyncThunk<any, {req : { entryId:string|undefined, diaryId:string }}>("entry-slice/entryaction", async (data) => {
    let postReq = {
        method : "POST",
        body : JSON.stringify(data.req)
    }
    
    return axios.post("/api/user/entry/delete", postReq).then(res => {
        return res.data.entries
    })

})