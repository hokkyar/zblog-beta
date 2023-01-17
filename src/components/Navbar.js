import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { BsPersonFill } from 'react-icons/bs'
import { BiBookReader, BiDoorOpen } from 'react-icons/bi'
import { TbDashboard } from 'react-icons/tb'
import { UserContext } from "../App"

const Navbar = ({ isLogin }) => {
  const { setUser } = useContext(UserContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-2 sticky-top">
      <div className="container">
        <Link className="navbar-brand text-white" style={{ fontSize: '1.8rem' }}><span className="text-info">Z</span>Blog</Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
          {
            isLogin ?
              <div className='dropdown ms-auto'>
                <ul className="navbar-nav">
                  <button className="btn btn-secondary btn-md" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <RxDashboard />
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className='dropdown-item' to='/dashboard'><TbDashboard /> Dashboard</Link></li>
                    <li><Link className='dropdown-item' to='/dashboard/blogs'><BiBookReader /> Blog Anda</Link></li>
                    <li><Link className='dropdown-item' to='/dashboard/profile'><BsPersonFill /> Profile</Link></li>
                    <li onClick={() => {
                      setUser({ loggedIn: false })
                    }}><Link className='dropdown-item' to='/dashboard'><span className="text-danger"><BiDoorOpen /> Logout</span></Link></li>
                  </ul>
                </ul>
              </div>
              :
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
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar