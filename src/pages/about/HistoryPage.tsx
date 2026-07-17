import { BinanHistorySection } from '../../components/history/BinanHistorySection'
import { HistoryHero } from '../../components/history/HistoryHero'
import { PupHistorySection } from '../../components/history/PupHistorySection'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'

export function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <HistoryHero />
        <PupHistorySection />
        <BinanHistorySection />
      </main>
      <Footer />
    </div>
  )
}
