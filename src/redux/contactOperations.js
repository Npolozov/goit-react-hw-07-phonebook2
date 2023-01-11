import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63bbcaed32d17a5090987bae.mockapi.io/';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

fetchContacts();

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const contact = await axios.post('/contacts', { data });
      return contact.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'tasks/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await axios.delete(`/tasks/${id}`);
      return contact.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
