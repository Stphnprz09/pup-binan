import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'

function App() {
  if (window.location.pathname === '/about-pup-binan') {
    return <AboutPage />
  }

  return <HomePage />
}

export default App
