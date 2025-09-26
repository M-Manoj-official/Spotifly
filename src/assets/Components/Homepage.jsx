import React from 'react'
import { Display } from './Display'
import { Albumpage } from './Albumpage'
import { Routes, Route } from 'react-router-dom'

export const Homepage = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Display />} />
      <Route path='Spotifly/album/:id' element={<Albumpage />} />
    </Routes>
    </>
  )
}
