import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
import { signIn, signUp, getContacts, addCont, deleteCont } from '../../../api/auth'

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
// export const refreshThunk = createAsyncThunk(
// 	'auth/refresh',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const data = await refresh()
// 			return data
// 		} catch (error) {
// 			return rejectWithValue(error.response.data)
// 		}
// 	}
// ) NA VREMYA UDALILA!!!!
export const updateProfileThunk = createAsyncThunk(
	// 'users/updateProfile',
	// async (body, { rejectWithValue }) => {
	// 	try {
	// 		const data = await updateProfile(body)
	// 		return data
	// 	} catch (error) {
	// 		return rejectWithValue(error.response.data)
	// 	}
	// }
)
// export const getAllContacts = createAsyncThunk(
//     '/contacts',
 
//    async () => {
//      try {
     
//        const response = await instance.get('/contacts');
//         console.log('2getAllContacts')
//    //  console.log(response)
//    //  console.log(response.data)
//        return response.data;
//      }  catch (error) {
//        throw new Error('Failed to fetch contacts: ' + error.message);
//      }
//    }
//  );

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
 
// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (newContact) => {
//       try {
//         const response = await axios.post('/contacts', {
//           name: newContact.name,
//           number: newContact.number,
//         });
  
//         console.log(response, 'response in addContact')
//         console.log(response.data,  'response.data in addContact')
      
//         return response.data;
//       } catch (error) {
//         throw new Error('Failed to add contact: ' + error.message);
//       }
//     }
//   );
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

  
//   export const deleteContact = createAsyncThunk(
//       '/contacts/{contactId}',
//       async (id) => {
//         try{
//        const response = await axios.delete(`/contacts/${id}`) 
//          // console.log(response.data, "респонс в делит")
//          return response.data;
        
//         }
//         catch (error) {
//           throw new Error('Failed to delete contact: ' + error.message);
//         }
//       }
//     );
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