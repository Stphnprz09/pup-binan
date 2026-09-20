import elementaryImage from '../../assets/images/programs/program-elementary.png'
import englishImage from '../../assets/images/programs/program-english.png'
import computerEngineeringImage from '../../assets/images/programs/program-computer-engineering.png'
import humanResourceImage from '../../assets/images/programs/program-human-resource-management.png'
import industrialEngineeringImage from '../../assets/images/programs/program-industrial-engineering.png'
import itImage from '../../assets/images/programs/program-it.png'
import psychologyImage from '../../assets/images/programs/program-psychology.png'
import socialStudiesImage from '../../assets/images/programs/program-social-studies.png'
import bsbaHrmCertificatePdf from '../../assets/pdf/PUPBN - COPC - BSBAHRM.pdf'
import bscpeCertificatePdf from '../../assets/pdf/PUPBN - COPC - BSCPE.pdf'
import bsieCertificatePdf from '../../assets/pdf/PUPBN - COPC - BSIE.pdf'
import { ScrollReveal } from '../common/ScrollReveal'

type ProgramCompliance = {
  code: string
  title: string
  image: string
  certificateUrl?: string
}

const programs: ProgramCompliance[] = [
  {
    code: 'BSIT-BN',
    title: 'Bachelor of Science in Information Technology',
    image: itImage,
    certificateUrl: 'https://drive.google.com/file/d/1iop1JhErwDgJZ1FadV177X0U7DayYVgT/view?usp=drive_link',
  },
  {
    code: 'BSED-SS-BN',
    title: 'Bachelor of Secondary Education Major in Social Studies',
    image: socialStudiesImage,
    certificateUrl: 'https://drive.google.com/file/d/147s1ceu-ONLQsTl8ChoFfS26lWp6LjNQ/view?usp=drive_link',
  },
  {
    code: 'BEED-BN',
    title: 'Bachelor of Elementary Education',
    image: elementaryImage,
    certificateUrl: 'https://drive.google.com/file/d/1F9eCmPkcMwz77TWlrHrXNo6dkmbGm2Eb/view?usp=drive_link',
  },
  {
    code: 'BSED-EN-BN',
    title: 'Bachelor of Secondary Education Major in English',
    image: englishImage,
    certificateUrl: 'https://drive.google.com/file/d/147s1ceu-ONLQsTl8ChoFfS26lWp6LjNQ/view?usp=drive_link',
  },
  {
    code: 'BSCPE-BN',
    title: 'Bachelor of Science in Computer Engineering',
    image: computerEngineeringImage,
    certificateUrl: bscpeCertificatePdf,
  },
  {
    code: 'BSIE-BN',
    title: 'Bachelor of Science in Industrial Engineering',
    image: industrialEngineeringImage,
    certificateUrl: bsieCertificatePdf,
  },
  {
    code: 'BSBA-HRM-BN',
    title: 'Bachelor of Science in Business Administration Major in Human Resource Management',
    image: humanResourceImage,
    certificateUrl: bsbaHrmCertificatePdf,
  },
  {
    code: 'BSPSY-BN',
    title: 'Bachelor of Science in Psychology',
    image: psychologyImage,
  },
]

function LinkIcon({ external }: { external: boolean }) {
  if (external) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current" strokeWidth="2">
        <path d="M14 5h5v5M19 5l-8 8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current" strokeWidth="2">
      <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ProgramComplianceSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-16 sm:py-20 lg:py-28" aria-labelledby="program-compliance-title">
      <div className="absolute -right-40 top-1/4 -z-10 size-[32rem] rotate-45 rounded-[5rem] border-[60px] border-[#8a1724]/[0.025]" />
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Official program records</p>
          <h2 id="program-compliance-title" className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl lg:text-5xl">Program Compliance Certificates</h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-5 leading-7 text-slate-600">Select a program to view its available certificate. Additional certificates will be published as soon as they become available.</p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:mt-16">
          {programs.map((program, index) => {
            const isAvailable = Boolean(program.certificateUrl)
            const isGoogleDrive = program.certificateUrl?.startsWith('https://drive.google.com/') ?? false

            return (
              <ScrollReveal key={program.code} delay={(index % 3) * 70}>
                <a
                  href={program.certificateUrl ?? '/coming-soon'}
                  target={isAvailable ? '_blank' : undefined}
                  rel={isAvailable ? 'noopener noreferrer' : undefined}
                  aria-label={isAvailable ? `View the ${program.title} compliance certificate` : `${program.title} certificate coming soon`}
                  className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#8a1724] sm:grid-cols-[220px_1fr] lg:grid-cols-[270px_1fr]"
                >
                  <div className="overflow-hidden">
                    <img src={program.image} alt="" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:aspect-auto sm:h-full sm:min-h-48" loading="lazy" />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8a1724]">{program.code}</p>
                      <span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wide ${isAvailable ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-800'}`}>
                        {isAvailable ? 'Available' : 'Coming soon'}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-[#8a1724] sm:text-2xl">{program.title}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#8a1724]">
                      {isAvailable ? (isGoogleDrive ? 'View on Google Drive' : 'View certificate PDF') : 'View coming soon page'} <LinkIcon external={isAvailable} />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
