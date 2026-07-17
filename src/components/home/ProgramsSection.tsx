import elementaryImage from '../../assets/images/programs/program-elementary.png'
import englishImage from '../../assets/images/programs/program-english.png'
import computerEngineeringImage from '../../assets/images/programs/program-computer-engineering.png'
import humanResourceImage from '../../assets/images/programs/program-human-resource-management.png'
import industrialEngineeringImage from '../../assets/images/programs/program-industrial-engineering.png'
import itImage from '../../assets/images/programs/program-it.png'
import psychologyImage from '../../assets/images/programs/program-psychology.png'
import socialStudiesImage from '../../assets/images/programs/program-social-studies.png'
import { ArrowIcon } from '../common/ArrowIcon'
import { ScrollReveal } from '../common/ScrollReveal'

const programs = [
  {
    code: 'BSIT-BN',
    title: 'Bachelor of Science in Information Technology',
    description: 'Developing capable technology professionals through computing, innovation, and practical problem-solving.',
    image: itImage,
  },
  {
    code: 'BSED-EN-BN',
    title: 'Bachelor of Secondary Education Major in English',
    description: 'Preparing future educators to inspire learners through language, literature, and effective communication.',
    image: englishImage,
  },
  {
    code: 'BSED-SS-BN',
    title: 'Bachelor of Secondary Education Major in Social Studies',
    description: 'Forming reflective educators who promote civic awareness, culture, history, and social responsibility.',
    image: socialStudiesImage,
  },
  {
    code: 'BEED-BN',
    title: 'Bachelor of Elementary Education',
    description: 'Equipping compassionate teachers with creative and inclusive approaches for young learners.',
    image: elementaryImage,
  },
  {
    code: 'BSCPE-BN',
    title: 'Bachelor of Science in Computer Engineering',
    description: 'Preparing innovators to design and develop reliable computer hardware, embedded systems, and intelligent technologies.',
    image: computerEngineeringImage,
  },
  {
    code: 'BSIE-BN',
    title: 'Bachelor of Science in Industrial Engineering',
    description: 'Developing analytical professionals who improve systems, processes, productivity, and organizational performance.',
    image: industrialEngineeringImage,
  },
  {
    code: 'BSBA-HRM-BN',
    title: 'Bachelor of Science in Business Administration Major in Human Resource Management',
    description: 'Building people-centered business leaders skilled in talent development, workplace relations, and organizational strategy.',
    image: humanResourceImage,
  },
  {
    code: 'BSPSY-BN',
    title: 'Bachelor of Science in Psychology',
    description: 'Cultivating ethical and research-oriented professionals who understand human behavior and promote well-being.',
    image: psychologyImage,
  },
]

function getProgramHref(code: string) {
  if (code === 'BSIT-BN') return '/bsit'
  if (code === 'BEED-BN') return '/beed'
  if (code === 'BSED-EN-BN') return '/bsed-en'
  if (code === 'BSED-SS-BN') return '/bsed-ss'
  if (code === 'BSCPE-BN') return '/bscpe'
  if (code === 'BSIE-BN') return '/bsie'
  if (code === 'BSBA-HRM-BN') return '/bsba-hrm'
  if (code === 'BSPSY-BN') return '/bspsy'

  return '/coming-soon'
}

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">Academic excellence</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Programs Under Survey</h2>
          <p className="mt-5 leading-7 text-slate-600">Explore the academic programs included in the current accreditation survey.</p>
        </ScrollReveal>

        <div className="mt-14 grid items-stretch gap-7 md:grid-cols-2">
          {programs.map((program, index) => (
            <ScrollReveal key={program.code} delay={(index % 2) * 100} className="h-full">
              <a href={getProgramHref(program.code)} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="shrink-0 overflow-hidden">
                  <img src={program.image} alt={`${program.title} students`} className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8a1724]">{program.code}</p>
                  <h3 className="mt-3 text-xl font-bold leading-snug sm:text-2xl">{program.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{program.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#8a1724]">View program <ArrowIcon /></span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
