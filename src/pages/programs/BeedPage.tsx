import elementaryImage from '../../assets/images/programs/program-elementary.png'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { AreasUnderSurveySection } from '../../components/programs/AreasUnderSurveySection'
import { BeedOverviewSection } from '../../components/programs/BeedOverviewSection'
import { ProgramHero } from '../../components/programs/ProgramHero'

export function BeedPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <ProgramHero title="Bachelor of Elementary Education" code="BEED-BN" image={elementaryImage} />
        <BeedOverviewSection />
        <AreasUnderSurveySection />
      </main>
      <Footer />
    </div>
  )
}
