import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    error : null,
    data : null
}

export const EntrySlice = createSlice({
    name : "EntrySlice",
    initialState : initialState,
    reducers : {
        GetEntries : (state, action) =>
        {

        },
        AddEntry : (state, action) =>
        {

        },
        DeleteEntry : (state, action) =>
        {

        }
    }
}) 

export const { AddEntry, GetEntries, DeleteEntry } = EntrySlice.actions;
export const DiaryReducer = EntrySlice.reducer;