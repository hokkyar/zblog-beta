import React from 'react'
import { NavLink } from 'react-router-dom'

const VisitorNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-2 sticky-top">
      <div className="container">
        <a className="navbar-brand text-white" style={{ fontSize: '1.8rem' }} href="#"><span className="text-info">Z</span>Blog</a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className='nav-link' to='/'>Beranda</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link' to='/tentang'>Tentang</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link' to='/login'>Masuk</NavLink>
                </li>
              </ul>
        </div>
      </div>
    </nav>
  )
}

export default VisitorNav