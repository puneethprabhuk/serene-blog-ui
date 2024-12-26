import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-container">
        <div className="logo-container">
          <h1>Serene</h1>
        </div>
        <ul className="nav-items">
          <Link to='/' className='nav-item'>Home</Link>
          <Link to='/posts' className='nav-item'>Blogs</Link>
          <Link className='nav-item'>Categories</Link>
          <Link className='nav-item'>My Blogs</Link>
          <Link className='nav-item'>Write</Link>
        </ul>
        <div className="nav-button-container">
          <button className="btn login-btn">Login</button>
          <button className="btn signup-btn">Register</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar