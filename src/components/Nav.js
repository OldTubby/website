import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <li>
          <Link to=''>Home</Link>
        </li>
        <li>
          <Link to='/resume'>Resume'</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </nav>
      <hr></hr>
    </>
  );
}

export default Nav;
