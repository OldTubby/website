import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
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
            <div className='navbar-nav'>
              <Link className='nav-link' to='/resume'>
                Resume
              </Link>
              <Link className='nav-link' to='/about'>
                About
              </Link>
              {/* <Link className='nav-link disabled'>Disabled</Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
