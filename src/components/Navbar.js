import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
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
            <p className="book">BOOKS</p>
          </Link>
        </li>
        <li>
          <Link to="/category">
            <p className="cat">CATEGORIES</p>
          </Link>
        </li>
      </ul>
    </nav>
    <div className="Oval">
      <i><BsFillPersonFill size={25} color="rgb(46,164,255)" className="icon" /></i>
    </div>
  </header>
);

export default Navbar;
