import React from 'react';
import { useSelector } from 'react-redux';
import DefaultProps from './DefaultProps';
import '../styles/Book.scss';
import { allBooks } from '../redux/books/booksSlice';
import Button from './Button';

const Book = () => {
  const books = useSelector(allBooks);

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
          <Button itemId={book.item_id} />
        </div>
      ))}
    </div>
  );
};

Book.propTypes = DefaultProps;

export default Book;
