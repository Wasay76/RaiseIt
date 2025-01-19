import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  
  // YOU MAY WANT TO GET RID OF STRICTMODE WHEN YOU DO SOME BACKEND FUNCTIONALITY SINCE IT MAY
  // CAUSE THE REQUESTS TO RUN EXTRA TIMES WHICH IS MORE RECOURSE CONSUMING

  <StrictMode>
    <App />
  </StrictMode>,
)
