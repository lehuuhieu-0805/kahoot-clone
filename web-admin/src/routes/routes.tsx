import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../pages'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
    </Routes>
  )
}

export default Router