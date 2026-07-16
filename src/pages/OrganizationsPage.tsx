import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { OrganizationsHero } from '../components/organizations/OrganizationsHero'
import { OrganizationsSection } from '../components/organizations/OrganizationsSection'

export function OrganizationsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <OrganizationsHero />
        <OrganizationsSection />
      </main>
      <Footer />
    </div>
  )
}
