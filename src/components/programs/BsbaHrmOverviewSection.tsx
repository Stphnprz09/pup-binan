import { ScrollReveal } from '../common/ScrollReveal'

const coveredTopics = [
  'Human resource management and planning',
  'Talent acquisition and workforce selection',
  'Training, development, and career management',
  'Performance and rewards management',
  'Compensation and benefits administration',
  'Labor relations and employment law',
  'Organizational behavior and development',
  'Strategic human resource management',
]

const objectives = [
  'Apply business and human resource management principles to support organizational goals and workforce needs.',
  'Plan and administer ethical and inclusive recruitment, selection, onboarding, and employee retention practices.',
  'Design training, career development, performance management, and succession programs that strengthen employee capabilities.',
  'Develop equitable compensation, benefits, and rewards systems aligned with organizational strategy and applicable regulations.',
  'Promote positive employee relations, workplace well-being, diversity, and a culture of collaboration and respect.',
  'Interpret labor standards and employment laws responsibly in resolving workplace concerns and supporting sound HR policies.',
  'Use research, digital tools, and people analytics to make informed human resource decisions.',
  'Demonstrate effective communication, leadership, entrepreneurship, and a commitment to lifelong professional development.',
]

export function BsbaHrmOverviewSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl space-y-20 px-5 lg:px-8">
        <ScrollReveal>
          <SectionHeading eyebrow="About BSBA-HRM" title="Program Description" />
          <div className="mt-9 rounded-2xl border border-slate-200 bg-[#f7f5f1] p-7 sm:p-9">
            <p className="leading-7 text-slate-600">
              The Bachelor of Science in Business Administration Major in Human Resource Management (BSBA-HRM) is a four-year undergraduate program that prepares students to manage an organization&apos;s most important resource—its people. It combines a broad foundation in business with specialized knowledge in attracting, developing, engaging, and retaining a capable and diverse workforce. The program covers areas such as:
            </p>
            <TopicList />
            <p className="mt-7 leading-7 text-slate-600">
              Through case studies, collaborative projects, research, internships, and practical HR activities, students develop the professional judgment and interpersonal skills needed to address workplace challenges. The program prepares graduates for people-centered roles across private enterprises, public institutions, and nonprofit organizations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeading eyebrow="What students will achieve" title="Objectives of the Program" />
          <p className="mt-8 text-center font-bold leading-7 text-slate-800">The Bachelor of Science in Business Administration Major in Human Resource Management Program aims to provide training and practice that will enable students to:</p>
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
