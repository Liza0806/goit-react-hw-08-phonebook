import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { appReducer } from './appState/slice'
import { authReducer } from './auth/slice'
import contactsReducer from './contactsSlice'
import filterReducer from './filterSlice'


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