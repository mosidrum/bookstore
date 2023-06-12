import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      const deleteIndex = state.findIndex((book) => book.id === action.payload);
      if (deleteIndex !== -1) {
        state.splice(deleteIndex, 1);
      }
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
