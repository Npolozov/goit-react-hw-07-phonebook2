import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

const fetchTasksFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const addTaskFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteTaskFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  // extraReducers: {
  //   [fetchContacts.fulfilled]: (state, action) => {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       items: action.payload,
  //     };
  //   },

  //   [fetchContacts.pending]: state => {
  //     return {
  //       ...state,
  //       isLoading: true,
  //       error: null,
  //     };
  //   },

  //   [fetchContacts.rejected]: (state, action) => {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       error: action.payload,
  //     };
  //   },
  //   [addContact.fulfilled]: (state, action) => {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       items: [...state.items, action.payload],
  //     };
  //   },

  //   [addContact.pending]: state => {
  //     return {
  //       ...state,
  //       isLoading: true,
  //       error: null,
  //     };
  //   },

  //   [addContact.rejected]: (state, action) => {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       error: action.payload,
  //     };
  //   },
  //   [deleteContact.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       task => task.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },

  //   [deleteContact.pending]: state => {
  //     return {
  //       ...state,
  //       isLoading: true,
  //       error: null,
  //     };
  //   },

  //   [deleteContact.rejected]: (state, action) => {
  //     return {
  //       ...state,
  //       isLoading: false,
  //       error: action.payload,
  //     };
  //   },
  // },
  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [addContact.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },
  //   [addContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [deleteContact.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       task => task.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchTasksFulfilledReducer)
      .addCase(addContact.fulfilled, addTaskFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteTaskFulfilledReducer)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), anyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
