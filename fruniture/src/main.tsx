import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-ignore: CSS side-effect import declaration not found
import "./index.css"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
