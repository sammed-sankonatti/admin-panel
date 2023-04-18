import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../features/adminSlice"

const store = configureStore({
    reducer : {
        users : userReducer
    }
})

export default store