import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800 p-4 fixed w-full z-50 flex justify-around">
      <Link to="home" className="text-white" spy={true} smooth={true} duration={500}>Home</Link>
      <Link to="wizard" className="text-white" spy={true} smooth={true} duration={500}>Wizard Form</Link>
    </nav>
  );
};

export default Navbar;
