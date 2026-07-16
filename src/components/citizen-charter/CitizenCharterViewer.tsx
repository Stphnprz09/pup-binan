import citizenCharterPdf from '../../assets/pdf/01-OVPBSC-Citizens-Charter.pdf'
import { OfficialDocumentViewer } from '../documents/OfficialDocumentViewer'

export function CitizenCharterViewer() {
  return (
    <OfficialDocumentViewer
      documentTitle="Citizen's Charter"
      fileLabel="01-OVPBSC Citizen's Charter"
      pdfUrl={citizenCharterPdf}
    />
  )
}
