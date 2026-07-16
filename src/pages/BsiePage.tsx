import industrialEngineeringImage from '../assets/images/program-industrial-engineering.png'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { AreasUnderSurveySection } from '../components/programs/AreasUnderSurveySection'
import { BsieOverviewSection } from '../components/programs/BsieOverviewSection'
import { ProgramHero } from '../components/programs/ProgramHero'

export function BsiePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <ProgramHero title="Bachelor of Science in Industrial Engineering" code="BSIE-BN" image={industrialEngineeringImage} />
        <BsieOverviewSection />
        <AreasUnderSurveySection />
      </main>
      <Footer />
    </div>
  )
}
