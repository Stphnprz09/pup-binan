import administrativeManualPdf from '../assets/pdf/Administrative-Manual.pdf'
import { OfficialDocumentHero } from '../components/documents/OfficialDocumentHero'
import { OfficialDocumentViewer } from '../components/documents/OfficialDocumentViewer'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function AdministrativeManualPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <OfficialDocumentHero
          eyebrow="Policies and procedures"
          title="Administrative Manual"
          description="Review the administrative policies, organizational responsibilities, and procedures that guide university operations."
        />
        <OfficialDocumentViewer documentTitle="Administrative Manual" fileLabel="PUP Administrative Manual" pdfUrl={administrativeManualPdf} />
      </main>
      <Footer />
    </div>
  )
}
