import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* eslint-disabled */
import { CircularProgressbar } from 'react-circular-progressbar';
import DefaultProps from './DefaultProps';
import '../styles/Book.scss';
import {
  allBooks, deleteBook, fetchBooks, removeBook,
} from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = () => {
  const dispatch = useDispatch();
  const booksFromApi = useSelector(allBooks);
  console.log(booksFromApi);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDeleteBook = (id) => {
    dispatch(removeBook({ id }));
    dispatch(deleteBook({ id }));
  };

  return (
    <div className="container">
      {booksFromApi.map((book) => (
        <div className="book" key={book.item_id}>
          <div className="book-label left">
            <div className="head">
              <small className="category">{book.category}</small>
              <h5 className="title">{book.title}</h5>
              <small className="author">{book.author}</small>
            </div>
            <ul className="actions">
              <button type="submit">Comments</button>
              |
              <button
                className="btn"
                type="submit"
                onClick={() => handleDeleteBook(book.item_id)}
              >
                Remove
              </button>
              |
              <button type="submit">Edit</button>
            </ul>
          </div>
          <div className="middle">
            <CircularProgressbar value={book.progress} />
            <div className="side">
              <span className="num">
                {book.progress}
                %
              </span>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="right">
            <p className="current">CURRENT CHAPTER</p>
            <p className="chapter">CHAPTER 17</p>
            <button type="submit" className="progress">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = DefaultProps;

export default Book;
