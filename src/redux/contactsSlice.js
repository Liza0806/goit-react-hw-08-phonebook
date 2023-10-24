import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { handleFulfilled, handlePending, handleRejected } from '../components/Store/appState/helpers'
import { initialState } from './state'
import { getAllContacts, addContact, deleteContact } from '../components/Store/auth/thunks'

 axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getAllContacts.fulfilled, (state, action) => {
      handleFulfilled(state, action, (payload) => payload);
      state.items = action.payload;
    })
      .addCase(getAllContacts.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(getAllContacts.pending, (state) => {
        handlePending(state);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state, action, (payload) => [...state.items, payload]);
        state.items.push(action.payload) ;
      })
      .addCase(addContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addContact.pending, (state) => {
        handlePending(state);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFulfilled(state, action, (payload) => state.items.filter(contact => contact.id !== payload.id));
        state.items = state.items.filter(contact => contact.id !== action.payload.id)
      })
      .addCase(deleteContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteContact.pending, (state) => {
        handlePending(state);
      });
  },
});



export const { searchContact } = contactsSlice.actions;

export default contactsSlice.reducer;
