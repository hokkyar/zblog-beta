import React from 'react'
import '../assets/css/loader.css'

const Profile = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column' style={{ height: '80vh' }}>

      <div className='my-4'>
        <div className="ds-loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div className="ds-loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="ds-loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Profile