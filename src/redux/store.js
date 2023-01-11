import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

// const rootReducer = combineReducers({
//   contact: contactsReducer,
//   filter: filterReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filter: filterReducer,
  },
});
