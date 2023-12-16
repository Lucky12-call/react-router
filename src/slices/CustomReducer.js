import { createAction, createReducer } from "@reduxjs/toolkit"


const initialState = { rewords: 2 }

export const increment = createAction('reword/increment')
export const decrement = createAction('reword/decrement')

const rewordReducer = createReducer(initialState, (builder) => {
    builder.addCase(increment, (state)=>{
        state.rewords++
    })
    .addCase(decrement, (state)=> {
        state.rewords--
    })
})

export default rewordReducer