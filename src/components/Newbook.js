import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Newbook.scss';
import { addBook, addNewBook } from '../redux/books/booksSlice';

const Newbook = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const initialState = {
    title: '',
    author: '',
    category: '',
  };
  const [bookDetails, setBookdetails] = useState({ initialState });

  const handleBookDetails = (e) => {
    const {
      name, value, type, category,
    } = e.target;
    setBookdetails((prevBookDetails) => ({
      ...prevBookDetails,
      [name]: type === 'checkbox' ? category : value,
    }));
  };

  const bookAdded = async (e) => {
    e.preventDefault();
    if (bookDetails.title === '' || bookDetails.author === '' || bookDetails.category === '') {
      setMessage('All fileds are required');
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    }
    dispatch(addBook(bookDetails));
    dispatch(addNewBook(bookDetails));
    setBookdetails(initialState);
  };

  return (
    <div className="newbook">
      <h2>ADD NEW BOOK</h2>
      <form
        onSubmit={bookAdded}
        className="form-book"
      >
        <input
          name="title"
          className="add-book"
          type="text"
          onChange={handleBookDetails}
        />
        <label
          htmlFor="author"
        >
          <input
            name="author"
            type="text"
            className="author"
            placeholder="Author name"
            onChange={handleBookDetails}
          />
        </label>
        <label
          htmlFor="categories"
        >
          <select
            name="category"
            className="categories"
            onChange={handleBookDetails}
          >
            <option value="categories">Categories</option>
            <option value="Finance">Finance</option>
            <option value="Non-fiction">Non-fiction</option>
            <option value="History">History</option>
            <option value="Science">Science</option>
            <option value="Art">Art</option>
            <option value="Fiction">Fiction</option>
          </select>
        </label>
        <button
          type="submit"
          className="btn"
        >
          ADD BOOKS
        </button>
      </form>
      <span className="message">{message}</span>
    </div>
  );
};

export default Newbook;
