import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from '../slices/AccountSlice'
import BonusReducer from '../slices/BonusSlice'
import rewordReducer from "../slices/CustomReducer";

const store = configureStore({
    reducer: {
        account: AccountReducer,
        bonus: BonusReducer,
        reword: rewordReducer
    }
})

export default store