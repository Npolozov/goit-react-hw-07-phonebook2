import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63bbcaed32d17a5090987bae.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      console.log(contacts.data);
      return contacts.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contact/addContact',
//   async (data, { rejectWithValue }) => {
//     try {
//       const contact = await axios.post('/contacts', { data });
//       return contact.data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contact/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const contact = await axios.delete(`/tasks/${id}`);
//       return contact.data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
