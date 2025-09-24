import { useState } from 'react'
import './App.css'
import { Navbar } from './assets/Components/Navbar/Navbar'
import { Libraery } from './assets/Components/Libraery/Libraery'
import { Song } from './assets/Components/Song/Song'
import { MiniPlayer } from './assets/Components/MiniPlayer/MiniPlayer'
import { useContext } from 'react'
import { PlayerContext } from './assets/Components/PlayerContext/PlayerContext.jsx'
import { Albums } from './assets/Components/Albums/Albums.jsx'

function App() {

  const {audioRef,track} = useContext(PlayerContext);

  return (
    <>
    <div className='bg-[#000000] h-screen w-screen overflow-hidden'>
      <Navbar />
      <div className='flex flex-row'>
      <Libraery />
      <Song />
      </div>
      <MiniPlayer/>
      {track && <audio ref={audioRef} src={track.file} preload='auto'></audio>}
    </div>
    </>
  )
}

export default App
