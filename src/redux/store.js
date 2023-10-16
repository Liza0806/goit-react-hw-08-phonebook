import { combineReducers, configureStore } from '@reduxjs/toolkit';

import contactsReducer from "./contactsSlice";
import filterReducer from "./filterSlice";
import authReducer from "../components/AppBar/UserOptions"

export const store = configureStore({
  reducer:   combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer
  })
});

export const persistor = null;
