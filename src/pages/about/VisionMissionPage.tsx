import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { HymnSection } from '../../components/vision-mission/HymnSection'
import { PrinciplesSection } from '../../components/vision-mission/PrinciplesSection'
import { StrategicGoalsSection } from '../../components/vision-mission/StrategicGoalsSection'
import { VisionMissionHero } from '../../components/vision-mission/VisionMissionHero'

export function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <VisionMissionHero />
        <PrinciplesSection />
        <HymnSection />
        <StrategicGoalsSection />
      </main>
      <Footer />
    </div>
  )
}
