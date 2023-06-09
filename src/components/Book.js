import React from 'react';
import DefaultProps from './DefaultProps';
import '../styles/Book.scss';

const Book = ({ title, author }) => (
  <div className="container">
    <div className="book">
      <li>
        {title}
        {' '}
      </li>
      <li>
        {' '}
        {author}
      </li>
      <button
        type="submit"
        className="delete-btn"
      >
        Delete
      </button>
    </div>
  </div>
);

Book.propTypes = DefaultProps;

export default Book;
