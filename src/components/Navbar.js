import React from 'react';
import { IoMdContact } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => (
  <header>
    <nav className="left">
      <ul>
        <li>
          <Link to="/">
            <h1 className="title">Bookstore CMS</h1>
          </Link>
        </li>
        <li>
          <Link to="/">
            <p className="book">Bookstore</p>
          </Link>
        </li>
        <li>
          <Link to="/category">
            <p className="cat">Categories</p>
          </Link>
        </li>
      </ul>
    </nav>
    <i><IoMdContact size={35} color="rgb(46,164,255)" /></i>
  </header>
);

export default Navbar;
