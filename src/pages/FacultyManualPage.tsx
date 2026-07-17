import facultyManualPdf from '../assets/pdf/PUP-Faculty-Manual.pdf'
import { OfficialDocumentHero } from '../components/documents/OfficialDocumentHero'
import { OfficialDocumentViewer } from '../components/documents/OfficialDocumentViewer'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function FacultyManualPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <OfficialDocumentHero
          eyebrow="Faculty policies and guidance"
          title="Faculty Manual"
          description="Review the policies, responsibilities, professional standards, benefits, and institutional guidance for university faculty members."
        />
        <OfficialDocumentViewer documentTitle="Faculty Manual" fileLabel="PUP Faculty Manual" pdfUrl={facultyManualPdf} />
      </main>
      <Footer />
    </div>
  )
}
