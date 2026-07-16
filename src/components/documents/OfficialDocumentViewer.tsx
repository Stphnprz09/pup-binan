import { ScrollReveal } from '../common/ScrollReveal'

type OfficialDocumentViewerProps = {
  documentTitle: string
  fileLabel: string
  pdfUrl: string
}

function OpenIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current" strokeWidth="2">
      <path d="M14 5h5v5M19 5l-8 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function OfficialDocumentViewer({ documentTitle, fileLabel, pdfUrl }: OfficialDocumentViewerProps) {
  const viewerUrl = `${pdfUrl}#toolbar=1&navpanes=1&view=FitH`
  const headingId = `${documentTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-document-title`

  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-16 sm:py-20 lg:py-24" aria-labelledby={headingId}>
      <div className="absolute -right-40 top-24 -z-10 size-[30rem] rotate-45 rounded-[5rem] border-[60px] border-[#8a1724]/[0.025]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Official document</p>
          <h2 id={headingId} className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">{documentTitle} PDF</h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-5 leading-7 text-slate-600">Use the viewer controls to browse pages, zoom, search, or print the document.</p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 sm:mt-12" delay={100}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
            <div className="flex flex-col gap-3 border-b border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-900 sm:text-base">{fileLabel}</p>
                <p className="mt-1 text-xs text-slate-500">Official university document · PDF</p>
              </div>
              <a
                href={viewerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#8a1724] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#720d18] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#8a1724]"
              >
                Open full screen <OpenIcon />
              </a>
            </div>

            <object
              data={viewerUrl}
              type="application/pdf"
              title={`PUP ${documentTitle} PDF`}
              className="block h-[70vh] min-h-[520px] w-full bg-slate-100 lg:h-[82vh] lg:min-h-[720px]"
            >
              <div className="grid min-h-[520px] place-items-center p-8 text-center">
                <div className="max-w-md">
                  <p className="font-bold text-slate-900">This browser cannot display the PDF inside the page.</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Open the document in a new browser tab to view it with your device&apos;s PDF reader.</p>
                  <a href={viewerUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-[#8a1724] hover:underline">
                    Open {documentTitle} <OpenIcon />
                  </a>
                </div>
              </div>
            </object>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
