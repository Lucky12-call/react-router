import { createSlice } from '@reduxjs/toolkit'

const initialState = { points: 0 }

const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {
            state.points++
        }
    }
})

export const { increment } = bonusSlice.actions
export default bonusSlice.reducer