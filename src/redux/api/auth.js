import axios from 'axios'


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = (token) => {
	// console.log('Setting token:', token);
	axios.defaults.headers.common.Authorization= `Bearer ${token}`
	// console.log(axios.defaults.headers.common.Authorization , 'in set token')
	
}
export const deleteToken = () => {
	delete axios.defaults.headers.common['Authorization']
}
export const getContacts = async () => {
	// console.log('getContactsApi');
	// console.log('body in getCont');
	// console.log(axios.defaults.headers.common.Authorization, 'in get all 1', Date.now());
	const waitForAuthorization = () => {
	  return new Promise((resolve) => {
		const checkAuthorization = () => {
		  if (axios.defaults.headers.common.Authorization) {
			resolve();
		  } else {
			setTimeout(checkAuthorization, 100); 
		  }
		};
		checkAuthorization();
	  });
	};
  
	await waitForAuthorization();
  
	const { data } = await axios.get('/contacts');
//	console.log(axios.defaults.headers.common.Authorization, 'in get all 2', Date.now());
  
	return data;
  }
  
export const addCont = async (body) => {
	const { data } = await axios.post('/contacts', body)
//	console.log(data, 'data in addcont')
//	console.log(axios.defaults.headers.common.Authorization , 'in add')

	return data

}
export const deleteCont = async (id) => {
//	console.log(id)
	const { data } = await axios.delete(`/contacts/${id}`) 
	
	return data
}
export const signUp = async (body) => {
	const { data } = await axios.post('/users/signup', body)
//	console.log(data, 'data in signUp')
//	console.log(data.token, 'data in signUp')
	setToken(data.token)
	return data
}
export const signIn = async (body) => {
	const { data } = await axios.post('/users/login', body)
///	console.log(data, 'data in signIn')
//	console.log(data.token, 'data in signIn')
	setToken(data.token)
	return data
}


export const refresh = async () => {
//	console.log("refresh")
	const token = JSON.parse(localStorage.getItem('persist:auth'))
	setToken(JSON.parse(token?.token))
//	console.log(JSON.parse(token?.token))
//	console.log(axios.defaults.headers.common.Authorization , 'in refr 1', Date.now())
const { data } = await axios('/users/current' )
//console.log(axios.defaults.headers.common.Authorization , 'in refr 2', Date.now())

	return data
}


export const updateProfile = async ({ id, body }) => {
	const { data } = await axios.put(`users/${id}`, body)

	return data
}
