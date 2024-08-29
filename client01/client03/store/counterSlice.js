import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    socketIdStatus: false,
    socketId:0,
}
export const counterSlice = createSlice({
    name: 'socket1',
    initialState,
    reducers: {

        socketIdClick: (state, action)=> {
            state.socketId=action.payload
        },
        
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { socketIdClick } = counterSlice.actions

export default counterSlice.reducer