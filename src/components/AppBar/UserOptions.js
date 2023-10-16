import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization=`Bearer ${token}`
    },
    unset (){
        axios.defaults.headers.common.Authorization=``
    }
}
export const register = createAsyncThunk('/users/signup', async credentials => {
    try {
        const {data} = await axios.post('/users/signup', credentials);
        token.set(data.token)
        return data
    }
    catch (error) {
        console.log("error in user registrations")
       // return rejectWithValue(error.response.data);
    }
})

/////////////////////////////
const initialState = {
    user: {name: null, email: null},
    id: null,
    isLogged: false,
    token: null
}
export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
builder
.addCase(register.fulfilled, (state, action) =>{
    console.log(action)

state.user = action.payload
} )
    }

})


export default authSlice.reducer;