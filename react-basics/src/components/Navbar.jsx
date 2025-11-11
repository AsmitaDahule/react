import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/" className='hover:text-yellow-300 transition duration-200'>Home</Link>
      <Link to="/about" className='hover:text-yellow-300 transition duration-200'>About</Link>
      <Link to="/contact" className='hover:text-yellow-300 transition duration-200'>Contact</Link>
    </div>
  );
};

export default Navbar;
