import computerEngineeringImage from '../assets/images/program-computer-engineering.png'
import elementaryImage from '../assets/images/program-elementary.png'
import englishImage from '../assets/images/program-english.png'
import humanResourceImage from '../assets/images/program-human-resource-management.png'
import industrialEngineeringImage from '../assets/images/program-industrial-engineering.png'
import itImage from '../assets/images/program-it.png'
import psychologyImage from '../assets/images/program-psychology.png'
import socialStudiesImage from '../assets/images/program-social-studies.png'
import campusImage from '../assets/images/pupbinan.webp'
import { ArrowIcon } from '../components/common/ArrowIcon'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'

const programs = [
  {
    code: 'BSIT-BN',
    title: 'Bachelor of Science in Information Technology',
    description: 'Explore computing, information systems, software development, networking, and technology-driven problem-solving.',
    image: itImage,
    href: '/bsit',
  },
  {
    code: 'BEED-BN',
    title: 'Bachelor of Elementary Education',
    description: 'Discover the preparation, teaching strategies, and professional formation provided for future elementary educators.',
    image: elementaryImage,
    href: '/beed',
  },
  {
    code: 'BSED-EN-BN',
    title: 'Bachelor of Secondary Education Major in English',
    description: 'Learn about language, literature, communication, and learner-centered preparation for future English educators.',
    image: englishImage,
    href: '/bsed-en',
  },
  {
    code: 'BSED-SS-BN',
    title: 'Bachelor of Secondary Education Major in Social Studies',
    description: 'Explore the program’s focus on history, society, governance, culture, and responsible citizenship education.',
    image: socialStudiesImage,
    href: '/bsed-ss',
  },
  {
    code: 'BSCPE-BN',
    title: 'Bachelor of Science in Computer Engineering',
    description: 'Discover the integration of computer hardware, software, embedded systems, networks, and intelligent technologies.',
    image: computerEngineeringImage,
    href: '/bscpe',
  },
  {
    code: 'BSIE-BN',
    title: 'Bachelor of Science in Industrial Engineering',
    description: 'Learn how the program develops professionals who optimize systems, processes, quality, and organizational performance.',
    image: industrialEngineeringImage,
    href: '/bsie',
  },
  {
    code: 'BSBA-HRM-BN',
    title: 'Bachelor of Science in Business Administration Major in Human Resource Management',
    description: 'Explore people-centered business practices in talent development, employee relations, and organizational strategy.',
    image: humanResourceImage,
    href: '/bsba-hrm',
  },
  {
    code: 'BSPSY-BN',
    title: 'Bachelor of Science in Psychology',
    description: 'Discover the scientific study of behavior, mental processes, research, assessment, and human well-being.',
    image: psychologyImage,
    href: '/bspsy',
  },
]

export function ProgramsUnderSurveyPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <section className="relative isolate grid min-h-[440px] place-items-center overflow-hidden px-5 py-20 text-center text-white lg:min-h-[500px]">
          <img src={campusImage} alt="PUP Biñan Campus" className="absolute inset-0 -z-20 size-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#39050b]/90 via-[#650b16]/70 to-black/45" />
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Academic excellence</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Programs Under Survey</h1>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-400" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Explore the academic programs included in the current accreditation survey at PUP Biñan Campus.
            </p>
          </ScrollReveal>
        </section>

        <section className="py-20 lg:py-28" aria-labelledby="program-directory-title">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ScrollReveal className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Program directory</p>
              <h2 id="program-directory-title" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Explore Our Programs</h2>
              <p className="mt-5 leading-7 text-slate-600">Access each program’s description, objectives, and accreditation areas from one place.</p>
            </ScrollReveal>

            <div className="mt-14 grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => (
                <ScrollReveal key={program.code} delay={(index % 3) * 80} className="h-full">
                  <a href={program.href} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#8a1724]">
                    <div className="overflow-hidden">
                      <img src={program.image} alt="" className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8a1724]">{program.code}</p>
                      <h3 className="mt-3 text-xl font-bold leading-snug transition group-hover:text-[#8a1724]">{program.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{program.description}</p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#8a1724]">View program <ArrowIcon /></span>
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
