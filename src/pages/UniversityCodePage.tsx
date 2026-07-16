import universityCodePdf from '../assets/pdf/03-University-Code.pdf'
import { OfficialDocumentHero } from '../components/documents/OfficialDocumentHero'
import { OfficialDocumentViewer } from '../components/documents/OfficialDocumentViewer'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function UniversityCodePage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <OfficialDocumentHero
          eyebrow="Institutional governance"
          title="University Code"
          description="Explore the policies, principles, responsibilities, and standards that govern the university community."
        />
        <OfficialDocumentViewer documentTitle="University Code" fileLabel="PUP University Code" pdfUrl={universityCodePdf} />
      </main>
      <Footer />
    </div>
  )
}
