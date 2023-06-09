import React from 'react';
import Newbook from './Newbook';
import Book from './Book';
import DefaultProps from './DefaultProps';

const BookList = () => {
  const Books = [
    {
      title: 'Book 1',
      author: 'Mr man',
    },
    {
      title: 'Book 2',
      author: 'Mr woman',
    },
    {
      title: 'Book 3',
      author: 'Mr manwoman',
    },
  ];
  /* eslint-disable react/no-array-index-key */
  return (
    <div className="booklist">
      <ul>
        {Books.map((book, index) => <Book key={index} title={book.title} author={book.author} />)}
      </ul>
      <Newbook />
    </div>
  );
};

BookList.prototype = DefaultProps;

export default BookList;
