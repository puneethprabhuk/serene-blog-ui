import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-container">
        <div className="logo-container">
          <h1>Serene</h1>
        </div>
        <ul className="nav-items">
          <li className='nav-item'>Home</li>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Blog</li>
          <li className='nav-item'>Contact</li>
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