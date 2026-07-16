import { CitizenCharterHero } from '../components/citizen-charter/CitizenCharterHero'
import { CitizenCharterViewer } from '../components/citizen-charter/CitizenCharterViewer'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function CitizenCharterPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <CitizenCharterHero />
        <CitizenCharterViewer />
      </main>
      <Footer />
    </div>
  )
}
