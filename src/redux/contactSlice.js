import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    },

    [fetchContacts.pending]: state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },

    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, action.payload],
      };
    },

    [addContact.pending]: state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },

    [addContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    [deleteContact.pending]: state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },

    [deleteContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
