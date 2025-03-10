// redux principal

// 1. Action -> object or event that triggers state change
// 2. Reducer -> funciton that create response to action
// 3. Store -> holds state -> centralized state management

import { configureStore } from "@reduxjs/toolkit"
import { sampleReducer } from "./sampleSlice"

export const store = configureStore({
    reducer: {
        sample: sampleReducer
    }
})