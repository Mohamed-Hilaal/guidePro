import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = { appName : "guidePro", AppVersion : "1.0.0", AppDescription : "A guide to the world of programming."}

const appSlice = createSlice({
    name: 'app', 
    initialState, 
    reducers:{
        replace: (state, action) => {
            state.appName = action.payload.appName
        }
    }
})

const {reducer, actions} = appSlice

export const {replace} = actions

export const reduxStore = configureStore({
    reducer
})