import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { CampusToursSection } from '../../components/virtual-campus/CampusToursSection'
import { VirtualCampusHero } from '../../components/virtual-campus/VirtualCampusHero'

export function VirtualCampusPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <VirtualCampusHero />
        <CampusToursSection />
      </main>
      <Footer />
    </div>
  )
}
