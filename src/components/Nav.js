import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <div className='container'>
          <Link className='navbar-brand' to=''>
            Home | Portfolio
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav ms-auto'>
              <Link className='nav-link' to='/resume'>
                Resume
              </Link>
              {/* <Link className='nav-link' to='/about'>
                About
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
