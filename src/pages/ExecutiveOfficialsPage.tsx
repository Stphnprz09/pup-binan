import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { OfficialsHero } from '../components/officials/OfficialsHero'
import { OfficialsSection } from '../components/officials/OfficialsSection'

export function ExecutiveOfficialsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <OfficialsHero />
        <OfficialsSection />
      </main>
      <Footer />
    </div>
  )
}
