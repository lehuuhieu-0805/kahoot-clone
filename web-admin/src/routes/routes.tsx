import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from '../components'
import { Creator, Home, SignIn, SignUp } from '../pages'

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/creator' element={<Creator />} />
      </Routes>
    </>
  )
}

export default Router