// create a slice

import { createSlice } from "@reduxjs/toolkit"

const sampleSlice = createSlice({
    name: "sample",
    initialState: {
        name: "John"
    },
    reducers: {
        changeName: (state, action) => { // changeName is action creator -> action type
            console.log(state.name, action.payload);
            state.name = action.payload.value
        }
    }
})

export const { changeName } = sampleSlice.actions
export const { reducer: sampleReducer } = sampleSlice
