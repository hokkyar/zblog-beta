import React from 'react'
import BeatLoader from "react-spinners/BeatLoader"

const LoadingScreen = (props) => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <BeatLoader color={'#4a505e'} loading={props.loading} size={15} />
    </div>
  )
}

export default LoadingScreen