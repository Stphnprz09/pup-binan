import { AboutPage } from './pages/AboutPage'
import { BoardOfRegentsPage } from './pages/BoardOfRegentsPage'
import { CampusOfficialsPage } from './pages/CampusOfficialsPage'
import { HomePage } from './pages/HomePage'
import { HistoryPage } from './pages/HistoryPage'
import { UniversityOfficialsPage } from './pages/UniversityOfficialsPage'
import { VisionMissionPage } from './pages/VisionMissionPage'

function App() {
  if (window.location.pathname === '/board-of-regent') {
    return <BoardOfRegentsPage />
  }

  if (window.location.pathname === '/campus-official') {
    return <CampusOfficialsPage />
  }

  if (window.location.pathname === '/university-official') {
    return <UniversityOfficialsPage />
  }

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
