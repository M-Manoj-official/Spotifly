import { useState } from 'react'
import './App.css'
import { Navbar } from './assets/Components/Navbar/Navbar'
import { Libraery } from './assets/Components/Libraery/Libraery'
import { Song } from './assets/Components/Song/Song'
import { MiniPlayer } from './assets/Components/MiniPlayer/MiniPlayer'

function App() {

  return (
    <>
    <div className='bg-[#000000] h-screen w-screen overflow-hidden'>
      <Navbar />
      <Libraery />
      <Song />
      <MiniPlayer/>
    </div>
    </>
  )
}

export default App
