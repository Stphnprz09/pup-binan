import { CertificateAuthenticityHero } from '../components/certificate-authenticity/CertificateAuthenticityHero'
import { CertificateAuthenticitySection } from '../components/certificate-authenticity/CertificateAuthenticitySection'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function CertificateAuthenticityPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <CertificateAuthenticityHero />
        <CertificateAuthenticitySection />
      </main>
      <Footer />
    </div>
  )
}
