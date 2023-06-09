import React from 'react';
import Newbook from './Newbook';
import DefaultProps from './DefaultProps';
import Book from './Book';
import '../styles/Book.scss';

const BookList = () => (
  <div className="booklist">
    <Book />
    <Newbook />
  </div>
);

BookList.prototype = DefaultProps;

export default BookList;
