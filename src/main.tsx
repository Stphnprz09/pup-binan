import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { SiteAccessGate } from './components/security/SiteAccessGate.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteAccessGate>
      <App />
    </SiteAccessGate>
  </StrictMode>,
)
