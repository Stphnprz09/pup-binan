import { ScrollReveal } from '../common/ScrollReveal'

const coveredTopics = [
  'Operations research and systems optimization',
  'Methods engineering, work design, and ergonomics',
  'Quality management and statistical process control',
  'Production planning and operations management',
  'Supply chain and logistics management',
  'Systems simulation and decision analysis',
  'Engineering economics and cost analysis',
  'Project management and data analytics',
]

const objectives = [
  'Apply mathematics, science, and engineering principles to analyze and improve complex production and service systems.',
  'Design efficient, safe, sustainable, and human-centered systems that integrate people, materials, information, equipment, and energy.',
  'Use modern analytical tools and technologies to support data-driven planning, optimization, and decision-making.',
  'Develop and implement quality, productivity, logistics, and operations strategies that improve organizational performance.',
  'Communicate effectively and work collaboratively as a member or leader of multidisciplinary teams.',
  'Manage engineering projects responsibly while considering economic, ethical, environmental, and social impacts.',
  'Demonstrate innovation, entrepreneurship, and research skills in addressing industrial and community needs.',
  'Pursue lifelong learning and professional development in response to evolving industrial engineering practices and technologies.',
]

export function BsieOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl space-y-20 px-5 lg:px-8">
        <ScrollReveal>
          <SectionHeading eyebrow="About BSIE" title="Program Description" />
          <div className="mt-9 rounded-2xl border border-slate-200 bg-[#f7f5f1] p-7 sm:p-9">
            <p className="leading-7 text-slate-600">
              The Bachelor of Science in Industrial Engineering (BSIE) is a four-year undergraduate program that prepares students to design, improve, and manage integrated systems of people, materials, information, equipment, and energy. It combines engineering, management, and analytical methods to make organizations more efficient, productive, safe, and sustainable. The program covers key areas such as:
            </p>
            <TopicList />
            <p className="mt-7 leading-7 text-slate-600">
              Through laboratory activities, industry exposure, research, and capstone projects, BSIE students learn to identify operational challenges and develop practical, data-driven solutions. Graduates are prepared to contribute to manufacturing, logistics, healthcare, technology, government, and other service-oriented organizations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeading eyebrow="What students will achieve" title="Objectives of the Program" />
          <p className="mt-8 text-center font-bold leading-7 text-slate-800">The Bachelor of Science in Industrial Engineering Program aims to provide training and practice that will enable students to:</p>
          <ObjectiveList />
        </ScrollReveal>
      </div>
    </section>
  )
}

function TopicList() {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {coveredTopics.map((topic) => (
        <li key={topic} className="flex gap-3 text-sm font-semibold text-slate-700">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8a1724]" />{topic}
        </li>
      ))}
    </ul>
  )
}

function ObjectiveList() {
  return (
    <ol className="mt-8 grid gap-4">
      {objectives.map((objective, index) => (
        <li key={objective} className="flex gap-4 rounded-xl border border-slate-200 p-5 text-sm leading-6 text-slate-600">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#8a1724] text-xs font-black text-white">{index + 1}</span>
          <span>{objective}</span>
        </li>
      ))}
    </ol>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a1724]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-amber-400" />
    </div>
  )
}
