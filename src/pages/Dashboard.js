import React from 'react'
import '../assets/css/card.css'
import { TbDashboard } from 'react-icons/tb'
import { BsPersonFill } from 'react-icons/bs'
import { BiBookReader } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column gap-3" style={{ height: '80vh' }}>
        <h2 className='text-center'>Selamat datang <span className="text-info">Hokky</span>!</h2>
        <div className="ds-card">
          <Link to='/dashboard'>
            <div className="ds-item ds-item--1">
              <TbDashboard style={{ color: 'rgba(149,149,255,1)' }} />
              <span className="text text--1"> Dashboard </span>
            </div>
          </Link>
          <Link to='/dashboard/blogs'>
            <div className="ds-item ds-item--2">
              <BiBookReader style={{ color: 'rgba(252,161,71,1)' }} />
              <span className="text text--2"> Blog Anda </span>
            </div>
          </Link>
          <Link to='/dashboard/profile'>
            <div className="ds-item ds-item--3">
              <BsPersonFill style={{ color: 'rgba(66,193,110,1)' }} />
              <span className="text text--3"> Profile </span>
            </div>
          </Link>
          <div className="ds-item ds-item--4">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path fill="rgba(147, 148, 149, 1)" d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
            <span className="text text--4"> Coming Soon.. </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard