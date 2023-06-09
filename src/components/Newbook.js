import React from 'react';
import '../styles/Newbook.scss';

const Newbook = () => (
  <div className="newbook">
    <h4>ADD NEW BOOK</h4>
    <form>
      <input
        className="add-book"
        type="text"
        placeholder="Please add a book"
      />
      <label
        htmlFor="categories"
      >
        <select
          className="categories"
        >
          <option value="">Categories</option>
          <option value="option1">Finance</option>
          <option value="option2">Non-fiction</option>
          <option value="option3">History</option>
          <option value="option4">Science</option>
          <option value="option5">Art</option>
          <option value="option6">Fiction</option>
        </select>
      </label>
      <button
        type="submit"
        className="btn"
      >
        ADD BOOKS
      </button>
    </form>
    <span>to display error message</span>
  </div>
);

export default Newbook;
