/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultProps from './DefaultProps';
import '../styles/Book.scss';
import {
  allBooks, deleteBook, fetchBooks, removeBook,
} from '../redux/books/booksSlice';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = () => {
  const dispatch = useDispatch();
  const booksFromApi = useSelector(allBooks);

  const progress = 75
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDeleteBook = (id) => {
    dispatch(deleteBook({ id }));
    dispatch(removeBook({ id }));
  };

  return (
    <div className="container">
      {booksFromApi.map((book) => (
        <div className="book" key={book.item_id}>
          <div className="book-label left">
            <div className="head">
              <small className="category">{book.category}</small>
              <h5 className='title'>{book.title}</h5>
              <small className='author'>{book.author}</small>
            </div>
            <ul className='actions'>
              <li>Comments</li>
              |
              <li
                onClick={() => handleDeleteBook(book.item_id)}
              >Remove</li>
              |
              <li>Edit</li>
            </ul>
          </div>
          <div className="book-label middle">
            <CircularProgressbar value={progress} text={`${progress}%`} />
          </div>
          <div className="right">
            <p className='current'>CURRENT CHAPTER</p>
            <p className='chapter'>CHAPTER 17</p>
            <button className='progress'>UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </div>
  );
};

Book.propTypes = DefaultProps;

export default Book;
