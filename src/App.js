import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/App.scss';
import BookList from './components/BookList';
import Category from './components/Category';

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  </div>
);

export default App;
