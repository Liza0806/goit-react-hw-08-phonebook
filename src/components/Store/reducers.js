import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { appReducer } from './appState/slice'
import { authReducer } from './auth/slice'
import contactsReducer from '../../redux/contactsSlice'
import filterReducer from '../../redux/filterSlice'


const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
}

export const reducer = {

	appState: appReducer,
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
}