import React from 'react'
import { Link, useLocation } from "react-router-dom"
import logo from '../images/favlogo.png'

export default function Navbar(props) {
  const location = useLocation();

  return (
    <nav className={`navbar navbar-expand-lg bg-color-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
      <a className="navbar-brand" href="https://rahules24.github.io/sirenscripts/">
        <img 
          src={logo} 
          style={{ marginLeft: '2rem', maxHeight: '50px' }} 
          alt="Logo" 
        />
      </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === "/rextutils" ? "active" : ""}`} 
                to="/rextutils"
                style={{fontSize: '20px'}}
              >
                RextUtils
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === "/rextutils/about" ? "active" : ""}`} 
                to="/rextutils/about"
                style={{fontSize: '18px'}}
              >
                README.md
              </Link>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}
