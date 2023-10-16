import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addContact = createAsyncThunk(
   // "contacts/push",
    "/contacts",
    async (newContact) => {
      try {
       // const response = await axios.post('contacts', {
        const response = await axios.post('/contacts', {
          name: newContact.name,
          number: newContact.number,
         // createdAt: Date.now(),
        });
        return response.data;
      }  catch (error) {
        throw new Error('Failed to add contact: ' + error.message);
      }
    }
  );

export const deleteContact = createAsyncThunk(
   // "contacts/delete",
    '/contacts/{contactId}',
    async (id) => {
      try{
     //  const response = await axios.delete(`contacts/${id}`) 
     const response = await axios.delete(`/contacts/${id}`) 
       // console.log(response.data, "респонс в делит")
       return response.data;
      
      }
      catch (error) {
        throw new Error('Failed to delete contact: ' + error.message);
      }
    }
  );
  
export const getAllContacts = createAsyncThunk(
   // "contacts/get",
    '/contacts',
  
    async () => {
      try {
      //  const response = await axios.get('contacts');
        const response = await axios.get('/contacts');
       //  console.log(response)
        return response.data;
      }  catch (error) {
        throw new Error('Failed to fetch contacts: ' + error.message);
      }
    }
  );

export const handleFulfilled = (state, action, callback) => {
    state.items = callback(action.payload);
    state.isLoading = false;
    state.error = null;
  };
  
export const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  };
  
export const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
  };
  