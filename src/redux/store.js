// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import contactsReducer from "./contactsSlice";
// import filterReducer from "./filterSlice";
// import authReducer from "../components/AppBar/UserOptions";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { persistStore } from 'redux-persist';

// import { appReducer } from './appSlice';

// import {
	
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from 'redux-persist'

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token']
// }



// export const store = configureStore({
//   reducer: combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
//     appState: appReducer,
//     auth: persistReducer(authPersistConfig, authReducer), // Используйте persistedAuthReducer
//   }),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       }
//     })
// });


// export const persistor = persistStore(store)

