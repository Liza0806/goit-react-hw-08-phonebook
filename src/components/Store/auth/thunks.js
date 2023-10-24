import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, signUp, getContacts, addCont, deleteCont, refresh } from '../../../api/auth'

export const registrationThunk = createAsyncThunk(
	'/users/signup',
	async (body, { rejectWithValue }) => {
		try {
			const data = await signUp(body)
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const loginThunk = createAsyncThunk(
	'/users/login',
	async (body, { rejectWithValue }) => {
		try {
			const data = await signIn(body)
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const refreshThunk= createAsyncThunk(
	'/users/current',
	async (_, { rejectWithValue }) => {
		try {
			const data = await refresh()
		//	console.log(data, 'data in refresh')
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)


export const getAllContacts = createAsyncThunk(
	'/contacts',
	async (body, { rejectWithValue }) => {
		try {
			const data = await getContacts(body)
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)


export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (body, { rejectWithValue }) => {
		try {
			const data = await addCont(body)
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

  
export const deleteContact = createAsyncThunk(
	'/contacts/{contactId}',
	async (body, { rejectWithValue }) => {
		try {
			const data = await deleteCont(body)
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}

)