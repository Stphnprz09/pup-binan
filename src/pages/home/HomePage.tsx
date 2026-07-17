import { DirectorSection } from '../../components/home/DirectorSection'
import { HeroSection } from '../../components/home/HeroSection'
import { ProgramsSection } from '../../components/home/ProgramsSection'
import { WelcomeSection } from '../../components/home/WelcomeSection'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main id="home">
        <HeroSection />
        <WelcomeSection />
        <DirectorSection />
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  )
}
