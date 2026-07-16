import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { HistoryPage } from './pages/HistoryPage'
import { VisionMissionPage } from './pages/VisionMissionPage'

function App() {
  if (window.location.pathname === '/history') {
    return <HistoryPage />
  }

  if (window.location.pathname === '/vision-and-mission') {
    return <VisionMissionPage />
  }

  if (window.location.pathname === '/about-pup-binan') {
    return <AboutPage />
  }

  return <HomePage />
}

export default App
