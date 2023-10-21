import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


const initialState = {  
    profile: null,
    token: null
}

const handleAuthFulfilled = (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
}
// const handleUpdateProfileFulfilled = (state, { payload }) => {
// 	state.profile = payload
// }


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
			.addCase(refreshThunk.fulfilled, handleAuthFulfilled)
		//	.addCase(updateProfileThunk.fulfilled, handleUpdateProfileFulfilled)
	},
})


const instance = axios.create({
	baseURL: 'https://connections-api.herokuapp.com',
})


export const setToken = (token) => {
    console.log('setRtoc')
	instance.defaults.headers.common.Authorization = `Bearer ${token}`
    console.log(instance.defaults.headers.common.Authorization); 
}
export const deleteToken = () => {
	delete instance.defaults.headers.common['Authorization']
}

export const signUp = async (body) => {
	const { data } = await instance.post('/users/signup', body)
	setToken(data.token)
	return data
}
export const signIn = async (body) => {
	const { data } = await instance.post('/users/login', body)
	setToken(data.token)
	return data
}

export const updateProfile = async ({ id, body }) => {
	const { data } = await instance.put(`users/${id}`, body)
	return data
}

export const refresh = async () => {
   const to = localStorage.getItem('persist:auth')
	const token = JSON.parse(to)
    const cleanedToken = token.token.replace(/"/g, '');
    console.log(cleanedToken, 'token in refresh')
	setToken(cleanedToken)
	const { data } = await instance('/users/current')
    console.log(data, 'data v refresh')
    console.log('refresh')
	return data
}

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
export const refreshThunk = createAsyncThunk(
	'auth/refresh',
	async (_, { rejectWithValue }) => {
		try {
			const data = await refresh()
			return data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const getAllContacts = createAsyncThunk(
    '/contacts',
 
   async () => {
     try {
     
       const response = await instance.get('/contacts');
        console.log('2getAllContacts')
   //  console.log(response)
   //  console.log(response.data)
       return response.data;
     }  catch (error) {
       throw new Error('Failed to fetch contacts: ' + error.message);
     }
   }
 );

 
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact) => {
      try {
        const response = await instance.post('/contacts', {
          name: newContact.name,
          number: newContact.number,
        });
  
        console.log(response, 'response in addContact')
        console.log(response.data,  'response.data in addContact')
      
        return response.data;
      } catch (error) {
        throw new Error('Failed to add contact: ' + error.message);
      }
    }
  );
  
  
  export const deleteContact = createAsyncThunk(
      '/contacts/{contactId}',
      async (id) => {
        try{
       const response = await instance.delete(`/contacts/${id}`) 
         // console.log(response.data, "респонс в делит")
         return response.data;
        
        }
        catch (error) {
          throw new Error('Failed to delete contact: ' + error.message);
        }
      }
    );
    
export default authSlice.reducer;