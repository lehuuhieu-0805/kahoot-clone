import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Instructions } from '../pages'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/instructions' element={<Instructions />} />
    </Routes>
  )
}

export default Router