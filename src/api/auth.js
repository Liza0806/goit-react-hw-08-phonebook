import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://connections-api.herokuapp.com',
})


export const setToken = (token) => {
	instance.defaults.headers.common.Authorization = `Bearer ${token}`
}
export const deleteToken = () => {
	delete instance.defaults.headers.common['Authorization']
}
export const getContacts = async (body) => {
//	console.log('getContactsApi')
	const { data } = await instance.get('/contacts', body)
	return data

}
export const addCont = async (body) => {
	const { data } = await instance.post('/contacts', body)
	console.log(data, 'data in addcont')

	return data

}
export const deleteCont = async (id) => {
	console.log(id)
	const { data } = await instance.delete(`/contacts/${id}`) 
	
	return data
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


export const refresh = async () => {
	const token = JSON.parse(localStorage.getItem('persist:auth'))
	setToken(JSON.parse(token?.token))
	const { data } = await instance('/users/current')
	setToken(data.token)
	return data
}
export const updateProfile = async ({ id, body }) => {
	const { data } = await instance.put(`users/${id}`, body)

	return data
}
