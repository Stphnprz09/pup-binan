import { CampusOfficialsHero } from '../components/campus-officials/CampusOfficialsHero'
import { CampusOfficialsSection } from '../components/campus-officials/CampusOfficialsSection'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function CampusOfficialsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <CampusOfficialsHero />
        <CampusOfficialsSection />
      </main>
      <Footer />
    </div>
  )
}
