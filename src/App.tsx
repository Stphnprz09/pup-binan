import { AboutPage } from './pages/about/AboutPage'
import { BoardOfRegentsPage } from './pages/about/BoardOfRegentsPage'
import { CampusOfficialsPage } from './pages/about/CampusOfficialsPage'
import { HistoryPage } from './pages/about/HistoryPage'
import { OrganizationsPage } from './pages/about/OrganizationsPage'
import { UniversityOfficialsPage } from './pages/about/UniversityOfficialsPage'
import { VirtualCampusPage } from './pages/about/VirtualCampusPage'
import { VisionMissionPage } from './pages/about/VisionMissionPage'
import { CertificateAuthenticityPage } from './pages/accreditation/CertificateAuthenticityPage'
import { ProgramCompliancePage } from './pages/accreditation/ProgramCompliancePage'
import { AdministrativeManualPage } from './pages/exhibits/AdministrativeManualPage'
import { ChedMemorandumPage } from './pages/exhibits/ChedMemorandumPage'
import { CitizenCharterPage } from './pages/exhibits/CitizenCharterPage'
import { ExhibitPage } from './pages/exhibits/ExhibitPage'
import { FacultyManualPage } from './pages/exhibits/FacultyManualPage'
import { PresidentialDecreePage } from './pages/exhibits/PresidentialDecreePage'
import { StudentHandbookPage } from './pages/exhibits/StudentHandbookPage'
import { SyllabusPage } from './pages/exhibits/SyllabusPage'
import { UniversityCodePage } from './pages/exhibits/UniversityCodePage'
import { HomePage } from './pages/home/HomePage'
import { BeedPage } from './pages/programs/BeedPage'
import { BsbaHrmPage } from './pages/programs/BsbaHrmPage'
import { BscpePage } from './pages/programs/BscpePage'
import { BsedEnglishPage } from './pages/programs/BsedEnglishPage'
import { BsedSocialStudiesPage } from './pages/programs/BsedSocialStudiesPage'
import { BsiePage } from './pages/programs/BsiePage'
import { BsitPage } from './pages/programs/BsitPage'
import { BspsyPage } from './pages/programs/BspsyPage'
import { ProgramsUnderSurveyPage } from './pages/programs/ProgramsUnderSurveyPage'
import { ComingSoonPage } from './pages/shared/ComingSoonPage'

function App() {
  if (window.location.pathname === '/syllabus') {
    return <SyllabusPage />
  }

  if (window.location.pathname === '/presidential-decree-no-1341') {
    return <PresidentialDecreePage />
  }

  if (window.location.pathname === '/ched-memorandum-order') {
    return <ChedMemorandumPage />
  }

  if (window.location.pathname === '/faculty-manual') {
    return <FacultyManualPage />
  }

  if (window.location.pathname === '/exhibit') {
    return <ExhibitPage />
  }

  if (window.location.pathname === '/program-under-survey') {
    return <ProgramsUnderSurveyPage />
  }

  if (window.location.pathname === '/certificate-of-program-compliance') {
    return <ProgramCompliancePage />
  }

  if (window.location.pathname === '/certificate-of-authenticity') {
    return <CertificateAuthenticityPage />
  }

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
