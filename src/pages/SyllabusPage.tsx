import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { SyllabusHero } from '../components/syllabus/SyllabusHero'
import { SyllabusSection } from '../components/syllabus/SyllabusSection'

export function SyllabusPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <SyllabusHero />
        <SyllabusSection />
      </main>
      <Footer />
    </div>
  )
}
