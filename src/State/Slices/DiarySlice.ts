import { createSlice } from "@reduxjs/toolkit"
import { DiaryAction } from "../Actions/Actions";
import { IDiaryState } from "../DataTypes/diary";

const diaryState:IDiaryState = {
    loading : false,
    error : null,
    items : null
}

export const DiarySlice = createSlice({
    name : 'diary-slice',
    initialState : diaryState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(DiaryAction.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(DiaryAction.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        builder.addCase(DiaryAction.rejected, (state, action) => {
            state.loading = false;
            state.error = "Somtheing is wrong !!";
            state.items = null;
        })
    }
})

export const DiaryReducer = DiarySlice.reducer;