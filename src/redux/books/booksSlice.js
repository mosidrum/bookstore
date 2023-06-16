import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const uid = 'VozxCjqZrKRSioJNHbQV';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uid}/books`;

const initialState = {
  books: [],
  loading: false,
  message: '',
};

const generateNum = () => {
  const minNum = 1;
  const maxNum = 100;
  const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  return randomNum;
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await axios.get(baseUrl);
  return res.data;
});

export const addNewBook = createAsyncThunk('books/addNewBook', async (book) => {
  try {
    const randonNum = generateNum();
    const res = await axios.post(baseUrl, {
      item_id: uuidv4(),
      title: book.title,
      author: book.author,
      category: book.category,
      progress: randonNum,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const removeBook = createAsyncThunk('books/removeBooks', async (id) => {
  try {
    const idToDelete = `/${id.id}`;
    const res = await axios.delete(baseUrl + idToDelete, {
      item_id: id.id,
    });
    return res.data;
  } catch (error) {
    throw Error(error.message);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      const { title, author, category } = action.payload;
      const book = {
        item_id: uuidv4(),
        title,
        author,
        category,
        progress: generateNum(),
      };
      state.books.push(book);
    },
    deleteBook(state, action) {
      const removeId = action.payload.id;
      state.books = state.books.filter((book) => book.item_id !== removeId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        const result = action.payload;
        state.books = Object.entries(result).map(([id]) => ({
          item_id: id,
          title: result[id][0].title,
          author: result[id][0].author,
          category: result[id][0].category,
          progress: generateNum(),
        }));
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
        state.message = 'Cant fetch books';
      });
  },
});

export const allBooks = (state) => state.books.books;

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
