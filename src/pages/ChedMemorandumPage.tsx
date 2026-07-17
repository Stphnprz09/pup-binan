import { ChedMemorandumHero } from '../components/ched-memorandum/ChedMemorandumHero'
import { ChedMemorandumSection } from '../components/ched-memorandum/ChedMemorandumSection'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function ChedMemorandumPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <ChedMemorandumHero />
        <ChedMemorandumSection />
      </main>
      <Footer />
    </div>
  )
}
