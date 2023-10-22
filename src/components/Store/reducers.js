import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
// import { productsReducer } from './products/slice'
// import { reducerTodo } from './todoWithReducers/reducer'
// import { userReducer } from './users/slice'
import { appReducer } from './appState/slice'
import { authReducer } from './auth/slice'
import contactsReducer from '../../redux/contactsSlice'
import filterReducer from '../../redux/filterSlice'

// import contactsReducer from "./contactsSlice";  !!!!!!!!!!!
// import filterReducer from "./filterSlice";       !!!!!!!!!!!!

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
}

// const authPersistedReducer = persistReducer(persistConfig, authReducer)

export const reducer = {

	//users: userReducer,
	appState: appReducer,
	// auth: authPersistedReducer,
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
}