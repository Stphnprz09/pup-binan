import { ScrollReveal } from '../common/ScrollReveal'

const coveredTopics = [
  'Computer hardware and architecture',
  'Programming and software development',
  'Digital logic and circuit design',
  'Microprocessors and embedded systems',
  'Computer networks and data communications',
  'Robotics, automation, and control systems',
  'Systems integration and cybersecurity',
  'Engineering design, research, and project management',
]

const objectives = [
  'Apply mathematics, science, and engineering principles to analyze and solve complex computer engineering problems.',
  'Design and develop reliable computer hardware, software, embedded systems, and integrated computing solutions that respond to user and industry needs.',
  'Use modern engineering tools, techniques, and technologies effectively in experimentation, system development, testing, and evaluation.',
  'Communicate technical ideas clearly and work productively as a member or leader of multidisciplinary teams.',
  'Practice the profession responsibly by considering ethical, legal, social, environmental, and economic factors in engineering decisions.',
  'Conduct research and pursue innovative solutions in computer engineering, automation, intelligent systems, and emerging technologies.',
  'Develop project management and entrepreneurial skills for planning and delivering sustainable technology-based projects.',
  'Engage in lifelong learning and professional development to remain responsive to advances in computing and engineering.',
]

export function BscpeOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl space-y-20 px-5 lg:px-8">
        <ScrollReveal>
          <SectionHeading eyebrow="About BSCPE" title="Program Description" />
          <div className="mt-9 rounded-2xl border border-slate-200 bg-[#f7f5f1] p-7 sm:p-9">
            <p className="leading-7 text-slate-600">
              The Bachelor of Science in Computer Engineering (BSCPE) is a four-year undergraduate program that combines the principles of electrical engineering and computer science. It prepares students to design, develop, test, and maintain computer hardware, software, and integrated systems. The program develops a strong foundation in areas such as:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {coveredTopics.map((topic) => (
                <li key={topic} className="flex gap-3 text-sm font-semibold text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8a1724]" />{topic}
                </li>
              ))}
            </ul>
            <p className="mt-7 leading-7 text-slate-600">
              Through laboratory work, collaborative design activities, internships, research, and capstone projects, BSCPE students learn to build practical and dependable computing solutions. The program also emphasizes innovation, professional ethics, effective communication, teamwork, and continuous learning in a rapidly evolving technological environment.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeading eyebrow="What students will achieve" title="Objectives of the Program" />
          <p className="mt-8 text-center font-bold leading-7 text-slate-800">The Bachelor of Science in Computer Engineering Program aims to provide training and practice that will enable students to:</p>
          <ol className="mt-8 grid gap-4">
            {objectives.map((objective, index) => (
              <li key={objective} className="flex gap-4 rounded-xl border border-slate-200 p-5 text-sm leading-6 text-slate-600">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#8a1724] text-xs font-black text-white">{index + 1}</span>
                <span>{objective}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </div>
    </section>
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
