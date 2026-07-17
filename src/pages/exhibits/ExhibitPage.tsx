import historyImage from '../../assets/images/about/about-history.png'
import campusImage from '../../assets/images/branding/pupbinan.webp'
import administrationImage from '../../assets/images/survey/survey-administration.png'
import curriculumImage from '../../assets/images/survey/survey-curriculum-instruction.png'
import facultyImage from '../../assets/images/survey/survey-faculty.png'
import researchImage from '../../assets/images/survey/survey-research.png'
import studentSupportImage from '../../assets/images/survey/survey-student-support.png'
import visionImage from '../../assets/images/survey/survey-vision-mission-goals.png'
import { ArrowIcon } from '../../components/common/ArrowIcon'
import { ScrollReveal } from '../../components/common/ScrollReveal'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'

const exhibits = [
  {
    title: "Citizen's Charter",
    description: 'View the university’s public service standards, procedures, requirements, and institutional commitments.',
    image: administrationImage,
    href: '/citizen-charter',
    available: true,
  },
  {
    title: 'University Code',
    description: 'Review the principles, policies, responsibilities, and standards governing the university community.',
    image: visionImage,
    href: '/university-code',
    available: true,
  },
  {
    title: 'Administrative Manual',
    description: 'Access the administrative policies, organizational responsibilities, and operating procedures of the university.',
    image: administrationImage,
    href: '/administrative-manual',
    available: true,
  },
  {
    title: 'Student Handbook',
    description: 'Find essential guidance on student rights, responsibilities, academic policies, conduct, and services.',
    image: studentSupportImage,
    href: '/student-handbook',
    available: true,
  },
  {
    title: 'Faculty Manual',
    description: 'Explore institutional policies, responsibilities, standards, and professional guidance for faculty members.',
    image: facultyImage,
    href: '/faculty-manual',
    available: true,
  },
  {
    title: 'CHED Memorandum Order',
    description: 'Access applicable Commission on Higher Education policies and program standards supporting accreditation.',
    image: curriculumImage,
    href: '/ched-memorandum-order',
    available: true,
  },
  {
    title: 'Presidential Decree No. 1341',
    description: 'Read the legal issuance that converted the Philippine College of Commerce into a polytechnic university.',
    image: historyImage,
    href: '/presidential-decree-no-1341',
    available: true,
  },
  {
    title: 'Syllabus',
    description: 'Browse course syllabi outlining learning outcomes, content, assessment, and instructional requirements.',
    image: researchImage,
    href: '/syllabus',
    available: true,
  },
]

export function ExhibitPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <section className="relative isolate grid min-h-[440px] place-items-center overflow-hidden px-5 py-20 text-center text-white lg:min-h-[500px]">
          <img src={campusImage} alt="PUP Biñan Campus" className="absolute inset-0 -z-20 size-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#39050b]/90 via-[#650b16]/70 to-black/45" />
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Accreditation resources</p>
            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">Exhibit</h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-400" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Access official university policies, manuals, legal references, and academic documents supporting accreditation.
            </p>
          </ScrollReveal>
        </section>

        <section className="py-20 lg:py-28" aria-labelledby="exhibit-directory-title">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Document directory</p>
              <h2 id="exhibit-directory-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Explore the Exhibits</h2>
              <p className="mt-5 leading-7 text-slate-600">Find important institutional references and supporting documents in one organized collection.</p>
            </ScrollReveal>

            <div className="mt-14 grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {exhibits.map((exhibit, index) => (
                <ScrollReveal key={exhibit.title} delay={(index % 3) * 80} className="h-full">
                  <a href={exhibit.href} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#8a1724]">
                    <div className="relative overflow-hidden">
                      <img src={exhibit.image} alt="" className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                      <span className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-wider shadow-sm ${exhibit.available ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-800'}`}>
                        {exhibit.available ? 'Available' : 'Coming soon'}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="text-xl font-bold leading-snug transition group-hover:text-[#8a1724]">{exhibit.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{exhibit.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#8a1724]">{exhibit.available ? 'View exhibit' : 'View coming soon page'} <ArrowIcon /></span>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
