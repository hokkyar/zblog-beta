import React from 'react'
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from './ProtectedRoutes'

import HomePage from '../pages/HomePage'
import TentangPage from '../pages/TentangPage'
import LoginPage from '../pages/LoginPage'
import DetailPage from '../pages/DetailPage'

import Dashboard from '../pages/Dashboard'
import Blogs from '../pages/Blogs'
import Profile from '../pages/Profile'
import ActionAdd from '../pages/ActionAdd'
import ActionEdit from '../pages/ActionEdit'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/tentang' element={<TentangPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/detail/:id' element={<DetailPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/blogs' element={<Blogs />} />
        <Route path='/dashboard/profile' element={<Profile />} />
        <Route path='/dashboard/blogs/add' element={<ActionAdd />} />
        <Route path='/dashboard/blogs/edit/:id' element={<ActionEdit />} />
      </Route>
    </Routes>
  )
}

export default Views