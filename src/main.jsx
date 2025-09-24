import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import PlayerProvider from './assets/Components/PlayerContext/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerProvider>
      <App />
    </PlayerProvider>
    </BrowserRouter>
  </StrictMode>,
)
