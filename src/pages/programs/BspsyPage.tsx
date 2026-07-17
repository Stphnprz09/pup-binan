import psychologyImage from '../../assets/images/programs/program-psychology.png'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { AreasUnderSurveySection } from '../../components/programs/AreasUnderSurveySection'
import { BspsyOverviewSection } from '../../components/programs/BspsyOverviewSection'
import { ProgramHero } from '../../components/programs/ProgramHero'

export function BspsyPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <ProgramHero title="Bachelor of Science in Psychology" code="BSPSY-BN" image={psychologyImage} />
        <BspsyOverviewSection />
        <AreasUnderSurveySection />
      </main>
      <Footer />
    </div>
  )
}
