import { useState } from 'react'
import './App.css'
import { Navbar } from './assets/Components/Navbar.jsx'
import { Librarysection } from './assets/Components/Librarysection.jsx'
import { Player } from './assets/Components/Player.jsx'
import { useContext } from 'react'
import { PlayerContext } from './assets/Components/PlayerContext.jsx'
import { Homepage } from './assets/Components/Homepage.jsx'


function App() {

  const {audioRef,track} = useContext(PlayerContext);

  return (
    <>
    <div className='bg-[#000000] h-screen w-screen overflow-hidden'>
      <Navbar />
      <div className='flex flex-row'>
      <Librarysection />
      <Homepage />
      </div>
      <Player />
      {track && <audio ref={audioRef} src={track.file} preload='auto'></audio>}
    </div>
    </>
  )
}

export default App
