import itImage from '../../assets/images/programs/program-it.png'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { AreasUnderSurveySection } from '../../components/programs/AreasUnderSurveySection'
import { BsitOverviewSection } from '../../components/programs/BsitOverviewSection'
import { ProgramHero } from '../../components/programs/ProgramHero'

export function BsitPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <ProgramHero title="Bachelor of Science in Information Technology" code="BSIT-BN" image={itImage} />
        <BsitOverviewSection />
        <AreasUnderSurveySection programPath="/bsit" />
      </main>
      <Footer />
    </div>
  )
}
