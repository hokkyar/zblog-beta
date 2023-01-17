import React from 'react'
import ProfileImg from '../assets/img/profile.png'
import { GiHummingbird } from 'react-icons/gi'

const TentangPage = () => {
  return (
    <>
      <div className="p-5 about-image">
        <div className="container py-3 about-image-bg">
          <h2 className="text-white text-center">Terimakasih sudah berkunjung! <GiHummingbird /></h2>
        </div>
      </div>

      <div className="about-img text-center">
        <img src={ProfileImg} className="rounded-circle img-thumbnail" alt="profile.png" />
      </div>

      <div className="container d-flex justify-content-center text-center">
        <div className="card mt-3">
          <div className="card-header text-white">
            Quote of the day
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p className='fs-6'>"People say nothing is impossible, but i do nothing everyday"</p>
              <p className="blockquote-footer m-2">Hokky Aryasta</p>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  )
}

export default TentangPage