import { createSlice } from "@reduxjs/toolkit";
import { TGetDiary, TAddDiary, TUpdateDiary, TDeleteDiary } from "../DataTypes/diary";

const initialState = {
    loading : false,
    error : null,
    data : null
}

export const DiarySlice = createSlice({
    name : "DiarySlice",
    initialState : initialState,
    reducers : {
        GetDiaries : (state, action) =>
        {
            switch (action.payload.type) {
                case TGetDiary.REQUEST:
                    
                    return state
                case TGetDiary.SUCCESS:
                
                    return state
                case TGetDiary.FAILURE:
                    
                    return state
            
                default:
                    return state
            }
        },
        AddDiary : (state, action) =>
        {
            switch (action.payload.type) {
                case TAddDiary.REQUEST:
                    
                    return state
                case TAddDiary.SUCCESS:
                
                    return state
                case TAddDiary.FAILURE:
                    
                    return state
            
                default:
                    return state
            }
        },
        UpdateDiary : (state, action) =>
        {
            switch (action.payload.type) {
                case TUpdateDiary.REQUEST:
                    
                    return state
                case TUpdateDiary.SUCCESS:
                
                    return state
                case TUpdateDiary.FAILURE:
                    
                    return state
            
                default:
                    return state
            }
        },
        DeleteDiary : (state, action) =>
        {
            switch (action.payload.type) {
                case TDeleteDiary.REQUEST:
                    
                    return state
                case TDeleteDiary.SUCCESS:
                
                    return state
                case TDeleteDiary.FAILURE:
                    
                    return state
            
                default:
                    return state
            }
        }
    }
}) 

export const { AddDiary, GetDiaries, DeleteDiary, UpdateDiary } = DiarySlice.actions;
export const DiaryReducer = DiarySlice.reducer;