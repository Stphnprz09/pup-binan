import computerEngineeringImage from '../../assets/images/programs/program-computer-engineering.png'
import elementaryImage from '../../assets/images/programs/program-elementary.png'
import englishImage from '../../assets/images/programs/program-english.png'
import hrmImage from '../../assets/images/programs/program-human-resource-management.png'
import industrialEngineeringImage from '../../assets/images/programs/program-industrial-engineering.png'
import itImage from '../../assets/images/programs/program-it.png'
import psychologyImage from '../../assets/images/programs/program-psychology.png'
import socialStudiesImage from '../../assets/images/programs/program-social-studies.png'
import { ScrollReveal } from '../../components/common/ScrollReveal'
import { Footer } from '../../components/layout/Footer'
import { Header } from '../../components/layout/Header'

const programDetails = {
  bsit: {
    code: 'BSIT-BN',
    name: 'Bachelor of Science in Information Technology',
    image: itImage,
  },
  beed: {
    code: 'BEED-BN',
    name: 'Bachelor of Elementary Education',
    image: elementaryImage,
  },
  'bsed-en': {
    code: 'BSED-EN-BN',
    name: 'Bachelor of Secondary Education Major in English',
    image: englishImage,
  },
  'bsed-ss': {
    code: 'BSED-SS-BN',
    name: 'Bachelor of Secondary Education Major in Social Studies',
    image: socialStudiesImage,
  },
  bscpe: {
    code: 'BSCPE-BN',
    name: 'Bachelor of Science in Computer Engineering',
    image: computerEngineeringImage,
  },
  bsie: {
    code: 'BSIE-BN',
    name: 'Bachelor of Science in Industrial Engineering',
    image: industrialEngineeringImage,
  },
  'bsba-hrm': {
    code: 'BSBA-HRM-BN',
    name: 'Bachelor of Science in Business Administration Major in Human Resource Management',
    image: hrmImage,
  },
  bspsy: {
    code: 'BSPSY-BN',
    name: 'Bachelor of Science in Psychology',
    image: psychologyImage,
  },
} as const

export type ProgramSlug = keyof typeof programDetails

type AreaDetails = {
  romanNumeral: string
  title: string
  description: string
  parameters: string[]
}

const areaDetails: Record<number, AreaDetails> = {
  1: {
    romanNumeral: 'I',
    title: 'Vision, Mission, Goals, and Objectives',
    description:
      'The Area of Vision, Mission, Goals, and Objectives is the most fundamental of all ten (10) areas to be surveyed. Everything in the institution is justified only to the extent that it realizes its vision and mission. It is essential, therefore, for the institution to formulate the vision and mission that serve as the foundation of all its operations. The institution is judged by the degree to which these are attained, not by comparison with others.',
    parameters: [
      'Statement of Vision, Mission, Goals, and Objectives',
      'Dissemination and Acceptability',
    ],
  },
  2: {
    romanNumeral: 'II',
    title: 'Faculty',
    description:
      'The standard or quality of an institution or program is greatly measured by the qualifications of its faculty. Faculty members should possess strong academic qualifications, professional experience, desirable personal qualities, and a high level of professionalism. The institution must provide opportunities for continuous personal and professional development, fair and equitable workloads, and objective promotion criteria.',
    parameters: [
      'Statement of Vision, Mission, Goals, and Objectives',
      'Recruitment, Selection, and Orientation',
      'Faculty Adequacy and Loading',
      'Rank and Tenure',
      'Faculty Development',
      'Professional Performance and Scholarly Works',
      'Salaries, Fringe Benefits, and Incentives',
      'Professionalism',
    ],
  },
  3: {
    romanNumeral: 'III',
    title: 'Curriculum and Instruction',
    description:
      'The curriculum and instruction area evaluates how the program translates its educational goals into relevant, responsive, and well-structured learning experiences. It considers the quality of the program of studies, instructional processes, assessment practices, learning management, graduation requirements, and the administrative support provided for effective instruction.',
    parameters: [
      'Curriculum and Program of Studies',
      'Instructional Processes, Methodologies, and Learning Enhancement',
      'Assessment of Academic Performance',
      'Management of Learning',
      'Graduation Requirements',
      'Administrative Support for Effective Instruction',
    ],
  },
  4: {
    romanNumeral: 'IV',
    title: 'Support to Students',
    description:
      'Students are the reason for the establishment of learning institutions. The school therefore has the responsibility to support the family and other social institutions in developing the total personality of each student. Student services should be an integral part of institutional effectiveness, carefully planned and implemented to help students attain their full potential and become worthy contributors to society.',
    parameters: [
      'Student Services Program (SSP)',
      'Student Welfare',
      'Student Development',
      'Institutional Student Programs and Services',
      'Research, Monitoring, and Evaluation',
    ],
  },
  5: {
    romanNumeral: 'V',
    title: 'Research',
    description:
      'Research is an avenue through which new knowledge is discovered, applied, or verified and appropriate technologies are generated. An educational institution must maintain a firmly established research and development program whose priorities align with regional and national development goals, supported by sustained resources, facilities, equipment, and strong research linkages.',
    parameters: [
      'Priorities and Relevance',
      'Funding and Other Resources',
      'Implementation, Monitoring, Evaluation, and Utilization of Research',
      'Publication and Dissemination',
    ],
  },
  6: {
    romanNumeral: 'VI',
    title: 'Extension and Community Involvement',
    description:
      'Extension and community involvement connect the institution’s expertise and resources with the needs of its partner communities. Programs should be relevant, adequately funded, carefully planned, implemented, monitored, and evaluated with meaningful stakeholder participation to create sustainable social impact.',
    parameters: [
      'Priorities and Relevance',
      'Planning, Implementation, Monitoring, and Evaluation',
      'Funding and Other Resources',
      'Community Involvement and Participation',
    ],
  },
  7: {
    romanNumeral: 'VII',
    title: 'Library',
    description:
      'The library is the heart of any learning institution. It brings together people, hardware, software, information, and services to support teaching, research, and other academic endeavors. Its collections, facilities, personnel, services, financial support, and linkages must respond to the institution’s unique vision, mission, goals, and academic programs.',
    parameters: [
      'Administration',
      'Administrative Staff',
      'Collection Development, Organization, and Preservation',
      'Service and Utilization',
      'Physical Set-Up and Facilities',
      'Financial Support',
      'Linkages',
    ],
  },
  8: {
    romanNumeral: 'VIII',
    title: 'Physical Plant and Facilities',
    description:
      'The quality and adequacy of the physical plant and facilities of a learning institution contribute greatly to the successful implementation of its curricular programs. The campus, buildings, infrastructure, equipment, support spaces, and related services should complement institutional and program effectiveness.',
    parameters: [
      'Administration',
      'Administrative Staff',
      'Collection Development, Organization, and Preservation',
      'Service and Utilization',
      'Physical Set-Up and Facilities',
      'Financial Support',
      'Student Center',
      'Food Services – Canteen',
      'Accreditation Center',
      'Housing',
    ],
  },
  9: {
    romanNumeral: 'IX',
    title: 'Laboratories',
    description:
      'Laboratories are essential support systems for academic programs. Broadly defined, they include science and speech laboratories, demonstration facilities, shops, and other spaces for practicum activities that support the successful implementation of curricular programs, including their proper use, maintenance, equipment, and supplies.',
    parameters: [
      'Laboratories and Shop Facilities',
      'Equipment and Supplies',
      'Maintenance',
      'Special Provision',
    ],
  },
  10: {
    romanNumeral: 'X',
    title: 'Administration',
    description:
      'Administration is the engine of the institution in attaining its vision, mission, goals, and objectives. It is concerned with the general affairs and organizational performance of the institution. Administrative processes and structures must therefore facilitate efficient and effective institutional management.',
    parameters: [
      'Organization',
      'Academic Administration',
      'Student Administration',
      'Financial Management',
      'Student Administration',
      'Records Management',
      'Student Administration',
      'Performance of Administrative Personnel',
    ],
  },
}

type ProgramAreaPageProps = {
  programSlug: ProgramSlug
  areaNumber: number
}

const comingSoonLinks = ['System, Inputs and Processes', 'Implementation', 'Outcome/s']

function DocumentLink({ label }: { label: string }) {
  return (
    <a
      href="/coming-soon"
      className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:border-[#8a1724]/40 hover:bg-[#8a1724]/[0.04] hover:text-[#8a1724] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#8a1724]"
    >
      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#8a1724]/10 text-[#8a1724] transition group-hover:bg-[#8a1724] group-hover:text-white" aria-hidden="true">
        →
      </span>
      <span>{label}</span>
      <span className="ml-auto text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#8a1724]">
        Coming soon
      </span>
    </a>
  )
}

type ResourceCardProps = {
  heading: string
  subtitle?: string
  links: string[]
  delay?: number
}

function ResourceCard({ heading, subtitle, links, delay = 0 }: ResourceCardProps) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-[#8a1724] px-6 py-5 text-center text-white">
          <h3 className="text-xl font-black uppercase tracking-tight sm:text-2xl">{heading}</h3>
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          {subtitle && <p className="mb-7 text-center text-xl font-semibold leading-snug text-slate-800">{subtitle}</p>}
          <div className="mt-auto space-y-3">
            {links.map((link) => <DocumentLink key={link} label={link} />)}
          </div>
        </div>
        <div className="h-2 bg-amber-400" />
      </article>
    </ScrollReveal>
  )
}

export function ProgramAreaPage({ programSlug, areaNumber }: ProgramAreaPageProps) {
  const program = programDetails[programSlug]
  const area = areaDetails[areaNumber]

  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <Header />
      <main>
        <section className="relative isolate grid min-h-[440px] place-items-center overflow-hidden px-5 py-20 text-center text-white lg:min-h-[520px]">
          <img src={program.image} alt="" className="absolute inset-0 -z-20 size-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06172f]/90 via-[#092d55]/80 to-black/65" />
          <ScrollReveal className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
              {program.code} · Accreditation Area {area.romanNumeral}
            </p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Area {area.romanNumeral} — {area.title}
            </h1>
            <div className="mx-auto mt-8 h-1.5 w-40 rounded-full bg-[#a7192b]" />
          </ScrollReveal>
        </section>

        <section className="relative overflow-hidden py-20 lg:py-28" aria-labelledby="area-description-title">
          <div className="absolute -left-48 top-1/3 -z-10 size-[34rem] rotate-45 rounded-[5rem] border-[70px] border-[#8a1724]/[0.035]" />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ScrollReveal className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">
                {program.code} · {program.name}
              </p>
              <h2 id="area-description-title" className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">Area Description</h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-400" />
              <p className="mt-8 text-left leading-8 text-slate-600 sm:text-center">
                {area.description}
              </p>
            </ScrollReveal>

            <div className="mx-auto mt-14 grid max-w-4xl gap-7 md:grid-cols-2">
              <ResourceCard heading="Self Survey" links={['Self Survey']} />
              <ResourceCard heading="Program Performance Profile" links={['PPP']} delay={90} />
            </div>

            <div className="mt-8 grid items-stretch gap-7 lg:grid-cols-2">
              {area.parameters.map((parameter, index) => (
                <ResourceCard
                  key={`${index}-${parameter}`}
                  heading={`Parameter ${String.fromCharCode(65 + index)}`}
                  subtitle={parameter}
                  links={comingSoonLinks}
                  delay={(index % 2) * 90}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
