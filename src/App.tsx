import { AboutPage } from './pages/AboutPage'
import { AdministrativeManualPage } from './pages/AdministrativeManualPage'
import { BeedPage } from './pages/BeedPage'
import { BoardOfRegentsPage } from './pages/BoardOfRegentsPage'
import { BsbaHrmPage } from './pages/BsbaHrmPage'
import { BscpePage } from './pages/BscpePage'
import { BsiePage } from './pages/BsiePage'
import { BsitPage } from './pages/BsitPage'
import { BspsyPage } from './pages/BspsyPage'
import { BsedEnglishPage } from './pages/BsedEnglishPage'
import { BsedSocialStudiesPage } from './pages/BsedSocialStudiesPage'
import { CampusOfficialsPage } from './pages/CampusOfficialsPage'
import { CitizenCharterPage } from './pages/CitizenCharterPage'
import { ComingSoonPage } from './pages/ComingSoonPage'
import { HomePage } from './pages/HomePage'
import { HistoryPage } from './pages/HistoryPage'
import { OrganizationsPage } from './pages/OrganizationsPage'
import { StudentHandbookPage } from './pages/StudentHandbookPage'
import { UniversityOfficialsPage } from './pages/UniversityOfficialsPage'
import { UniversityCodePage } from './pages/UniversityCodePage'
import { VirtualCampusPage } from './pages/VirtualCampusPage'
import { VisionMissionPage } from './pages/VisionMissionPage'

function App() {
  if (window.location.pathname === '/virtual-campus') {
    return <VirtualCampusPage />
  }

  if (window.location.pathname === '/student-handbook') {
    return <StudentHandbookPage />
  }

  if (window.location.pathname === '/administrative-manual') {
    return <AdministrativeManualPage />
  }

  if (window.location.pathname === '/university-code') {
    return <UniversityCodePage />
  }

  if (window.location.pathname === '/citizen-charter') {
    return <CitizenCharterPage />
  }

  if (window.location.pathname === '/bspsy') {
    return <BspsyPage />
  }

  if (window.location.pathname === '/bsba-hrm') {
    return <BsbaHrmPage />
  }

  if (window.location.pathname === '/bsie') {
    return <BsiePage />
  }

  if (window.location.pathname === '/bscpe') {
    return <BscpePage />
  }

  if (window.location.pathname === '/bsed-ss') {
    return <BsedSocialStudiesPage />
  }

  if (window.location.pathname === '/bsed-en') {
    return <BsedEnglishPage />
  }

  if (window.location.pathname === '/beed') {
    return <BeedPage />
  }

  if (window.location.pathname === '/bsit') {
    return <BsitPage />
  }

  if (window.location.pathname === '/coming-soon') {
    return <ComingSoonPage />
  }

  if (window.location.pathname === '/organization') {
    return <OrganizationsPage />
  }

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
