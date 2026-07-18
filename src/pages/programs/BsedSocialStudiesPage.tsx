import socialStudiesImage from '../../assets/images/programs/program-social-studies.png'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { AreasUnderSurveySection } from '../../components/programs/AreasUnderSurveySection'
import { BsedSocialStudiesOverviewSection } from '../../components/programs/BsedSocialStudiesOverviewSection'
import { ProgramHero } from '../../components/programs/ProgramHero'

export function BsedSocialStudiesPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <ProgramHero title="Bachelor of Secondary Education Major in Social Studies" code="BSED-SS-BN" image={socialStudiesImage} />
        <BsedSocialStudiesOverviewSection />
        <AreasUnderSurveySection programPath="/bsed-ss" />
      </main>
      <Footer />
    </div>
  )
}
