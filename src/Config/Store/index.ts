import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./Slices/appState";

const store = configureStore({
    reducer : combineReducers({
        appState : appStateSlice.reducer
    })
})

export default store;