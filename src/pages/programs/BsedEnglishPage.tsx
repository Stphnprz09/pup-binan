import englishImage from '../../assets/images/programs/program-english.png'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { AreasUnderSurveySection } from '../../components/programs/AreasUnderSurveySection'
import { BsedEnglishOverviewSection } from '../../components/programs/BsedEnglishOverviewSection'
import { ProgramHero } from '../../components/programs/ProgramHero'

export function BsedEnglishPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <ProgramHero title="Bachelor of Secondary Education Major in English" code="BSED-EN-BN" image={englishImage} />
        <BsedEnglishOverviewSection />
        <AreasUnderSurveySection programPath="/bsed-en" />
      </main>
      <Footer />
    </div>
  )
}
