import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import '../styles/button.scss';

const Button = (itemId) => {
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <button
      type="submit"
      className="delete-btn"
      onClick={handleDeleteBook(itemId)}
    >
      Delete
    </button>
  );
};

export default Button;
