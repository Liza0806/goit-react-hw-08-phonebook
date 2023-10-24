import { createSlice } from '@reduxjs/toolkit'
import {
	loginThunk,
	refreshThunk,
	registrationThunk,
} from './thunks'
import { setToken } from 'api/auth'

const initialState = {
	token: '',
	profile: null,
}

const handleAuthFulfilled = (state, { payload }) => {
	state.token = payload.token
	setToken(payload.token)
	state.profile = payload.user
}
const handleRefreshFulfilled = (state, { payload }) => {
	setToken(state.token)
	state.profile = payload
}


const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOut: (state) => {
			state.profile = null
			state.token = ''
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registrationThunk.fulfilled, handleAuthFulfilled)
			.addCase(loginThunk.fulfilled, handleAuthFulfilled)
			.addCase(refreshThunk.fulfilled, handleRefreshFulfilled)
	},
})

export const authReducer = authSlice.reducer
export const { logOut } = authSlice.actions