import React from "react"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Chris</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/resume">Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Empty</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="#">Action</Link>
                  <Link className="dropdown-item" to="#">Another action</Link>
                  <Link className="dropdown-item" to="#">Something else here</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">Separated link</Link>
                </div>
              </li> */}
            </ul>
            <a href="https://github.com/OldTubby">
              <img className="socialIcon" alt="GitHub" src="https://cdn2.iconfinder.com/data/icons/social-icons-rectangular-black/512/github-512.png" />
            </a>
            <a href="https://www.linkedin.com/in/chrisleensvaart/">
              <img className="socialIcon" alt="LinkedIn" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" />
            </a>
            <a href="https://twitter.com/cleensvaart">
              <img className="socialIcon" alt="Twitter" src="https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_twiter-512.png" />
            </a>
            {/* <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav