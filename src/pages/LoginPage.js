import React, { useContext, useState } from 'react'
import { HiLockClosed } from 'react-icons/hi'
import { RiAdminFill } from 'react-icons/ri'
import { useNavigate } from "react-router"
import { UserContext } from "../App"

const LoginPage = () => {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (email === 'admin@gmail.com' && password === '123') {
      setUser({ loggedIn: true })
      navigate('/dashboard')
    } else {
      console.log('email atau passwor salah!')
    }
  }

  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: '70vh' }}>
      <div className="row d-flex justify-content-center flex-wrap">
        <div className="col-12">
          <h3 className='my-3 text-center'><RiAdminFill className='mb-1' /> <span className="text-primary">Z</span>Blog Login</h3>
        </div>
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="login-input">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="Masukkan email" onChange={({ target: { value } }) => setEmail(value)} />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Masukkan password" onChange={({ target: { value } }) => setPassword(value)} />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="btn d-block m-auto my-3 text-white"><span><HiLockClosed className='mb-1' /></span> Masuk</button>
              {/* <button type="button" class="btn d-block m-auto my-3 text-white" disabled><span class="spinner-border spinner-border-sm"></span> Login</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage