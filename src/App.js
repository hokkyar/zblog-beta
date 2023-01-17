import './assets/css/style.css'
import LoadingScreen from './components/LoadingScreen'
import Views from './components/Views'
import Navbar from './components/Navbar'
import { useState, useEffect, createContext } from 'react'

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {
        loading ?
          <LoadingScreen loading={loading} />
          :
          <UserContext.Provider value={{ user, setUser }}>
            <Navbar isLogin={user.loggedIn} />
            <Views />
          </UserContext.Provider>
      }
    </>
  )
}

export default App
