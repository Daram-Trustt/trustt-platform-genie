import { Dispatch, createSlice } from "@reduxjs/toolkit";

type AppState = {
    counter:number
}

const initialState : AppState = {counter : 0}

const appStateSlice = createSlice({
    name:'APP-STATE',
    initialState,
    reducers : {
        setCounter : (state : AppState,action) => {
            state.counter = action.payload;
        }
    }
})

export default appStateSlice;

export const setCounterAsync = () => {
    return (dispatch : Dispatch) => {
        setTimeout(() => {
              dispatch(appStateSlice.actions.setCounter(10))  
        }, 2000);
    }
}
