import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {HashRouter} from 'react-router-dom'
import PlayerProvider from './assets/Components/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <PlayerProvider>
      <App />
    </PlayerProvider>
    </HashRouter>
  </StrictMode>,
)
