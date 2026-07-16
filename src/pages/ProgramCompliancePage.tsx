import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { ProgramComplianceHero } from '../components/program-compliance/ProgramComplianceHero'
import { ProgramComplianceSection } from '../components/program-compliance/ProgramComplianceSection'

export function ProgramCompliancePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <ProgramComplianceHero />
        <ProgramComplianceSection />
      </main>
      <Footer />
    </div>
  )
}
