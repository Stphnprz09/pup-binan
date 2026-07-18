import humanResourceImage from '../../assets/images/programs/program-human-resource-management.png'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { AreasUnderSurveySection } from '../../components/programs/AreasUnderSurveySection'
import { BsbaHrmOverviewSection } from '../../components/programs/BsbaHrmOverviewSection'
import { ProgramHero } from '../../components/programs/ProgramHero'

export function BsbaHrmPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <ProgramHero title="Bachelor of Science in Business Administration Major in Human Resource Management" code="BSBA-HRM-BN" image={humanResourceImage} />
        <BsbaHrmOverviewSection />
        <AreasUnderSurveySection programPath="/bsba-hrm" />
      </main>
      <Footer />
    </div>
  )
}
