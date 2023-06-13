import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultProps from './DefaultProps';
import '../styles/Book.scss';
import { allBooks, deleteBook } from '../redux/books/booksSlice';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector(allBooks);
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="container">
      {books.map((book) => (
        <div className="book" key={book.item_id}>
          <li>
            {book.title}
          </li>
          <li>
            {book.author}
          </li>
          <li>
            {book.category}
          </li>
          <button
            type="submit"
            className="delete-btn"
            onClick={() => handleDeleteBook(book.item_id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = DefaultProps;

export default Book;
