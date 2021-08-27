import { createSlice } from "@reduxjs/toolkit"
import { EntryAction } from "../Actions/Actions";
import { IEntryState } from "../DataTypes/entry";

const entryState:IEntryState = {
    loading : false,
    error : null,
    items : null
}

export const EntrySlice = createSlice({
    name : 'entry-slice',
    initialState : entryState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(EntryAction.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(EntryAction.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        builder.addCase(EntryAction.rejected, (state, action) => {
            state.loading = false;
            state.error = "Somtheing is wrong !!";
            state.items = null
        })
    }
})

export const EntryReducer = EntrySlice.reducer;