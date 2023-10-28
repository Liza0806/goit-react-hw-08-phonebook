import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = (token) => {
axios.defaults.headers.common.Authorization= `Bearer ${token}`
}
export const unSetToken = (token) => {
	axios.defaults.headers.common.Authorization= ``
}

export const registrationThunk = createAsyncThunk('/users/signup',async credentials => {
	try {
		const {data} = await axios.post('/users/signup', credentials)
		setToken(data.token)
	//	console.log(data.token)
		return data
	}
	catch (error) {
		console.log(error, 'error in registration');
		throw error; 
	  }
})

export const loginThunk = createAsyncThunk('/users/login', async credentials => {
	try {
		const { data } = await axios.post('/users/login', credentials)
	// 	console.log(data.token)
		setToken(data.token)
		return data
	} catch (error) {
		console.log(error, 'error in login');
		throw error; 
	}
}
	
)
export const logOut = createAsyncThunk('/users/logout', async() => {
try {
await axios.post('/users/logout');
unSetToken()

}  catch (error) {
	console.log(error, 'error in logout');
	throw error; 
}
}

)

export const refreshThunk = createAsyncThunk(
	'/users/current',
	async (_, thunkAPI) => {
	
	//	console.log(thunkAPI, 'thunkAPI', Date.now())

	  const state = thunkAPI.getState();

	//  console.log(state, 'state',  Date.now())
	 

	  const persistedToken = state.auth.token;
 // console.log(persistedToken, 'persistedToken',  Date.now() )
	  if (persistedToken === null) {
//		console.log('persistedToken === null',  Date.now());
		return;
	  }  
	  setToken(persistedToken);
  
	  try {
		const { data } = await axios.get('/users/current');
	//	console.log(data, 'data users in refresh',  Date.now())
		return data;
	  } catch (error) {
		console.log(error, 'error in refresh',  Date.now());
		throw error; 
	  }
	}
  );
  

  export const getAllContacts = createAsyncThunk('contacts', async (_, thunkAPI) => {
	let state = thunkAPI.getState();
	// console.log(state, 'state', Date.now());
	const token = state.auth.token;
	let isLoggedIn = state.auth.isLoggedIn;
  
	if (!token) {
	  console.log('Token is null or undefined');
	  return;
	}
  
	
	while (isLoggedIn !== true) {
	  await new Promise(resolve => setTimeout(resolve, 100));
	  state = thunkAPI.getState(); // Обновить состояние
	  isLoggedIn = state.auth.isLoggedIn;
	}
  
	try {
	  const { data } = await axios.get('/contacts');
	//  console.log(data, 'contacts data', Date.now());
	  return data;
	} catch (error) {
	  console.log(error, 'error in get all', Date.now());
	  throw error;
	}
  });
 // В этом коде мы используем цикл while, чтобы проверять значение isLoggedIn. Когда isLoggedIn становится true, мы выходим из цикла и продолжаем выполнение запроса.
  
  
  
  
  
  
export const addContact = createAsyncThunk('contacts/addContact', async credentials => {
	try {
		const { data } = await axios.post('contacts', credentials)
		return data
	} catch (error) {
		console.log(error, 'error in add');
		throw error; 
	}
})

export const deleteContact = createAsyncThunk('/contacts/{contactId}', async id => {
	try {
		const { data } = await axios.delete(`/contacts/${id}`)
		return data
	} catch (error) {
		console.log(error, 'error in deleteContact');
		throw error; 
	}
})
	