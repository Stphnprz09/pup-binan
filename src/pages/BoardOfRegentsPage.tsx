import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { RegentsHero } from '../components/regents/RegentsHero'
import { RegentsSection } from '../components/regents/RegentsSection'

export function BoardOfRegentsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <RegentsHero />
        <RegentsSection />
      </main>
      <Footer />
    </div>
  )
}
