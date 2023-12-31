import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TeamProvider } from './context/Team_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeamProvider>
    <App />
    </TeamProvider>
    
  </React.StrictMode>,
)
