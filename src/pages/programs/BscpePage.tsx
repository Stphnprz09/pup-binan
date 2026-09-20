import computerEngineeringImage from '../../assets/images/programs/program-computer-engineering.png'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { AreasUnderSurveySection } from '../../components/programs/AreasUnderSurveySection'
import { BscpeOverviewSection } from '../../components/programs/BscpeOverviewSection'
import { ProgramHero } from '../../components/programs/ProgramHero'
import { bscpeAreaFolderLinks } from '../../data/bscpeAreaFolderLinks'

export function BscpePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <ProgramHero title="Bachelor of Science in Computer Engineering" code="BSCPE-BN" image={computerEngineeringImage} />
        <BscpeOverviewSection />
        <AreasUnderSurveySection programPath="/bscpe" areaLinks={bscpeAreaFolderLinks} />
      </main>
      <Footer />
    </div>
  )
}
