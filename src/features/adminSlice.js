import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    users : []
}



export const admin = createSlice({
    name : 'admin',
    initialState,
    reducers: {

    }
})


export default admin.reducer