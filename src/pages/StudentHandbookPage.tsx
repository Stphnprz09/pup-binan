import studentHandbookPdf from '../assets/pdf/02-PUP-Student-Handbook.pdf'
import { OfficialDocumentHero } from '../components/documents/OfficialDocumentHero'
import { OfficialDocumentViewer } from '../components/documents/OfficialDocumentViewer'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

export function StudentHandbookPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <OfficialDocumentHero
          eyebrow="Student information and guidance"
          title="Student Handbook"
          description="Find essential information about student rights, responsibilities, academic policies, conduct, and university services."
        />
        <OfficialDocumentViewer documentTitle="Student Handbook" fileLabel="PUP Student Handbook" pdfUrl={studentHandbookPdf} />
      </main>
      <Footer />
    </div>
  )
}
