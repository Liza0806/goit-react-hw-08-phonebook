import { createSlice } from '@reduxjs/toolkit'
import {
	loginThunk,
	refreshThunk,
	registrationThunk, logOut
} from '../thunks'


const initialState = {
	token: '',
	profile: null,
	isLoggedIn: false,
}

const handleAuthFulfilled = (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
	state.isLoggedIn = true
}
const handleRefreshFulfilled = (state, { payload }) => {
	state.profile = payload
	state.isLoggedIn = true
}

const handleLogOutFulfilled=(state, { payload }) => {
	state.profile = null
	state.token = ''
	state.isLoggedIn = false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,

	extraReducers: (builder) => {
		builder
			.addCase(registrationThunk.fulfilled, handleAuthFulfilled)
			.addCase(loginThunk.fulfilled, handleAuthFulfilled)
			.addCase(refreshThunk.fulfilled, handleRefreshFulfilled)
			.addCase(logOut.fulfilled, handleLogOutFulfilled )
	},
})

export const authReducer = authSlice.reducer
