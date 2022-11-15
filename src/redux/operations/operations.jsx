import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchContactsAPI,
    deleteContactAPI,
    addContactAPI,
  } from 'backend/backend';

export const fetchContacts = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, thunkAPI) => {
      try {
        const response = await fetchContactsAPI();
        return response;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'tasks/deleteContact',
    async (id, { rejectWithValue }) => {
      try {
        await deleteContactAPI(id);
        return id;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'tasks/addContactThunk',
    async (obj, { rejectWithValue }) => {
      try {
        const response = await addContactAPI(obj);
        return response;
      } catch (e) {
        return rejectWithValue(e.message);
      }
    }
  );