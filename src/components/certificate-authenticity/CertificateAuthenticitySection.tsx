import certificateImage from '../../assets/images/COA-PUPBC.webp'
import { ScrollReveal } from '../common/ScrollReveal'

const certificateDriveUrl = 'https://drive.google.com/file/d/1YPrzO077AwpYOmD5r7HGcycdmUoyNQUM/view'

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current" strokeWidth="2">
      <path d="M14 5h5v5M19 5l-8 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CertificateAuthenticitySection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-16 sm:py-20 lg:py-28" aria-labelledby="certificate-title">
      <div className="absolute -left-40 top-1/4 -z-10 size-[30rem] rotate-45 rounded-[5rem] border-[60px] border-[#8a1724]/[0.025]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-8">
        <ScrollReveal direction="right" className="mx-auto w-full max-w-xl lg:max-w-none">
          <a
            href={certificateDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the Certificate of Authenticity on Google Drive"
            className="group block rounded-2xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#8a1724]"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 sm:p-5">
              <img
                src={certificateImage}
                alt="PUP Quality Assurance Center Certificate of Authenticity"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.015]"
                loading="lazy"
              />
            </div>
          </a>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={120}>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Verified accreditation records</p>
          <h2 id="certificate-title" className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Certificate of Authenticity</h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-7 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            This certificate confirms that the information, documents, and data presented on the PUP Biñan Campus accreditation website are authentic and have been verified by the university.
          </p>
          <div className="mt-7 rounded-xl border border-[#8a1724]/15 bg-white p-5 text-sm leading-6 text-slate-600 shadow-sm sm:p-6">
            The official copy is available through Google Drive for convenient viewing and verification.
          </div>
          <a
            href={certificateDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#8a1724] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#8a1724]/20 transition hover:-translate-y-0.5 hover:bg-[#720d18] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8a1724] sm:w-auto"
          >
            View certificate on Google Drive <ExternalLinkIcon />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
