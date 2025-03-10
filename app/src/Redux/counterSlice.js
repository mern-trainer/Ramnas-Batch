import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += action.payload
        },
        decrement: (state, action) => {
            state.value -= action.payload
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions
export const { reducer: counterReducer } = counterSlice