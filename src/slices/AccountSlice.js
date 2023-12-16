import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    amount: 0,
    name: ''
};

export const fetchUserData = createAsyncThunk(
    'users',
    async (userId) => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        return data.name
    }
)

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount++
    },
    decrement: (state) => {
      state.amount--
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    }
  },
  extraReducers: (builder)=> {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
        state.name = action.payload
    })
  }
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;
