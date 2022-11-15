import { configureStore, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations/operations';


const filterSlice = createSlice({
  name: 'myFilter',
  initialState: '',
  reducers: {
    filterValue(state, action) {
      return action.payload;
    },
  },
});
export const { filterValue } = filterSlice.actions;

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const setPending = state => {
  state.isLoading = true;
  state.error = null;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: setPending,
    [deleteContact.pending]: setPending,
    [addContact.pending]: setPending,
    [fetchContacts.rejected]: setError,
    [deleteContact.rejected]: setError,
    [addContact.rejected]: setError,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
    },
  },
});

export const store = configureStore({
  reducer: {
    myContacts: tasksSlice.reducer,
    filterTask: filterSlice.reducer,
  },
});
