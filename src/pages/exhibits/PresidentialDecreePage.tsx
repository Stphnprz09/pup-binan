import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'
import { PresidentialDecreeContent } from '../../components/presidential-decree/PresidentialDecreeContent'
import { PresidentialDecreeHero } from '../../components/presidential-decree/PresidentialDecreeHero'

export function PresidentialDecreePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <PresidentialDecreeHero />
        <PresidentialDecreeContent />
      </main>
      <Footer />
    </div>
  )
}
